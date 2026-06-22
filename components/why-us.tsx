import { Award, Users, ShieldCheck, ThumbsUp } from "lucide-react"

const stats = [
  { value: "Licensed", label: "Electrical contractor" },
  { value: "Insured", label: "Fully covered work" },
  { value: "Local", label: "Cape Coral based" },
  { value: "24/7", label: "Emergency response" },
]

const reasons = [
  {
    icon: ShieldCheck,
    title: "Safety first, always",
    description:
      "Every job meets or exceeds current electrical and fire codes, inspected and certified for your peace of mind.",
  },
  {
    icon: Award,
    title: "Certified professionals",
    description:
      "Fully licensed and insured electricians and alarm technicians with ongoing training and accreditation.",
  },
  {
    icon: Users,
    title: "Residential & commercial",
    description:
      "One trusted partner for homes, offices, and large buildings — no job is too small or too complex.",
  },
  {
    icon: ThumbsUp,
    title: "Upfront, honest pricing",
    description:
      "Clear written quotes with no hidden fees, plus a workmanship guarantee on everything we install.",
  },
]

export function WhyUs() {
  return (
    <section id="why-us" className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Why Choose Us</p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Powered by experience, driven by safety
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              When you hire Full Power Services, you get a dependable team that shows up on time,
              communicates clearly, and gets the job done right the first time.
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
