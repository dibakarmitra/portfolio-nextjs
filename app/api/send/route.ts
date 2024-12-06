import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactConfig } from "@/config/contact";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    const data = await resend.emails.send({
      from: contactConfig.email.from,
      to: contactConfig.email.to,
      subject: contactConfig.email.subject(name),
      replyTo: email,
      text: contactConfig.email.emailTemplate.text({ name, email, message }),
      html: contactConfig.email.emailTemplate.html({ name, email, message }),
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: (error as Error).message,
    });
  }
}
