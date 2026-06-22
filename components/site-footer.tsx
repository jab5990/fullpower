import { Zap, Phone, Mail, MapPin } from "lucide-react"

const serviceLinks = [
  "Residential Electrical",
  "Commercial & Buildings",
  "Fire Alarm Systems",
  "Burglar Alarm Systems",
]

const companyLinks = [
  { label: "About Us", href: "#about" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Services", href: "#services" },
  { label: "Get a Quote", href: "#contact" },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex size-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <Zap className="size-5" aria-hidden="true" />
              </span>
              <span className="text-base font-bold tracking-tight">Full Power Services</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Licensed electrical contractor and security alarm specialist serving residential and
              commercial clients in Cape Coral and the surrounding areas.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide">Services</h3>
            <ul className="mt-4 space-y-2">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <a href="#services" className="text-sm text-muted-foreground hover:text-primary">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide">Company</h3>
            <ul className="mt-4 space-y-2">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide">Contact</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="tel:+13053992271"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
                >
                  <Phone className="size-4 text-primary" aria-hidden="true" />
                  305-399-2271
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@fullpower.services"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
                >
                  <Mail className="size-4 text-primary" aria-hidden="true" />
                  info@fullpower.services
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="size-4 text-primary" aria-hidden="true" />
                Cape Coral, FL
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Full Power Services. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">Licensed · Bonded · Insured</p>
        </div>
      </div>
    </footer>
  )
}
