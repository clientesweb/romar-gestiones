import ProyectosPageClient from "./proyectos-page-client"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Proyectos - RoMar Gestiones",
  description:
    "Descubre los proyectos realizados por RoMar Gestiones: mantenimiento edilicio, instalaciones eléctricas, obras completas y más. Calidad y profesionalismo garantizado.",
  openGraph: {
    title: "Proyectos - RoMar Gestiones",
    description:
      "Galería de proyectos realizados: mantenimiento edilicio, instalaciones eléctricas, obras completas. Calidad y profesionalismo garantizado.",
    url: "https://www.romargestiones.com.ar/proyectos",
    images: [
      {
        url: "/images/og-image-romar-gestiones.jpg",
        width: 1200,
        height: 630,
        alt: "Proyectos - RoMar Gestiones",
      },
    ],
  },
  twitter: {
    title: "Proyectos - RoMar Gestiones",
    description: "Galería de proyectos realizados: mantenimiento edilicio, instalaciones eléctricas, obras completas.",
    images: ["/images/og-image-romar-gestiones.jpg"],
  },
}

export default function ProyectosPage() {
  return <ProyectosPageClient />
}
