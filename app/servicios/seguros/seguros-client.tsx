"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import FloatingWhatsApp from "@/components/floating-whatsapp"
import { Heart, User, Home, Briefcase, PiggyBank, Phone } from 'lucide-react'
import Link from "next/link"
import WhatsAppIcon from "@/components/whatsapp-icon"
import Image from "next/image"

export default function ServiciosSegurosClient() {
  const whatsappNumber = "541132951164"
  const whatsappMessage = "Hola, me interesa conocer más sobre seguros."
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  const seguros = [
    {
      icon: <Heart className="w-8 h-8 text-brand-dark-blue" />, // Changed to brand-dark-blue
      title: "Seguros de Vida",
      description: "Protección para tu familia y seres queridos",
      detalles: [
        "Cobertura por fallecimiento",
        "Seguro de vida temporal y permanente",
        "Beneficios por invalidez total y permanente",
        "Cobertura por enfermedades graves",
        "Planes familiares y individuales",
        "Asesoramiento personalizado",
      ],
    },
    {
      icon: <User className="w-8 h-8 text-brand-green" />, // Changed to brand-green
      title: "Seguros Personales",
      description: "Cobertura para accidentes y enfermedades",
      detalles: [
        "Seguro de accidentes personales",
        "Cobertura médica y hospitalaria",
        "Seguro de viaje nacional e internacional",
        "Cobertura odontológica",
        "Seguro de responsabilidad civil",
        "Asistencia médica domiciliaria",
      ],
    },
    {
      icon: <Home className="w-8 h-8 text-brand-dark-blue" />,
      title: "Seguros Patrimoniales",
      description: "Cobertura para tu propiedad y bienes",
      detalles: [
        "Seguro de hogar integral",
        "Cobertura contra incendio y robo",
        "Seguro de comercio y oficina",
        "Cobertura de responsabilidad civil",
        "Seguro de cristales y equipos",
        "Protección contra fenómenos naturales",
      ],
    },
    {
      icon: <Briefcase className="w-8 h-8 text-brand-green" />, // Changed to brand-green
      title: "A.R.T. (Accidentes de Trabajo)",
      description: "Protección para empleados y empleadores en caso de accidentes laborales",
      detalles: [
        "Cobertura obligatoria para empleadores",
        "Atención médica por accidentes laborales",
        "Indemnizaciones por incapacidad",
        "Rehabilitación y readaptación laboral",
        "Asesoramiento en prevención de riesgos",
        "Gestión integral de siniestros",
      ],
    },
    {
      icon: <PiggyBank className="w-8 h-8 text-brand-dark-blue" />, // Changed to brand-dark-blue
      title: "Seguro de Retiro",
      description: "Planificación y protección para tu futuro financiero",
      detalles: [
        "Planes de ahorro para el retiro",
        "Rentas vitalicias",
        "Seguros de jubilación privada",
        "Inversiones a largo plazo",
        "Planificación financiera personalizada",
        "Beneficios fiscales disponibles",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section con imagen de banner */}
      <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
        {/* Imagen de fondo */}
        <div className="absolute inset-0">
          <Image src="/images/services/seguros-banner.webp" alt="Seguros" fill className="object-cover" priority />
          {/* Overlay de color de marca con menor opacidad */}
          <div className="absolute inset-0 bg-brand-dark-blue/60"></div>
        </div>

        {/* Contenido */}
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            {/* Eliminado el icono grande */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-extrabold mb-6">Seguros</h1>
            <p className="text-lg sm:text-xl leading-relaxed mb-8">
              Protección integral para ti, tu familia y tu patrimonio
            </p>
            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-brand-green hover:bg-[#20b358] text-white font-poppins font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <WhatsAppIcon className="w-6 h-6" />
              <span>Solicitar Cotización</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Seguros Detallados */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-montserrat font-extrabold text-gray-800 mb-4">
                Nuestros Seguros
              </h2>
              <p className="text-lg text-gray-600">Cobertura completa para todas las etapas de tu vida</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {seguros.map((seguro, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]" // Added hover:scale
                >
                  <div className="flex items-center gap-4 mb-6">
                    {seguro.icon}
                    <div>
                      <h3 className="text-xl font-montserrat font-extrabold text-gray-800">{seguro.title}</h3>
                      <p className="text-gray-600 text-sm mt-1">{seguro.description}</p>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {seguro.detalles.map((detalle, detalleIndex) => (
                      <li key={detalleIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-brand-dark-blue rounded-full flex-shrink-0 mt-2"></div>{" "}
                        {/* Changed to brand-dark-blue */}
                        <span className="text-gray-700 text-sm leading-relaxed">{detalle}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <Link
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-brand-dark-blue hover:bg-blue-700 text-white font-poppins font-semibold py-3 px-4 rounded-md transition-colors duration-300" // Changed to brand-dark-blue
                    >
                      <Phone className="w-4 h-4" />
                      <span>Cotizar</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-gray-200"></div>
      {/* CTA Section */}
      <section className="bg-brand-dark-blue py-12 sm:py-16">
        {" "}
        {/* Changed to brand-dark-blue */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-montserrat font-extrabold text-white mb-4">
              ¿Necesitás protección para ti y tu familia?
            </h2>
            <p className="text-lg text-white/90 mb-8">Contactanos para una cotización personalizada y sin compromiso</p>
            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-brand-green hover:bg-[#20b358] text-white font-poppins font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <WhatsAppIcon className="w-6 h-6" />
              <span>Contactar Ahora</span>
            </Link>
          </div>
        </div>
      </section>

      <div className="border-t border-gray-200"></div>
      <FloatingWhatsApp />
      <Footer />
    </div>
  )
}
