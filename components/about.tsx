"use client"

import { Check } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

export function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
        <div className="order-2 grid grid-cols-2 gap-4 lg:order-1">
          <img
            src="/images/commercial-building.png"
            alt={t.about.buildingAlt}
            className="h-full w-full rounded-2xl border border-border object-cover"
          />
          <img
            src="/images/alarm-system.png"
            alt={t.about.alarmAlt}
            className="mt-8 h-full w-full rounded-2xl border border-border object-cover"
          />
        </div>

        <div className="order-1 lg:order-2">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">{t.about.eyebrow}</p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            {t.about.title}
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            {t.about.paragraph1}
          </p>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            {t.about.paragraph2}
          </p>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {t.about.highlights.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm font-medium">
                <span className="flex size-5 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="size-3" aria-hidden="true" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
