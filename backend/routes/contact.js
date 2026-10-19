
import express from "express";
import { Resend } from "resend";

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      error: "Name, email, and message are required",
    });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not configured");
    return res.status(500).json({
      error: "Email service is not configured",
    });
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [process.env.TO_EMAIL],
      replyTo: email,
      subject: `By visiting your portfolio: ${subject || "New Message"}`,
      html: `
        <h2>New Message from Portfolio Contact Form</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
        ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ""}
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr>
        <p>Sent via your portfolio contact form</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return res.status(500).json({
        error: "Failed to send email",
      });
    }

    console.log("Email sent successfully:", data?.id);

    return res.status(200).json({
      message: "Email sent successfully!",
    });
  } catch (err) {
    console.error("Email sending failed:", err);
    return res.status(500).json({
      error: "Failed to send email",
    });
  }
});

export default router;
