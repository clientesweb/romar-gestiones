import type { Metadata } from "next"
import ServiciosInmobiliariaClient from "./inmobiliaria-client"

export const metadata: Metadata = {
  title: "Gestoría Inmobiliaria Integral | RoMar Gestiones",
  description:
    "Gestión completa de propiedades: escrituras, informes de dominio, cédulas catastrales y trámites notariales. Asesoramiento experto para tus operaciones inmobiliarias en Buenos Aires.",
  keywords: [
    "gestoría inmobiliaria",
    "escrituras",
    "informes de dominio",
    "cédula catastral",
    "trámites notariales",
    "propiedades",
    "Buenos Aires",
    "RoMar Gestiones",
    "compraventa inmuebles",
    "donación propiedades",
    "hipotecas",
    "posesión inmuebles",
    "regularización dominial",
  ],
  openGraph: {
    title: "Gestoría Inmobiliaria Integral | RoMar Gestiones",
    description:
      "Gestión completa de propiedades: escrituras, informes de dominio, cédulas catastrales y trámites notariales. Asesoramiento experto para tus operaciones inmobiliarias en Buenos Aires.",
    url: "https://romar-gestiones.vercel.app/servicios/inmobiliaria",
    images: [
      {
        url: "/images/services/inmobiliaria-banner.webp",
        width: 1200,
        height: 630,
        alt: "Gestoría Inmobiliaria Integral - RoMar Gestiones",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gestoría Inmobiliaria Integral | RoMar Gestiones",
    description:
      "Gestión completa de propiedades: escrituras, informes de dominio, cédulas catastrales y trámites notariales. Asesoramiento experto para tus operaciones inmobiliarias en Buenos Aires.",
    images: ["/images/services/inmobiliaria-banner.webp"],
  },
}

export default function ServiciosInmobiliariaPage() {
  return <ServiciosInmobiliariaClient />
}
