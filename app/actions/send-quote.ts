"use server"

import { Resend } from "resend"

const TO_EMAIL = "contact@fullpower.services"

export type QuoteState = {
  ok: boolean
  error?: string
}

export async function sendQuote(_prevState: QuoteState, formData: FormData): Promise<QuoteState> {
  const name = (formData.get("name") as string)?.trim()
  const phone = (formData.get("phone") as string)?.trim()
  const email = (formData.get("email") as string)?.trim()
  const service = (formData.get("service") as string)?.trim() || "Not specified"
  const message = (formData.get("message") as string)?.trim() || "No additional details provided."

  if (!name || !phone || !email) {
    return { ok: false, error: "Please fill in your name, phone, and email." }
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return {
      ok: false,
      error: "Email service is not configured yet. Please add the RESEND_API_KEY environment variable.",
    }
  }

  const resend = new Resend(apiKey)

  try {
    const { error } = await resend.emails.send({
      // Requires the fullpower.services domain to be verified in Resend.
      from: "Full Power Services <contact@fullpower.services>",
      to: [TO_EMAIL],
      replyTo: email,
      subject: `New quote request — ${service}`,
      text: [
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Email: ${email}`,
        `Service needed: ${service}`,
        "",
        "Project details:",
        message,
      ].join("\n"),
    })

    if (error) {
      console.log("[v0] Resend error:", error)
      return { ok: false, error: "Something went wrong sending your request. Please call us instead." }
    }

    return { ok: true }
  } catch (err) {
    console.log("[v0] Send quote exception:", err)
    return { ok: false, error: "Something went wrong sending your request. Please call us instead." }
  }
}
