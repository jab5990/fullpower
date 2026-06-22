export type Language = "en" | "es"

export type Translation = {
  header: {
    tagline: string
    nav: { services: string; whyUs: string; about: string; contact: string }
    getQuote: string
    openMenu: string
    closeMenu: string
    languageLabel: string
  }
  hero: {
    eyebrow: string
    title: string
    description: string
    ctaPrimary: string
    ctaSecondary: string
    badges: string[]
    cardTop: string
    cardBottom: string
    imageAlt: string
  }
  services: {
    eyebrow: string
    title: string
    description: string
    items: { title: string; description: string; points: string[] }[]
  }
  whyUs: {
    eyebrow: string
    title: string
    description: string
    stats: { value: string; label: string }[]
    reasons: { title: string; description: string }[]
  }
  about: {
    eyebrow: string
    title: string
    paragraphs: string[]
    highlights: string[]
    commercialAlt: string
    alarmAlt: string
  }
  contact: {
    eyebrow: string
    title: string
    description: string
    details: { label: string; value: string }[]
    labels: {
      name: string
      phone: string
      email: string
      service: string
      message: string
    }
    placeholders: {
      name: string
      phone: string
      email: string
      message: string
    }
    selectPlaceholder: string
    serviceOptions: string[]
    submit: string
    sending: string
    disclaimer: string
    successTitle: string
    successMessage: string
  }
  footer: {
    description: string
    servicesHeading: string
    companyHeading: string
    contactHeading: string
    serviceLinks: string[]
    companyLinks: string[]
    location: string
    rights: string
    credentials: string
  }
}

export const translations: Record<Language, Translation> = {
  en: {
    header: {
      tagline: "Electrical & Security",
      nav: { services: "Services", whyUs: "Why Us", about: "About", contact: "Contact" },
      getQuote: "Get a Quote",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      languageLabel: "Language",
    },
    hero: {
      eyebrow: "Powering homes & businesses in Cape Coral",
      title: "Reliable electrical & security solutions you can trust",
      description:
        "Full Power Services delivers expert residential and commercial electrical work, building installations, and certified fire & burglar alarm systems — all backed by safety-first standards and a satisfaction guarantee.",
      ctaPrimary: "Get a Free Quote",
      ctaSecondary: "Explore Services",
      badges: ["Licensed & Insured", "24/7 Emergency Service", "Safety Certified"],
      cardTop: "Licensed",
      cardBottom: "Electrical Contractor",
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
      paragraphs: [
        "Full Power Services is a licensed electrical contractor that wires, protects, and powers properties throughout Cape Coral and the surrounding areas. From residential electrical work to full-service commercial installations and security systems, we're trusted by homeowners, businesses, and property managers alike.",
        "Our mission is simple: deliver safe, code-compliant work with honest pricing and the kind of service that earns repeat customers and referrals.",
      ],
      highlights: [
        "Local, family-operated team",
        "Transparent written estimates",
        "Clean, respectful job sites",
        "Warranty-backed workmanship",
      ],
      commercialAlt: "Modern commercial building serviced by Full Power Services",
      alarmAlt: "Technician installing a fire and security alarm system",
    },
    contact: {
      eyebrow: "Get In Touch",
      title: "Request your free quote today",
      description:
        "Tell us about your project and we'll get back to you within one business day with a no-obligation estimate.",
      details: [
        { label: "Call us", value: "305-399-2271" },
        { label: "Email", value: "info@fullpower.services" },
        { label: "Service area", value: "Cape Coral & surrounding areas" },
        { label: "Hours", value: "Mon–Sat 7am–7pm · 24/7 emergency" },
      ],
      labels: {
        name: "Full name",
        phone: "Phone",
        email: "Email",
        service: "Service needed",
        message: "Project details",
      },
      placeholders: {
        name: "Jane Smith",
        phone: "(555) 123-4567",
        email: "you@example.com",
        message: "Tell us a bit about what you need...",
      },
      selectPlaceholder: "Select a service",
      serviceOptions: [
        "Residential electrical",
        "Commercial / building",
        "Fire alarm system",
        "Burglar alarm system",
        "Other / not sure",
      ],
      submit: "Request Free Quote",
      sending: "Sending...",
      disclaimer: "By submitting, you agree to be contacted about your request.",
      successTitle: "Thank you!",
      successMessage:
        "Your request has been received. A member of the Full Power Services team will reach out within one business day.",
    },
    footer: {
      description:
        "Licensed electrical contractor and security alarm specialist serving residential and commercial clients in Cape Coral and the surrounding areas.",
      servicesHeading: "Services",
      companyHeading: "Company",
      contactHeading: "Contact",
      serviceLinks: [
        "Residential Electrical",
        "Commercial & Buildings",
        "Fire Alarm Systems",
        "Burglar Alarm Systems",
      ],
      companyLinks: ["About Us", "Why Choose Us", "Services", "Get a Quote"],
      location: "Cape Coral, FL",
      rights: "All rights reserved.",
      credentials: "Licensed · Bonded · Insured",
    },
  },
  es: {
    header: {
      tagline: "Electricidad y Seguridad",
      nav: { services: "Servicios", whyUs: "Por Qué Nosotros", about: "Nosotros", contact: "Contacto" },
      getQuote: "Pedir Cotización",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
      languageLabel: "Idioma",
    },
    hero: {
      eyebrow: "Energizando hogares y negocios en Cape Coral",
      title: "Soluciones eléctricas y de seguridad confiables",
      description:
        "Full Power Services ofrece trabajo eléctrico residencial y comercial experto, instalaciones en edificios y sistemas certificados de alarmas contra incendios y robos, todo respaldado por estándares de máxima seguridad y una garantía de satisfacción.",
      ctaPrimary: "Cotización Gratis",
      ctaSecondary: "Ver Servicios",
      badges: ["Licenciados y Asegurados", "Servicio de Emergencia 24/7", "Certificados en Seguridad"],
      cardTop: "Licenciado",
      cardBottom: "Contratista Eléctrico",
      imageAlt: "Electricista licenciado trabajando en un panel eléctrico en un edificio comercial",
    },
    services: {
      eyebrow: "Nuestros Servicios",
      title: "Servicio eléctrico y de seguridad completo en un solo lugar",
      description:
        "Desde un solo tomacorriente hasta la instalación completa de un edificio, nuestro equipo licenciado lo hace todo con el mismo estándar de seguridad y calidad.",
      items: [
        {
          title: "Electricidad Residencial",
          description:
            "Cableado, recableado, iluminación, mejoras de paneles, cargadores para autos eléctricos y servicio eléctrico completo para el hogar.",
          points: ["Mejoras de paneles e interruptores", "Iluminación y tomacorrientes", "Instalación de cargadores EV"],
        },
        {
          title: "Comercial y Edificios",
          description:
            "Instalaciones eléctricas completas, mantenimiento y sistemas de energía para oficinas, comercios y edificios de varias unidades.",
          points: ["Cableado de obra nueva", "Adecuaciones para inquilinos", "Mantenimiento preventivo"],
        },
        {
          title: "Sistemas de Alarma contra Incendios",
          description:
            "Diseño, instalación, pruebas y certificación de sistemas de detección de incendios que cumplen con los códigos.",
          points: ["Detección de humo y calor", "Monitoreo y pruebas", "Cumplimiento de códigos"],
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
        { value: "Licenciados", label: "Contratista eléctrico" },
        { value: "Asegurados", label: "Trabajo totalmente cubierto" },
        { value: "Locales", label: "Con base en Cape Coral" },
        { value: "24/7", label: "Respuesta de emergencia" },
      ],
      reasons: [
        {
          title: "La seguridad ante todo",
          description:
            "Cada trabajo cumple o supera los códigos eléctricos y de incendios vigentes, inspeccionado y certificado para su tranquilidad.",
        },
        {
          title: "Profesionales certificados",
          description:
            "Electricistas y técnicos de alarmas totalmente licenciados y asegurados, con capacitación y acreditación continuas.",
        },
        {
          title: "Residencial y comercial",
          description:
            "Un socio de confianza para hogares, oficinas y grandes edificios — ningún trabajo es demasiado pequeño o complejo.",
        },
        {
          title: "Precios claros y honestos",
          description:
            "Cotizaciones escritas sin costos ocultos, además de una garantía de mano de obra en todo lo que instalamos.",
        },
      ],
    },
    about: {
      eyebrow: "Sobre Nosotros",
      title: "Su socio de confianza en electricidad y seguridad",
      paragraphs: [
        "Full Power Services es un contratista eléctrico licenciado que cablea, protege y energiza propiedades en todo Cape Coral y las áreas circundantes. Desde trabajo eléctrico residencial hasta instalaciones comerciales completas y sistemas de seguridad, contamos con la confianza de propietarios, negocios y administradores de propiedades.",
        "Nuestra misión es simple: entregar trabajo seguro y conforme a los códigos, con precios honestos y el tipo de servicio que gana clientes recurrentes y referencias.",
      ],
      highlights: [
        "Equipo local de operación familiar",
        "Estimaciones escritas transparentes",
        "Sitios de trabajo limpios y respetuosos",
        "Mano de obra con garantía",
      ],
      commercialAlt: "Edificio comercial moderno atendido por Full Power Services",
      alarmAlt: "Técnico instalando un sistema de alarma contra incendios y seguridad",
    },
    contact: {
      eyebrow: "Contáctenos",
      title: "Solicite su cotización gratis hoy",
      description:
        "Cuéntenos sobre su proyecto y le responderemos en un día hábil con una estimación sin compromiso.",
      details: [
        { label: "Llámenos", value: "305-399-2271" },
        { label: "Correo", value: "info@fullpower.services" },
        { label: "Área de servicio", value: "Cape Coral y áreas cercanas" },
        { label: "Horario", value: "Lun–Sáb 7am–7pm · Emergencias 24/7" },
      ],
      labels: {
        name: "Nombre completo",
        phone: "Teléfono",
        email: "Correo electrónico",
        service: "Servicio que necesita",
        message: "Detalles del proyecto",
      },
      placeholders: {
        name: "Juan Pérez",
        phone: "(555) 123-4567",
        email: "usted@ejemplo.com",
        message: "Cuéntenos un poco sobre lo que necesita...",
      },
      selectPlaceholder: "Seleccione un servicio",
      serviceOptions: [
        "Electricidad residencial",
        "Comercial / edificio",
        "Sistema de alarma contra incendios",
        "Sistema de alarma antirrobo",
        "Otro / no estoy seguro",
      ],
      submit: "Solicitar Cotización Gratis",
      sending: "Enviando...",
      disclaimer: "Al enviar, acepta ser contactado sobre su solicitud.",
      successTitle: "¡Gracias!",
      successMessage:
        "Hemos recibido su solicitud. Un miembro del equipo de Full Power Services se comunicará con usted dentro de un día hábil.",
    },
    footer: {
      description:
        "Contratista eléctrico licenciado y especialista en alarmas de seguridad que atiende a clientes residenciales y comerciales en Cape Coral y las áreas circundantes.",
      servicesHeading: "Servicios",
      companyHeading: "Empresa",
      contactHeading: "Contacto",
      serviceLinks: [
        "Electricidad Residencial",
        "Comercial y Edificios",
        "Sistemas de Alarma contra Incendios",
        "Sistemas de Alarma Antirrobo",
      ],
      companyLinks: ["Sobre Nosotros", "Por Qué Elegirnos", "Servicios", "Pedir Cotización"],
      location: "Cape Coral, FL",
      rights: "Todos los derechos reservados.",
      credentials: "Licenciados · Garantizados · Asegurados",
    },
  },
}
