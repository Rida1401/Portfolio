import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { render } from "@react-email/render";
import validator from "validator";

import { selfData } from "@/constant";
import { EmailTemplate } from "@/components/template/Email";

export async function POST(request: Request) {
  const body = await request.json();
  const { senderName, senderEmail, reasonToContact, senderMsg } = body;

  // Check for missing environment variables
  if (!process.env.email_from || !process.env.email_password) {
    return NextResponse.json(
      { error: "Server configuration error: Missing email credentials in .env.local" },
      { status: 500 }
    );
  }

  if (
    !senderName ||
    !senderEmail ||
    !reasonToContact ||
    !senderMsg ||
    typeof senderName !== "string" ||
    typeof senderEmail !== "string" ||
    typeof reasonToContact !== "string" ||
    typeof senderMsg !== "string"
  ) {
    return NextResponse.json({ error: "Invalid input data" }, { status: 400 });
  }

  if (!validator.isEmail(senderEmail)) {
    return NextResponse.json(
      { error: "Email format is not valid" },
      { status: 400 }
    );
  }

  const htmlContent = await render(
    EmailTemplate({
      userName: senderName,
      contactReason: reasonToContact,
      userMessage: senderMsg,
    }),
    { pretty: true }
  );

  // Email to you (the site owner)
  const mailOptions = {
    from: `"${senderName} via Portfolio" <${process.env.email_from}>`,
    to: selfData.email, // Your email from self.ts
    replyTo: senderEmail, // Allows you to reply directly to the user
    subject: `[Portfolio Contact] New message from ${senderName}`,
    html: htmlContent,
    headers: {
      "X-Entity-Ref-ID": "newmail",
    },
  };

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.email_from,
      pass: process.env.email_password,
    },
  });

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      {
        message: `Email has been sent successfully`,
      },
      { status: 200 }
    );
  } catch (err) {
    console.error(`Error sending email:`, err);
    return NextResponse.json(
      { error: `Failed to send email: ${(err as Error).message}` },
      { status: 500 }
    );
  }
}
