"use client"

import { useActionState } from "react"
import { Phone, Mail, MapPin, Clock, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { sendQuote, type QuoteState } from "@/app/actions/send-quote"
import { useLanguage } from "@/lib/i18n"

const initialState: QuoteState = { ok: false }

export function Contact() {
  const { t } = useLanguage()
  const [state, formAction, pending] = useActionState(sendQuote, initialState)

  const contactDetails = [
    { icon: Phone, label: t.contact.details.callLabel, value: "305-399-2271", href: "tel:+13053992271" },
    {
      icon: Mail,
      label: t.contact.details.emailLabel,
      value: "info@fullpower.services",
      href: "mailto:info@fullpower.services",
    },
    { icon: MapPin, label: t.contact.details.areaLabel, value: t.contact.details.areaValue },
    { icon: Clock, label: t.contact.details.hoursLabel, value: t.contact.details.hoursValue },
  ]

  return (
    <section id="contact" className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="overflow-hidden rounded-3xl border border-border bg-card">
          <div className="grid lg:grid-cols-2">
            {/* Info side */}
            <div className="bg-primary p-8 text-primary-foreground sm:p-10 lg:p-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/80">
                {t.contact.eyebrow}
              </p>
              <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
                {t.contact.title}
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-primary-foreground/90">
                {t.contact.description}
              </p>

              <ul className="mt-10 space-y-6">
                {contactDetails.map((item) => {
                  const content = (
                    <div className="flex items-start gap-4">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary-foreground/15">
                        <item.icon className="size-5" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wide text-primary-foreground/70">
                          {item.label}
                        </p>
                        <p className="mt-0.5 font-semibold">{item.value}</p>
                      </div>
                    </div>
                  )
                  return (
                    <li key={item.label}>
                      {item.href ? (
                        <a href={item.href} className="transition-opacity hover:opacity-80">
                          {content}
                        </a>
                      ) : (
                        content
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>

            {/* Form side */}
            <div className="p-8 sm:p-10 lg:p-12">
              {state.ok ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <span className="flex size-14 items-center justify-center rounded-full bg-accent text-primary">
                    <Check className="size-7" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-2xl font-bold">{t.contact.successTitle}</h3>
                  <p className="mt-2 max-w-sm text-muted-foreground">
                    {t.contact.successMessage}
                  </p>
                </div>
              ) : (
                <form action={formAction} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                        {t.contact.nameLabel}
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/40"
                        placeholder={t.contact.namePlaceholder}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="mb-1.5 block text-sm font-medium">
                        {t.contact.phoneLabel}
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/40"
                        placeholder={t.contact.phonePlaceholder}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                      {t.contact.emailLabel}
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/40"
                      placeholder={t.contact.emailPlaceholder}
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="mb-1.5 block text-sm font-medium">
                      {t.contact.serviceLabel}
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/40"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        {t.contact.servicePlaceholder}
                      </option>
                      {t.contact.serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                      {t.contact.messageLabel}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full resize-none rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/40"
                      placeholder={t.contact.messagePlaceholder}
                    />
                  </div>

                  {state.error ? (
                    <p className="rounded-md bg-destructive/10 px-3 py-2 text-center text-sm text-destructive">
                      {state.error}
                    </p>
                  ) : null}

                  <Button type="submit" size="lg" className="w-full" disabled={pending}>
                    {pending ? t.contact.submitting : t.contact.submit}
                  </Button>
                  <p className="text-center text-xs text-muted-foreground">
                    {t.contact.disclaimer}
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
