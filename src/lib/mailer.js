import nodemailer from "nodemailer";
import { company } from "@/data/company";

/**
 * Creates and returns an email transport.
 * Supports:
 * 1. Custom SMTP credentials via environment variables (SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS)
 * 2. Standard Gmail App Password (SMTP_USER + SMTP_PASS)
 * 3. Fallback to Ethereal / Test transport when no SMTP credentials are provided, ensuring
 *    forms never crash and inquiries are always logged with preview URLs.
 */
export async function getEmailTransporter() {
  const host = process.env.SMTP_HOST || "smtp.gmail.com";
  const port = Number(process.env.SMTP_PORT) || 465;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (user && pass) {
    return {
      transporter: nodemailer.createTransport({
        host,
        port,
        secure: port === 465, // true for 465, false for 587
        auth: {
          user,
          pass,
        },
      }),
      isTest: false,
      from: `"${company.name} Inquiries" <${user}>`,
    };
  }

  // Fallback: create ethereal test account for local testing & preview
  try {
    const testAccount = await nodemailer.createTestAccount();
    const testTransporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });
    return {
      transporter: testTransporter,
      isTest: true,
      from: `"${company.name} Web Contact" <${testAccount.user}>`,
    };
  } catch (err) {
    console.warn("Could not create test email account:", err);
    return null;
  }
}

/**
 * Sends a notification email for Contact & Estimate inquiries
 */
export async function sendInquiryEmail({ type, data }) {
  const recipient = process.env.NOTIFICATION_RECEIVER_EMAIL || company.email;
  const client = await getEmailTransporter();

  if (!client) {
    console.warn("No mail client configured; skipping email dispatch.");
    return { success: false, reason: "No transporter available" };
  }

  const isContact = type === "contact";
  const subject = isContact
    ? `[New Web Inquiry] ${data.subject || "General Inquiry"} - from ${data.name}`
    : `[New Estimate Request] ${data.projectType} - from ${data.fullName}`;

  const htmlContent = isContact
    ? `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 12px; background-color: #ffffff;">
        <div style="background-color: #102C5C; padding: 20px; border-radius: 8px; margin-bottom: 24px; text-align: center;">
          <h2 style="color: #ffffff; margin: 0; font-size: 20px;">MANJULA CONSTRUCTIONS</h2>
          <p style="color: #FFD52A; margin: 6px 0 0 0; font-size: 13px; font-weight: bold; letter-spacing: 1px; text-transform: uppercase;">New Contact Message Received</p>
        </div>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 14px;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; width: 140px; font-weight: bold;">Sender Name:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #102C5C; font-weight: bold;">${data.name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-weight: bold;">Phone Number:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #102C5C;">
              <a href="tel:${data.phone}" style="color: #102C5C; font-weight: bold; text-decoration: underline;">${data.phone}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-weight: bold;">Email:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #102C5C;">
              ${data.email ? `<a href="mailto:${data.email}" style="color: #102C5C;">${data.email}</a>` : "Not provided"}
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-weight: bold;">Subject / Service:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #102C5C; font-weight: 600;">${data.subject || "General Inquiry"}</td>
          </tr>
        </table>

        <div style="background-color: #f9fafb; padding: 18px; border-radius: 8px; border: 1px solid #e5e7eb; margin-bottom: 24px;">
          <h4 style="margin: 0 0 10px 0; color: #102C5C; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Message Details:</h4>
          <p style="margin: 0; color: #374151; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${data.message}</p>
        </div>

        <div style="border-top: 1px solid #e5e7eb; padding-top: 16px; font-size: 12px; color: #9ca3af; text-align: center;">
          Received via Manjula Constructions Official Website · Kochchikade, Negombo
        </div>
      </div>
    `
    : `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 12px; background-color: #ffffff;">
        <div style="background-color: #102C5C; padding: 20px; border-radius: 8px; margin-bottom: 24px; text-align: center;">
          <h2 style="color: #ffffff; margin: 0; font-size: 20px;">MANJULA CONSTRUCTIONS</h2>
          <p style="color: #FFD52A; margin: 6px 0 0 0; font-size: 13px; font-weight: bold; letter-spacing: 1px; text-transform: uppercase;">New Project Estimate Request</p>
        </div>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 14px;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; width: 140px; font-weight: bold;">Client Name:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #102C5C; font-weight: bold;">${data.fullName}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-weight: bold;">Phone Number:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #102C5C;">
              <a href="tel:${data.phone}" style="color: #102C5C; font-weight: bold; text-decoration: underline;">${data.phone}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-weight: bold;">Project Type:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #102C5C; font-weight: 600;">${data.projectType}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-weight: bold;">Site Location:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #102C5C;">${data.projectLocation}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-weight: bold;">Estimated Budget:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #102C5C;">${data.budget || "Not specified"}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-weight: bold;">Target Start Date:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #102C5C;">${data.targetStartDate || "Not specified"}</td>
          </tr>
        </table>

        <div style="background-color: #f9fafb; padding: 18px; border-radius: 8px; border: 1px solid #e5e7eb; margin-bottom: 24px;">
          <h4 style="margin: 0 0 10px 0; color: #102C5C; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Project Requirements:</h4>
          <p style="margin: 0; color: #374151; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${data.projectDescription}</p>
        </div>

        <div style="border-top: 1px solid #e5e7eb; padding-top: 16px; font-size: 12px; color: #9ca3af; text-align: center;">
          Received via Manjula Constructions Official Website · Kochchikade, Negombo
        </div>
      </div>
    `;

  try {
    const info = await client.transporter.sendMail({
      from: client.from,
      to: recipient,
      replyTo: data.email || undefined,
      subject,
      html: htmlContent,
      text: isContact
        ? `New Contact Message from ${data.name} (${data.phone}):\n\nSubject: ${data.subject}\nMessage: ${data.message}`
        : `New Estimate Request from ${data.fullName} (${data.phone}):\n\nProject: ${data.projectType}\nLocation: ${data.projectLocation}\nBudget: ${data.budget || "N/A"}\nDetails: ${data.projectDescription}`,
    });

    if (client.isTest) {
      const previewUrl = nodemailer.getTestMessageUrl(info);
      console.log("=========================================");
      console.log("EMAIL PREVIEW URL (Ethereal test inbox):");
      console.log(previewUrl);
      console.log("=========================================");
      return { success: true, messageId: info.messageId, previewUrl };
    }

    console.log(`Email successfully delivered to ${recipient}. MessageId: ${info.messageId}`);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Failed to deliver email:", error);
    return { success: false, error: error.message };
  }
}
