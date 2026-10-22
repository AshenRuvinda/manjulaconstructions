import { NextResponse } from "next/server";
import { validateContactForm, validateEstimateForm } from "@/lib/validation";
import { sendInquiryEmail } from "@/lib/mailer";

export async function POST(request) {
  try {
    const body = await request.json();
    const inquiryType = body.type || "estimate";

    if (inquiryType === "estimate") {
      const validation = validateEstimateForm(body);
      if (!validation.isValid) {
        return NextResponse.json(
          { error: "Validation failed", details: validation.errors },
          { status: 400 }
        );
      }

      // Dispatch notification email to Manjula Constructions
      const emailResult = await sendInquiryEmail({ type: "estimate", data: body });

      console.log("=== NEW ESTIMATE INQUIRY ===");
      console.log("Time:", new Date().toISOString());
      console.log("Name:", body.fullName);
      console.log("Phone:", body.phone);
      console.log("Type:", body.projectType);
      console.log("Email Dispatch:", emailResult?.success ? "SENT" : "FAILED / LOGGED");
      console.log("============================");

      return NextResponse.json(
        {
          success: true,
          message:
            "Thank you! Your estimate request has been submitted and sent to Manjula Constructions. Our team will contact you promptly.",
          inquiryId: `EST-${Date.now()}`,
          emailSent: emailResult?.success || false,
        },
        { status: 200 }
      );
    } else {
      const validation = validateContactForm(body);
      if (!validation.isValid) {
        return NextResponse.json(
          { error: "Validation failed", details: validation.errors },
          { status: 400 }
        );
      }

      // Dispatch notification email to Manjula Constructions
      const emailResult = await sendInquiryEmail({ type: "contact", data: body });

      console.log("=== NEW GENERAL CONTACT INQUIRY ===");
      console.log("Time:", new Date().toISOString());
      console.log("Name:", body.name);
      console.log("Phone:", body.phone || "N/A");
      console.log("Subject:", body.subject || "General Inquiry");
      console.log("Email Dispatch:", emailResult?.success ? "SENT" : "FAILED / LOGGED");
      console.log("====================================");

      return NextResponse.json(
        {
          success: true,
          message:
            "Thank you! Your message has been sent to Manjula Constructions. We will get back to you shortly.",
          inquiryId: `MSG-${Date.now()}`,
          emailSent: emailResult?.success || false,
        },
        { status: 200 }
      );
    }
  } catch (err) {
    console.error("Inquiries API error:", err);
    return NextResponse.json(
      { error: "Internal server error occurred while processing inquiry" },
      { status: 500 }
    );
  }
}
