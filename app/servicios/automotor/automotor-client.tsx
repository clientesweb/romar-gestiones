"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import FloatingWhatsApp from "@/components/floating-whatsapp"
import { FileText, Truck, RefreshCw, Phone } from 'lucide-react'
import Link from "next/link"
import WhatsAppIcon from "@/components/whatsapp-icon"
import Image from "next/image"

export default function ServiciosAutomotorClient() {
  const whatsappNumber = "541132951164"
  const whatsappMessage = "Hola, me interesa conocer más sobre gestoría automotor."
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  const servicios = [
    {
      icon: <FileText className="w-8 h-8 text-brand-dark-blue" />,
      title: "Trámites de Patentes y Documentación",
      description: "Gestión de patentes, transferencias y bajas de dominio",
      detalles: [
        "Gestión de patentes nuevas",
        "Renovación de patentes vencidas",
        "Baja de dominio definitiva",
        "Informes de dominio completos",
        "Cédula azul y verde",
        "Duplicado de documentación",
      ],
    },
    {
      icon: <Truck className="w-8 h-8 text-brand-green" />,
      title: "Gestión de Flotas y Vehículos Comerciales",
      description: "Asesoramiento y trámites para empresas que adquieren o gestionan flotas de vehículos",
      detalles: [
        "Gestión integral de flotas empresariales",
        "Trámites para vehículos comerciales",
        "Asesoramiento en compra de flotas",
        "Gestión de seguros para flotas",
        "Renovación masiva de documentación",
        "Planes de financiamiento vehicular",
      ],
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-brand-dark-blue" />,
      title: "Trámites de Transferencia y Venta",
      description: "Gestión de transferencias de propiedad, venta y compra de vehículos",
      detalles: [
        "Transferencia de dominio",
        "Gestión de compra-venta",
        "Verificación policial",
        "Libre deuda de patentes",
        "Formulario 08 y 13",
        "Asesoramiento legal en ventas",
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
            src="/images/services/automotor-banner.webp"
            alt="Gestoría Automotor"
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-extrabold mb-6">Gestoría Automotor</h1>
            <p className="text-lg sm:text-xl leading-relaxed mb-8">
              Todos los trámites para tu vehículo en un solo lugar
            </p>
            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-brand-green hover:bg-[#20b358] text-white font-poppins font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <WhatsAppIcon className="w-6 h-6" />
              <span>Consultar Trámites</span>
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
                Servicios Automotor
              </h2>
              <p className="text-lg text-gray-600">Gestión completa para todos tus trámites vehiculares</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
                        <div className="w-2 h-2 bg-brand-dark-blue rounded-full flex-shrink-0 mt-2"></div>
                        <span className="text-gray-700 text-sm leading-relaxed">{detalle}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <Link
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-brand-dark-blue hover:bg-blue-700 text-white font-poppins font-semibold py-3 px-4 rounded-md transition-colors duration-300"
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

      {/* Línea de separación */}
      <div className="border-t border-gray-200"></div>

      {/* CTA Section */}
      <section className="bg-brand-dark-blue py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-montserrat font-extrabold text-white mb-4">
              ¿Necesitás hacer trámites para tu vehículo?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Te ayudamos con todos los trámites automotor de forma rápida y segura
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

      {/* Línea de separación */}
      <div className="border-t border-gray-200"></div>

      <FloatingWhatsApp />
      <Footer />
    </div>
  )
}
