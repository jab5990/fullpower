import { Check } from "lucide-react"

const highlights = [
  "Local, family-operated team",
  "Transparent written estimates",
  "Clean, respectful job sites",
  "Warranty-backed workmanship",
]

export function About() {
  return (
    <section id="about" className="border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
        <div className="order-2 grid grid-cols-2 gap-4 lg:order-1">
          <img
            src="/images/commercial-building.png"
            alt="Modern commercial building serviced by Full Power Services"
            className="h-full w-full rounded-2xl border border-border object-cover"
          />
          <img
            src="/images/alarm-system.png"
            alt="Technician installing a fire and security alarm system"
            className="mt-8 h-full w-full rounded-2xl border border-border object-cover"
          />
        </div>

        <div className="order-1 lg:order-2">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">About Us</p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Your trusted electrical &amp; security partner
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Full Power Services is a licensed electrical contractor that wires, protects, and powers
            properties throughout Cape Coral and the surrounding areas. From residential electrical work
            to full-service commercial installations and security systems, we&apos;re trusted by
            homeowners, businesses, and property managers alike.
          </p>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Our mission is simple: deliver safe, code-compliant work with honest pricing and the kind
            of service that earns repeat customers and referrals.
          </p>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
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
