"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

export type Language = "en" | "es"

export const translations = {
  en: {
    header: {
      tagline: "Electrical & Security",
      nav: {
        services: "Services",
        whyUs: "Why Us",
        about: "About",
        contact: "Contact",
      },
      getQuote: "Get a Quote",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    hero: {
      badge: "Powering homes & businesses in Cape Coral",
      title: "Reliable electrical & security solutions you can trust",
      description:
        "Full Power Services delivers expert residential and commercial electrical work, building installations, and certified fire & burglar alarm systems — all backed by safety-first standards and a satisfaction guarantee.",
      getQuote: "Get a Free Quote",
      explore: "Explore Services",
      badges: {
        licensed: "Licensed & Insured",
        emergency: "24/7 Emergency Service",
        certified: "Safety Certified",
      },
      cardTitle: "Licensed",
      cardSubtitle: "Electrical Contractor",
      imageAlt: "Licensed electrician working on an electrical panel in a commercial building",
    },
    services: {
      eyebrow: "Our Services",
      title: "Full-service electrical & security under one roof",
      description:
        "From a single outlet to a complete building install, our licensed team handles it all with the same standard of safety and quality.",
      items: [
        {
          title: "Residential Electrical",
          description:
            "Wiring, rewiring, lighting, panel upgrades, EV chargers, and full home electrical service.",
          points: ["Panel & breaker upgrades", "Lighting & outlets", "EV charger installation"],
        },
        {
          title: "Commercial & Buildings",
          description:
            "Complete electrical fit-outs, maintenance, and power systems for offices, retail, and multi-unit buildings.",
          points: ["New construction wiring", "Tenant fit-outs", "Preventative maintenance"],
        },
        {
          title: "Fire Alarm Systems",
          description:
            "Design, installation, testing, and certification of code-compliant fire detection systems.",
          points: ["Smoke & heat detection", "Monitoring & testing", "Code compliance"],
        },
        {
          title: "Burglar Alarm Systems",
          description:
            "Intrusion detection, sensors, and monitored security alarms to keep your property protected.",
          points: ["Door & window sensors", "Motion detection", "24/7 monitoring options"],
        },
      ],
    },
    whyUs: {
      eyebrow: "Why Choose Us",
      title: "Powered by experience, driven by safety",
      description:
        "When you hire Full Power Services, you get a dependable team that shows up on time, communicates clearly, and gets the job done right the first time.",
      stats: [
        { value: "Licensed", label: "Electrical contractor" },
        { value: "Insured", label: "Fully covered work" },
        { value: "Local", label: "Cape Coral based" },
        { value: "24/7", label: "Emergency response" },
      ],
      reasons: [
        {
          title: "Safety first, always",
          description:
            "Every job meets or exceeds current electrical and fire codes, inspected and certified for your peace of mind.",
        },
        {
          title: "Certified professionals",
          description:
            "Fully licensed and insured electricians and alarm technicians with ongoing training and accreditation.",
        },
        {
          title: "Residential & commercial",
          description:
            "One trusted partner for homes, offices, and large buildings — no job is too small or too complex.",
        },
        {
          title: "Upfront, honest pricing",
          description:
            "Clear written quotes with no hidden fees, plus a workmanship guarantee on everything we install.",
        },
      ],
    },
    about: {
      eyebrow: "About Us",
      title: "Your trusted electrical & security partner",
      paragraph1:
        "Full Power Services is a licensed electrical contractor that wires, protects, and powers properties throughout Cape Coral and the surrounding areas. From residential electrical work to full-service commercial installations and security systems, we're trusted by homeowners, businesses, and property managers alike.",
      paragraph2:
        "Our mission is simple: deliver safe, code-compliant work with honest pricing and the kind of service that earns repeat customers and referrals.",
      highlights: [
        "Local, family-operated team",
        "Transparent written estimates",
        "Clean, respectful job sites",
        "Warranty-backed workmanship",
      ],
      buildingAlt: "Modern commercial building serviced by Full Power Services",
      alarmAlt: "Technician installing a fire and security alarm system",
    },
    contact: {
      eyebrow: "Get In Touch",
      title: "Request your free quote today",
      description:
        "Tell us about your project and we'll get back to you within one business day with a no-obligation estimate.",
      details: {
        callLabel: "Call us",
        emailLabel: "Email",
        areaLabel: "Service area",
        areaValue: "Cape Coral & surrounding areas",
        hoursLabel: "Hours",
        hoursValue: "Mon–Sat 7am–7pm · 24/7 emergency",
      },
      successTitle: "Thank you!",
      successMessage:
        "Your request has been received. A member of the Full Power Services team will reach out within one business day.",
      nameLabel: "Full name",
      namePlaceholder: "Jane Smith",
      phoneLabel: "Phone",
      phonePlaceholder: "(555) 123-4567",
      emailLabel: "Email",
      emailPlaceholder: "you@example.com",
      serviceLabel: "Service needed",
      servicePlaceholder: "Select a service",
      serviceOptions: [
        "Residential electrical",
        "Commercial / building",
        "Fire alarm system",
        "Burglar alarm system",
        "Other / not sure",
      ],
      messageLabel: "Project details",
      messagePlaceholder: "Tell us a bit about what you need...",
      submit: "Request Free Quote",
      submitting: "Sending...",
      disclaimer: "By submitting, you agree to be contacted about your request.",
    },
    footer: {
      description:
        "Licensed electrical contractor and security alarm specialist serving residential and commercial clients in Cape Coral and the surrounding areas.",
      servicesTitle: "Services",
      serviceLinks: [
        "Residential Electrical",
        "Commercial & Buildings",
        "Fire Alarm Systems",
        "Burglar Alarm Systems",
      ],
      companyTitle: "Company",
      companyLinks: [
        { label: "About Us", href: "#about" },
        { label: "Why Choose Us", href: "#why-us" },
        { label: "Services", href: "#services" },
        { label: "Get a Quote", href: "#contact" },
      ],
      contactTitle: "Contact",
      rights: "All rights reserved.",
      credentials: "Licensed · Bonded · Insured",
    },
  },
  es: {
    header: {
      tagline: "Electricidad y Seguridad",
      nav: {
        services: "Servicios",
        whyUs: "Por Qué Nosotros",
        about: "Nosotros",
        contact: "Contacto",
      },
      getQuote: "Pedir Cotización",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
    },
    hero: {
      badge: "Energizando hogares y negocios en Cape Coral",
      title: "Soluciones eléctricas y de seguridad confiables en las que puede confiar",
      description:
        "Full Power Services ofrece trabajo eléctrico experto residencial y comercial, instalaciones en edificios y sistemas certificados de alarmas contra incendios y robos, todo respaldado por estándares que priorizan la seguridad y una garantía de satisfacción.",
      getQuote: "Cotización Gratis",
      explore: "Ver Servicios",
      badges: {
        licensed: "Con Licencia y Asegurado",
        emergency: "Servicio de Emergencia 24/7",
        certified: "Certificado en Seguridad",
      },
      cardTitle: "Con Licencia",
      cardSubtitle: "Contratista Eléctrico",
      imageAlt: "Electricista con licencia trabajando en un panel eléctrico en un edificio comercial",
    },
    services: {
      eyebrow: "Nuestros Servicios",
      title: "Servicio completo de electricidad y seguridad bajo un mismo techo",
      description:
        "Desde un solo tomacorriente hasta la instalación completa de un edificio, nuestro equipo con licencia se encarga de todo con el mismo estándar de seguridad y calidad.",
      items: [
        {
          title: "Electricidad Residencial",
          description:
            "Cableado, recableado, iluminación, mejoras de paneles, cargadores para autos eléctricos y servicio eléctrico completo para el hogar.",
          points: ["Mejoras de paneles y disyuntores", "Iluminación y tomacorrientes", "Instalación de cargadores EV"],
        },
        {
          title: "Comercial y Edificios",
          description:
            "Instalaciones eléctricas completas, mantenimiento y sistemas de energía para oficinas, comercios y edificios de múltiples unidades.",
          points: ["Cableado de obra nueva", "Adecuación de locales", "Mantenimiento preventivo"],
        },
        {
          title: "Sistemas de Alarma Contra Incendios",
          description:
            "Diseño, instalación, pruebas y certificación de sistemas de detección de incendios que cumplen con el código.",
          points: ["Detección de humo y calor", "Monitoreo y pruebas", "Cumplimiento del código"],
        },
        {
          title: "Sistemas de Alarma Antirrobo",
          description:
            "Detección de intrusos, sensores y alarmas de seguridad monitoreadas para mantener su propiedad protegida.",
          points: ["Sensores de puertas y ventanas", "Detección de movimiento", "Opciones de monitoreo 24/7"],
        },
      ],
    },
    whyUs: {
      eyebrow: "Por Qué Elegirnos",
      title: "Impulsados por la experiencia, guiados por la seguridad",
      description:
        "Cuando contrata a Full Power Services, obtiene un equipo confiable que llega a tiempo, se comunica con claridad y hace el trabajo bien desde la primera vez.",
      stats: [
        { value: "Con Licencia", label: "Contratista eléctrico" },
        { value: "Asegurado", label: "Trabajo totalmente cubierto" },
        { value: "Local", label: "Con base en Cape Coral" },
        { value: "24/7", label: "Respuesta de emergencia" },
      ],
      reasons: [
        {
          title: "La seguridad primero, siempre",
          description:
            "Cada trabajo cumple o supera los códigos eléctricos y contra incendios vigentes, inspeccionado y certificado para su tranquilidad.",
        },
        {
          title: "Profesionales certificados",
          description:
            "Electricistas y técnicos de alarmas con licencia y asegurados, con capacitación y acreditación continuas.",
        },
        {
          title: "Residencial y comercial",
          description:
            "Un solo socio de confianza para hogares, oficinas y grandes edificios; ningún trabajo es demasiado pequeño o complejo.",
        },
        {
          title: "Precios honestos y por adelantado",
          description:
            "Cotizaciones claras y por escrito sin cargos ocultos, además de una garantía de mano de obra en todo lo que instalamos.",
        },
      ],
    },
    about: {
      eyebrow: "Nosotros",
      title: "Su socio de confianza en electricidad y seguridad",
      paragraph1:
        "Full Power Services es un contratista eléctrico con licencia que cablea, protege y energiza propiedades en Cape Coral y sus alrededores. Desde trabajo eléctrico residencial hasta instalaciones comerciales completas y sistemas de seguridad, somos la confianza de propietarios de viviendas, empresas y administradores de propiedades.",
      paragraph2:
        "Nuestra misión es simple: ofrecer trabajo seguro y conforme al código con precios honestos y el tipo de servicio que gana clientes recurrentes y recomendaciones.",
      highlights: [
        "Equipo local y de operación familiar",
        "Presupuestos transparentes por escrito",
        "Áreas de trabajo limpias y respetuosas",
        "Mano de obra respaldada por garantía",
      ],
      buildingAlt: "Edificio comercial moderno atendido por Full Power Services",
      alarmAlt: "Técnico instalando un sistema de alarma contra incendios y seguridad",
    },
    contact: {
      eyebrow: "Póngase en Contacto",
      title: "Solicite su cotización gratis hoy",
      description:
        "Cuéntenos sobre su proyecto y le responderemos dentro de un día hábil con un presupuesto sin compromiso.",
      details: {
        callLabel: "Llámenos",
        emailLabel: "Correo electrónico",
        areaLabel: "Área de servicio",
        areaValue: "Cape Coral y alrededores",
        hoursLabel: "Horario",
        hoursValue: "Lun–Sáb 7am–7pm · emergencias 24/7",
      },
      successTitle: "¡Gracias!",
      successMessage:
        "Hemos recibido su solicitud. Un miembro del equipo de Full Power Services se comunicará con usted dentro de un día hábil.",
      nameLabel: "Nombre completo",
      namePlaceholder: "Juana Pérez",
      phoneLabel: "Teléfono",
      phonePlaceholder: "(555) 123-4567",
      emailLabel: "Correo electrónico",
      emailPlaceholder: "usted@ejemplo.com",
      serviceLabel: "Servicio que necesita",
      servicePlaceholder: "Seleccione un servicio",
      serviceOptions: [
        "Electricidad residencial",
        "Comercial / edificio",
        "Sistema de alarma contra incendios",
        "Sistema de alarma antirrobo",
        "Otro / no estoy seguro",
      ],
      messageLabel: "Detalles del proyecto",
      messagePlaceholder: "Cuéntenos un poco sobre lo que necesita...",
      submit: "Solicitar Cotización Gratis",
      submitting: "Enviando...",
      disclaimer: "Al enviar, acepta ser contactado sobre su solicitud.",
    },
    footer: {
      description:
        "Contratista eléctrico con licencia y especialista en alarmas de seguridad que atiende a clientes residenciales y comerciales en Cape Coral y sus alrededores.",
      servicesTitle: "Servicios",
      serviceLinks: [
        "Electricidad Residencial",
        "Comercial y Edificios",
        "Sistemas de Alarma Contra Incendios",
        "Sistemas de Alarma Antirrobo",
      ],
      companyTitle: "Empresa",
      companyLinks: [
        { label: "Nosotros", href: "#about" },
        { label: "Por Qué Elegirnos", href: "#why-us" },
        { label: "Servicios", href: "#services" },
        { label: "Pedir Cotización", href: "#contact" },
      ],
      contactTitle: "Contacto",
      rights: "Todos los derechos reservados.",
      credentials: "Con Licencia · Garantizado · Asegurado",
    },
  },
} as const

type Translation = (typeof translations)["en"]

type LanguageContextValue = {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translation
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")

  useEffect(() => {
    const stored = window.localStorage.getItem("language") as Language | null
    if (stored === "en" || stored === "es") {
      setLanguageState(stored)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    window.localStorage.setItem("language", lang)
    document.documentElement.lang = lang
  }

  const value: LanguageContextValue = {
    language,
    setLanguage,
    t: translations[language],
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return ctx
}
