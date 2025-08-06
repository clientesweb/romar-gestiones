import type { Metadata } from "next"
import ServiciosConsorciosClient from "./consorcios-client"

export const metadata: Metadata = {
  title: "Administración de Consorcios Profesional | RoMar Gestiones",
  description:
    "Gestión transparente y eficiente de consorcios en Buenos Aires. Incluye administración de gastos, mantenimiento de áreas comunes, resolución de conflictos y comunicación clara.",
  keywords: [
    "administración de consorcios",
    "administradores matriculados",
    "gestión de propiedades horizontales",
    "mantenimiento de edificios",
    "resolución de conflictos consorciales",
    "Buenos Aires",
    "RoMar Gestiones",
  ],
  openGraph: {
    title: "Administración de Consorcios Profesional | RoMar Gestiones",
    description:
      "Gestión transparente y eficiente de consorcios en Buenos Aires. Incluye administración de gastos, mantenimiento de áreas comunes, resolución de conflictos y comunicación clara.",
    url: "https://www.romargestiones.com.ar/servicios/consorcios",
    images: [
      {
        url: "/images/services/consorcios-banner.webp",
        width: 1200,
        height: 630,
        alt: "Administración de Consorcios Profesional - RoMar Gestiones",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Administración de Consorcios Profesional | RoMar Gestiones",
    description:
      "Gestión transparente y eficiente de consorcios en Buenos Aires. Incluye administración de gastos, mantenimiento de áreas comunes, resolución de conflictos y comunicación clara.",
    images: ["/images/services/consorcios-banner.webp"],
  },
}

export default function ServiciosConsorciosPage() {
  return <ServiciosConsorciosClient />
}
