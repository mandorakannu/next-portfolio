import { connectToDatabase } from "@database/connection";
import clients from "@models/users";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest, response: NextResponse) {
  const { email, subject, message } = await request.json();
  if (!email || !subject || !message) {
    return NextResponse.json(
      { error: "Please fill all the fields" },
      { status: 400 }
    );
  }
  try {
    await connectToDatabase();
    const user = await clients.create({ email, subject, message });
    if (!user)
      return NextResponse.json(
        { error: "Something went wrong" },
        { status: 400 }
      );
    disconnect();
    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error: any | unknown) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

const disconnect = () => {
  setTimeout(() => {
    disconnect();
  }, 2000);
};
