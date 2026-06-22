import { ShieldCheck, Clock, BadgeCheck, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const badges = [
  { icon: BadgeCheck, label: "Licensed & Insured" },
  { icon: Clock, label: "24/7 Emergency Service" },
  { icon: ShieldCheck, label: "Safety Certified" },
]

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-foreground">
            <span className="size-2 rounded-full bg-primary" aria-hidden="true" />
            Powering homes &amp; businesses in Cape Coral
          </span>

          <h1 className="mt-5 text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Reliable electrical &amp; security solutions you can trust
          </h1>

          <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Full Power Services delivers expert residential and commercial electrical work,
            building installations, and certified fire &amp; burglar alarm systems — all backed
            by safety-first standards and a satisfaction guarantee.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button nativeButton={false} render={<a href="#contact" />} size="lg">
              Get a Free Quote
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
            <Button nativeButton={false} render={<a href="#services" />} size="lg" variant="outline">
              Explore Services
            </Button>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
            {badges.map((b) => (
              <li key={b.label} className="flex items-center gap-2 text-sm font-medium">
                <b.icon className="size-5 text-primary" aria-hidden="true" />
                {b.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
            <img
              src="/images/hero-electrician.png"
              alt="Licensed electrician working on an electrical panel in a commercial building"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 left-5 hidden rounded-xl border border-border bg-card p-4 shadow-lg sm:block">
            <p className="text-2xl font-bold text-primary">Licensed</p>
            <p className="text-sm text-muted-foreground">Electrical Contractor</p>
          </div>
        </div>
      </div>
    </section>
  )
}
