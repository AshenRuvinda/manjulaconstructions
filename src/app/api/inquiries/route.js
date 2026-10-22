import { NextResponse } from "next/server";
import { validateContactForm, validateEstimateForm } from "@/lib/validation";

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

      // Log inquiry for server logs (can be connected to SendGrid/Resend/MongoDB if configured)
      console.log("=== NEW ESTIMATE INQUIRY ===");
      console.log("Time:", new Date().toISOString());
      console.log("Name:", body.fullName);
      console.log("Phone:", body.phone);
      console.log("Email:", body.email || "N/A");
      console.log("Type:", body.projectType);
      console.log("Location:", body.projectLocation);
      console.log("Budget:", body.budget || "N/A");
      console.log("Description:", body.projectDescription);
      console.log("============================");

      return NextResponse.json(
        {
          success: true,
          message:
            "Thank you! Your estimate request has been logged and our team at Kochchikade will call you promptly.",
          inquiryId: `EST-${Date.now()}`,
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

      console.log("=== NEW GENERAL CONTACT INQUIRY ===");
      console.log("Time:", new Date().toISOString());
      console.log("Name:", body.name);
      console.log("Phone:", body.phone || "N/A");
      console.log("Email:", body.email || "N/A");
      console.log("Subject:", body.subject || "General Inquiry");
      console.log("Message:", body.message);
      console.log("====================================");

      return NextResponse.json(
        {
          success: true,
          message:
            "Thank you! Your message has been logged. We will get back to you shortly.",
          inquiryId: `MSG-${Date.now()}`,
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
