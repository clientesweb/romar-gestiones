import type { Metadata } from "next"
import ServiciosNauticaClient from "./nautica-client"

export const metadata: Metadata = {
  title: "Gestoría Náutica Especializada | RoMar Gestiones",
  description:
    "Trámites náuticos profesionales: matriculación, registro, transferencias y seguros para embarcaciones. Asesoramiento experto para tu embarcación en Buenos Aires.",
  keywords: [
    "gestoría náutica",
    "matriculación embarcaciones",
    "registro náutico",
    "transferencia embarcaciones",
    "seguros náuticos",
    "Prefectura Naval",
    "Buenos Aires",
    "RoMar Gestiones",
  ],
  openGraph: {
    title: "Gestoría Náutica Especializada | RoMar Gestiones",
    description:
      "Trámites náuticos profesionales: matriculación, registro, transferencias y seguros para embarcaciones. Asesoramiento experto para tu embarcación en Buenos Aires.",
    url: "https://romar-gestiones.vercel.app/servicios/nautica",
    images: [
      {
        url: "/images/services/nautica-banner.webp",
        width: 1200,
        height: 630,
        alt: "Gestoría Náutica Especializada - RoMar Gestiones",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gestoría Náutica Especializada | RoMar Gestiones",
    description:
      "Trámites náuticos profesionales: matriculación, registro, transferencias y seguros para embarcaciones. Asesoramiento experto para tu embarcación en Buenos Aires.",
    images: ["/images/services/nautica-banner.webp"],
  },
}

export default function ServiciosNauticaPage() {
  return <ServiciosNauticaClient />
}
