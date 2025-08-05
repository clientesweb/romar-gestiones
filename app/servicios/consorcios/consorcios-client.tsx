"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import FloatingWhatsApp from "@/components/floating-whatsapp"
import { Building2, DollarSign, Users, MessageSquare, Phone } from "lucide-react"
import Link from "next/link"
import WhatsAppIcon from "@/components/whatsapp-icon"
import Image from "next/image"

export default function ServiciosConsorciosClient() {
  const whatsappNumber = "5491130849514"
  const whatsappMessage = "Hola, me interesa conocer más sobre administración de consorcios."
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  const servicios = [
    {
      icon: <DollarSign className="w-8 h-8 text-brand-green" />,
      title: "Gestión de Gastos",
      description: "Administración eficiente de los recursos financieros, incluyendo presupuestos y pagos",
      detalles: [
        "Elaboración y control de presupuestos mensuales",
        "Gestión de cobranzas y pagos",
        "Administración de fondos de reserva",
        "Control de gastos comunes y extraordinarios",
        "Rendición de cuentas transparente",
        "Asesoramiento financiero para el consorcio",
      ],
    },
    {
      icon: <Building2 className="w-8 h-8 text-brand-dark-blue" />,
      title: "Mantenimiento de Espacios Comunes",
      description: "Cuidado y reparación de áreas compartidas para garantizar su buen estado",
      detalles: [
        "Mantenimiento de ascensores y sistemas mecánicos",
        "Cuidado de jardines y espacios verdes",
        "Limpieza y mantenimiento de áreas comunes",
        "Reparación de instalaciones eléctricas comunes",
        "Mantenimiento de portería y accesos",
        "Gestión de servicios de limpieza y seguridad",
      ],
    },
    {
      icon: <Users className="w-8 h-8 text-brand-dark-blue" />, // Changed to brand-dark-blue
      title: "Resolución de Conflictos",
      description: "Solución de problemas y disputas entre propietarios e inquilinos de manera justa y eficiente",
      detalles: [
        "Mediación en conflictos entre propietarios",
        "Resolución de disputas por ruidos molestos",
        "Gestión de reclamos y quejas",
        "Aplicación del reglamento de copropiedad",
        "Asesoramiento legal básico",
        "Organización de asambleas de propietarios",
      ],
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-brand-green" />, // Changed to brand-green
      title: "Información Transparente",
      description:
        "Comunicación clara y oportuna para todos los propietarios e inquilinos sobre decisiones y gestiones",
      detalles: [
        "Informes mensuales detallados",
        "Comunicación digital y física",
        "Portal web para consultas 24/7",
        "Notificaciones importantes por WhatsApp",
        "Actas de asambleas y reuniones",
        "Transparencia total en la gestión",
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
          <Image
            src="/images/services/consorcios-banner.webp"
            alt="Administración de Consorcios"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay de color de marca con menor opacidad */}
          <div className="absolute inset-0 bg-brand-dark-blue/60"></div>
        </div>

        {/* Contenido */}
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            {/* Eliminado el icono grande */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-extrabold mb-6">
              Administración de Consorcios
            </h1>
            <p className="text-lg sm:text-xl leading-relaxed mb-8">
              Gestión profesional y transparente de propiedades horizontales con administradores matriculados
            </p>
            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-brand-green hover:bg-[#20b358] text-white font-poppins font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <WhatsAppIcon className="w-6 h-6" />
              <span>Solicitar Presupuesto</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Servicios Detallados */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-montserrat font-extrabold text-gray-800 mb-4">
                Servicios de Administración
              </h2>
              <p className="text-lg text-gray-600">Gestión integral para el bienestar de tu consorcio</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {servicios.map((servicio, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]" // Added hover:scale
                >
                  <div className="flex items-center gap-4 mb-6">
                    {servicio.icon}
                    <div>
                      <h3 className="text-xl font-montserrat font-extrabold text-gray-800">{servicio.title}</h3>
                      <p className="text-gray-600 text-sm mt-1">{servicio.description}</p>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {servicio.detalles.map((detalle, detalleIndex) => (
                      <li key={detalleIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-brand-green rounded-full flex-shrink-0 mt-2"></div>
                        <span className="text-gray-700 text-sm leading-relaxed">{detalle}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <Link
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-brand-green hover:bg-green-700 text-white font-poppins font-semibold py-3 px-4 rounded-md transition-colors duration-300"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Consultar</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="border-t border-gray-200"></div>
      <section className="bg-brand-dark-blue py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-montserrat font-extrabold text-white mb-4">
              ¿Tu consorcio necesita una administración profesional?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Contactanos para una consulta gratuita y mejorá la gestión de tu propiedad
            </p>
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
