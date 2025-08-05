import type { Metadata } from "next"
import ServiciosMantenimientoClient from "./mantenimiento-client"

export const metadata: Metadata = {
  title: "Servicios de Mantenimiento Integral | RoMar Gestiones",
  description:
    "Ofrecemos mantenimiento preventivo, correctivo y especializado para construcciones nuevas. Profesionales matriculados garantizan el cuidado integral de tu propiedad en Buenos Aires.",
  keywords: [
    "mantenimiento edilicio",
    "mantenimiento preventivo",
    "mantenimiento correctivo",
    "cuidado de construcciones",
    "electricistas matriculados",
    "plomeros",
    "Buenos Aires",
    "RoMar Gestiones",
  ],
  openGraph: {
    title: "Servicios de Mantenimiento Integral | RoMar Gestiones",
    description:
      "Mantenimiento preventivo, correctivo y especializado para construcciones nuevas. Profesionales matriculados garantizan el cuidado integral de tu propiedad en Buenos Aires.",
    url: "https://romar-gestiones.vercel.app/servicios/mantenimiento",
    images: [
      {
        url: "/images/services/mantenimiento-banner.webp",
        width: 1200,
        height: 630,
        alt: "Servicios de Mantenimiento Integral - RoMar Gestiones",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Servicios de Mantenimiento Integral | RoMar Gestiones",
    description:
      "Mantenimiento preventivo, correctivo y especializado para construcciones nuevas. Profesionales matriculados garantizan el cuidado integral de tu propiedad en Buenos Aires.",
    images: ["/images/services/mantenimiento-banner.webp"],
  },
}

export default function ServiciosMantenimientoPage() {
  return <ServiciosMantenimientoClient />
}
