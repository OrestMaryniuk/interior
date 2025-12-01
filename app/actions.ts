"use server";

export async function sendEmail(formData: FormData) {
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  // Validate inputs
  if (!firstName || !lastName || !email || !message) {
    return { success: false, error: "All fields are required" };
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, error: "Invalid email address" };
  }

  try {
    // For now, we'll log to console. In production, you would use nodemailer or a service like SendGrid
    console.log("=== NEW CONTACT FORM SUBMISSION ===");
    console.log(`Name: ${firstName} ${lastName}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);
    console.log("===================================");

    // TODO: Replace with actual email sending logic
    // Example with nodemailer:
    // const transporter = nodemailer.createTransport({
    //   host: process.env.SMTP_HOST,
    //   port: parseInt(process.env.SMTP_PORT || "587"),
    //   auth: {
    //     user: process.env.SMTP_USER,
    //     pass: process.env.SMTP_PASS,
    //   },
    // });
    //
    // await transporter.sendMail({
    //   from: process.env.SMTP_FROM,
    //   to: "hello@interiorlab.com",
    //   subject: `New Contact Form: ${firstName} ${lastName}`,
    //   text: message,
    //   html: `<p><strong>From:</strong> ${firstName} ${lastName} (${email})</p><p><strong>Message:</strong></p><p>${message}</p>`,
    // });

    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error: "Failed to send message. Please try again." };
  }
}
