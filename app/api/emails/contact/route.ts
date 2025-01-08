import ContactEmail from "@/emails/contact";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const contact = async (req: NextRequest): Promise<NextResponse> => {
  const { name, email, phone, message } = await req.json();

  try {
    const { data, error } = await resend.emails.send({
      from: "Heena Kapadia<heenakapdia@mjphub.com>",
      to: "hkapadia@heenakapadia.com", //hkapadia@heenakapadia.com
      subject: "New Client Inquiry",
      react: ContactEmail({ name, email, phone, message }),
      text: `New Client Inquiry\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json({ success: false, error }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
};

export const POST = contact;
