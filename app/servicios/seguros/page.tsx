import type { Metadata } from "next"
import ServiciosSegurosClient from "./seguros-client"

export const metadata: Metadata = {
  title: "Seguros Integrales para Personas y Patrimonio | RoMar Gestiones",
  description:
    "Protección completa con seguros de vida, personales, patrimoniales, ART y de retiro. Asesoramiento personalizado para asegurar tu futuro y el de tu familia en Buenos Aires.",
  keywords: [
    "seguros de vida",
    "seguros personales",
    "seguros patrimoniales",
    "ART",
    "seguro de retiro",
    "protección familiar",
    "seguros Buenos Aires",
    "RoMar Gestiones",
  ],
  openGraph: {
    title: "Seguros Integrales para Personas y Patrimonio | RoMar Gestiones",
    description:
      "Protección completa con seguros de vida, personales, patrimoniales, ART y de retiro. Asesoramiento personalizado para asegurar tu futuro y el de tu familia en Buenos Aires.",
    url: "https://www.romargestiones.com.ar/servicios/seguros",
    images: [
      {
        url: "/images/services/seguros-banner.webp",
        width: 1200,
        height: 630,
        alt: "Seguros Integrales para Personas y Patrimonio - RoMar Gestiones",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Seguros Integrales para Personas y Patrimonio | RoMar Gestiones",
    description:
      "Protección completa con seguros de vida, personales, patrimoniales, ART y de retiro. Asesoramiento personalizado para asegurar tu futuro y el de tu familia en Buenos Aires.",
    images: ["/images/services/seguros-banner.webp"],
  },
}

export default function ServiciosSegurosPage() {
  return <ServiciosSegurosClient />
}
