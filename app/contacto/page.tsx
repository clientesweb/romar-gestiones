import type { Metadata } from "next"
import ContactoPageClient from "./contacto-client"

export const metadata: Metadata = {
  title: "Contacto - RoMar Gestiones | Gestoría Integral en Buenos Aires",
  description:
    "Contacta con RoMar Gestiones para consultas sobre gestoría integral, mantenimiento edilicio, administración de consorcios y más. Atención personalizada en Buenos Aires. WhatsApp: 11 3084-9514",
  keywords: [
    "contacto RoMar Gestiones",
    "gestoría integral Buenos Aires",
    "consulta gratuita",
    "atención personalizada",
    "WhatsApp gestoría",
    "contacto mantenimiento",
    "administración consorcios contacto",
    "gestoría inmobiliaria consulta",
    "trámites Buenos Aires",
    "profesionales matriculados contacto",
  ],
  openGraph: {
    title: "Contacto - RoMar Gestiones | Gestoría Integral en Buenos Aires",
    description:
      "Contacta con RoMar Gestiones para consultas sobre gestoría integral. Atención personalizada, profesionales matriculados. WhatsApp: 11 3084-9514. Consulta gratuita.",
    url: "https://romar-gestiones.vercel.app/contacto",
    type: "website",
    locale: "es_AR",
    siteName: "RoMar Gestiones",
    images: [
      {
        url: "/images/contacto-banner.webp",
        width: 1200,
        height: 630,
        alt: "Contacto RoMar Gestiones - Atención personalizada para gestoría integral",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@romargestioness",
    creator: "@romargestioness",
    title: "Contacto - RoMar Gestiones | Gestoría Integral",
    description:
      "Contacta con RoMar Gestiones para consultas sobre gestoría integral. WhatsApp: 11 3084-9514. Atención personalizada en Buenos Aires.",
    images: ["/images/contacto-banner.webp"],
  },
  alternates: {
    canonical: "https://romar-gestiones.vercel.app/contacto",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function ContactoPage() {
  return <ContactoPageClient />
}
