import { Home, Building2, Flame, ShieldAlert, Check } from "lucide-react"

const services = [
  {
    icon: Home,
    title: "Residential Electrical",
    description:
      "Wiring, rewiring, lighting, panel upgrades, EV chargers, and full home electrical service.",
    points: ["Panel & breaker upgrades", "Lighting & outlets", "EV charger installation"],
  },
  {
    icon: Building2,
    title: "Commercial & Buildings",
    description:
      "Complete electrical fit-outs, maintenance, and power systems for offices, retail, and multi-unit buildings.",
    points: ["New construction wiring", "Tenant fit-outs", "Preventative maintenance"],
  },
  {
    icon: Flame,
    title: "Fire Alarm Systems",
    description:
      "Design, installation, testing, and certification of code-compliant fire detection systems.",
    points: ["Smoke & heat detection", "Monitoring & testing", "Code compliance"],
  },
  {
    icon: ShieldAlert,
    title: "Burglar Alarm Systems",
    description:
      "Intrusion detection, sensors, and monitored security alarms to keep your property protected.",
    points: ["Door & window sensors", "Motion detection", "24/7 monitoring options"],
  },
]

export function Services() {
  return (
    <section id="services" className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Our Services</p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Full-service electrical &amp; security under one roof
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            From a single outlet to a complete building install, our licensed team handles it all
            with the same standard of safety and quality.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
              <ul className="mt-4 space-y-2 border-t border-border pt-4">
                {service.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
