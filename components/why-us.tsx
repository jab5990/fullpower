"use client"

import { Award, Users, ShieldCheck, ThumbsUp } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

const reasonIcons = [ShieldCheck, Award, Users, ThumbsUp]

export function WhyUs() {
  const { t } = useLanguage()

  const stats = t.whyUs.stats
  const reasons = t.whyUs.reasons.map((reason, i) => ({ ...reason, icon: reasonIcons[i] }))

  return (
    <section id="why-us" className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">{t.whyUs.eyebrow}</p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              {t.whyUs.title}
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              {t.whyUs.description}
            </p>

            <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-card p-6">
                  <dt className="text-3xl font-bold text-primary">{stat.value}</dt>
                  <dd className="mt-1 text-sm text-muted-foreground">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <ul className="grid gap-5 sm:grid-cols-2">
            {reasons.map((reason) => (
              <li key={reason.title} className="rounded-2xl border border-border bg-card p-6">
                <span className="flex size-11 items-center justify-center rounded-xl bg-accent text-primary">
                  <reason.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-semibold">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{reason.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
