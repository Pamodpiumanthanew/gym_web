import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // In a real application, you would send an email via Resend/SendGrid
    // or store this message in a database.
    // For now, we simulate a successful API submission.
    
    console.log("Received contact form submission:", body);

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json(
      { message: "Form submitted successfully", data: body },
      { status: 200 }
    );
  } catch (error) {
    console.error("API Route Error:", error);
    return NextResponse.json(
      { message: "Failed to submit form" },
      { status: 500 }
    );
  }
}
