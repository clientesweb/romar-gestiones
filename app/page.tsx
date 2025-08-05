import type { Metadata } from "next"
import Header from "@/components/header"
import HeroBanner from "@/components/hero-banner"
import CTABanner from "@/components/cta-banner"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import ProfessionalsBanner from "@/components/professionals-banner"
import WhyChooseUs from "@/components/why-choose-us"
import ProjectsGallery from "@/components/projects-gallery"
import ReviewsSlider from "@/components/reviews-slider"
import FinalCTABanner from "@/components/final-cta-banner"
import FloatingWhatsApp from "@/components/floating-whatsapp"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "RoMar Gestiones - Gestoría Integral en Buenos Aires",
  description:
    "Servicios de gestoría integral en Buenos Aires: mantenimiento edilicio, administración de consorcios, gestoría inmobiliaria, automotor y náutica. Profesionales matriculados con +500 clientes satisfechos.",
  openGraph: {
    title: "RoMar Gestiones - Gestoría Integral en Buenos Aires",
    description:
      "Servicios de gestoría integral: mantenimiento, administración de consorcios, gestoría inmobiliaria y automotor. Profesionales matriculados en Buenos Aires.",
    url: "https://romar-gestiones.vercel.app",
    images: [
      {
        url: "/images/banner-principal-romar-gestiones-oficial.webp",
        width: 1200,
        height: 630,
        alt: "RoMar Gestiones - Empresa de Servicios Integrales",
      },
    ],
  },
  twitter: {
    title: "RoMar Gestiones - Gestoría Integral en Buenos Aires",
    description:
      "Servicios de gestoría integral: mantenimiento, administración de consorcios, gestoría inmobiliaria y automotor. Profesionales matriculados.",
    images: ["/images/banner-principal-romar-gestiones-oficial.webp"],
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroBanner />
      <CTABanner />
      <AboutSection />
      <ServicesSection />
      <ProfessionalsBanner />
      <WhyChooseUs />
      <ProjectsGallery />
      <ReviewsSlider />
      <FinalCTABanner />
      <div className="border-t border-gray-200"></div> {/* Nueva línea de separación */}
      <FloatingWhatsApp />
      <Footer />
    </div>
  )
}
