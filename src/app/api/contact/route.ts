import { mailService } from "@/lib/services/email/mailer.service";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { name, email, phone, message } = body;

    if (!name || !email || !phone || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }
    const res = await mailService.sendContactUsUserInformation(
      name,
      email,
      phone,
      message
    );

    return res;
  } catch (error) {
    console.error("❌ Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
