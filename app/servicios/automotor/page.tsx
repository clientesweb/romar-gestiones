import type { Metadata } from "next"
import ServiciosAutomotorClient from "./automotor-client"

export const metadata: Metadata = {
  title: "Gestoría Automotor Rápida y Segura | RoMar Gestiones",
  description:
    "Simplifica tus trámites vehiculares: patentes, transferencias, gestión de flotas y documentación. Servicio profesional y eficiente en Buenos Aires.",
  keywords: [
    "gestoría automotor",
    "trámites vehiculares",
    "patentes",
    "transferencias automotor",
    "flotas comerciales",
    "documentación vehicular",
    "Buenos Aires",
    "RoMar Gestiones",
    "registro automotor",
    "verificación policial",
    "cédula verde",
    "cédula azul",
    "baja de automotor",
  ],
  openGraph: {
    title: "Gestoría Automotor Rápida y Segura | RoMar Gestiones",
    description:
      "Simplifica tus trámites vehiculares: patentes, transferencias, gestión de flotas y documentación. Servicio profesional y eficiente en Buenos Aires.",
    url: "https://romar-gestiones.vercel.app/servicios/automotor",
    images: [
      {
        url: "/images/services/automotor-banner.webp",
        width: 1200,
        height: 630,
        alt: "Gestoría Automotor Rápida y Segura - RoMar Gestiones",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gestoría Automotor Rápida y Segura | RoMar Gestiones",
    description:
      "Simplifica tus trámites vehiculares: patentes, transferencias, gestión de flotas y documentación. Servicio profesional y eficiente en Buenos Aires.",
    images: ["/images/services/automotor-banner.webp"],
  },
}

export default function ServiciosAutomotorPage() {
  return <ServiciosAutomotorClient />
}
