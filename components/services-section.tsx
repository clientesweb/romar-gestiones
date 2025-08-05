"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import Link from "next/link"
import WhatsAppIcon from "./whatsapp-icon"
import Image from "next/image"
import FadeInSection from "./fade-in-section"

export default function ServicesSection() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null)

  const whatsappNumber = "5491130849514"
  const whatsappMessage = "Hola, me interesa conocer más sobre sus servicios de gestoría integral."
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  const services = [
    {
      image: "/images/services/mantenimiento-banner.webp",
      title: "Servicios de Mantenimiento",
      description: "Cuidado integral de tu propiedad con profesionales matriculados",
      items: [
        {
          name: "Mantenimiento Preventivo",
          description: "Inspecciones y tareas regulares para evitar problemas",
        },
        {
          name: "Corrección",
          description: "Reparación y solución de problemas existentes",
        },
        {
          name: "Cuidar lo Nuevo",
          description: "Mantenimiento especializado para construcciones recientes",
        },
      ],
    },
    {
      image: "/images/services/consorcios-banner.webp",
      title: "Administración de Consorcios",
      description: "Gestión profesional y transparente de propiedades horizontales",
      items: [
        {
          name: "Gestión de Gastos",
          description: "Administración eficiente de los recursos financieros, incluyendo presupuestos y pagos",
        },
        {
          name: "Mantenimiento de Espacios Comunes",
          description: "Cuidado y reparación de áreas compartidas para garantizar su buen estado",
        },
        {
          name: "Resolución de Conflictos",
          description: "Solución de problemas y disputas entre propietarios e inquilinos de manera justa y eficiente",
        },
        {
          name: "Información Transparente",
          description:
            "Comunicación clara y oportuna para todos los propietarios e inquilinos sobre decisiones y gestiones",
        },
      ],
    },
    {
      image: "/images/services/seguros-banner.webp",
      title: "Seguros",
      description: "Protección integral para ti, tu familia y tu patrimonio",
      items: [
        {
          name: "Seguros de Vida",
          description: "Protección para tu familia y seres queridos",
        },
        {
          name: "Seguros Personales",
          description: "Cobertura para accidentes y enfermedades",
        },
        {
          name: "Seguros Patrimoniales",
          description: "Cobertura para tu propiedad y bienes",
        },
        {
          name: "A.R.T. (Accidentes de Trabajo)",
          description: "Protección para empleados y empleadores en caso de accidentes laborales",
        },
        {
          name: "Seguro de Retiro",
          description: "Planificación y protección para tu futuro financiero",
        },
      ],
    },
    {
      image: "/images/services/automotor-banner.webp",
      title: "Gestoría Automotor",
      description: "Todos los trámites para tu vehículo en un solo lugar",
      items: [
        {
          name: "Trámites de Patentes y Documentación",
          description: "Gestión de patentes, transferencias y bajas de dominio",
        },
        {
          name: "Gestión de Flotas y Vehículos Comerciales",
          description: "Asesoramiento y trámites para empresas que adquieren o gestionan flotas de vehículos",
        },
        {
          name: "Trámites de Transferencia y Venta",
          description: "Gestión de transferencias de propiedad, venta y compra de vehículos",
        },
      ],
    },
    {
      image: "/images/services/nautica-banner.webp",
      title: "Gestoría Náutica",
      description: "Trámites especializados para embarcaciones",
      items: [
        {
          name: "Matriculación y Registro",
          description: "Trámites para matricular y registrar embarcaciones",
        },
        {
          name: "Transferencia de Propiedad",
          description: "Gestión de transferencias de propiedad de embarcaciones",
        },
        {
          name: "Gestión de Seguros y Avalúos",
          description: "Asesoramiento y trámites para asegurar y avaluar embarcaciones",
        },
      ],
    },
    {
      image: "/images/services/inmobiliaria-banner.webp",
      title: "Gestoría Inmobiliaria",
      description: "Gestión integral de propiedades y trámites inmobiliarios",
      items: [
        {
          name: "Escrituras y Trámites",
          description: "Escrituras de compraventa, donación, hipoteca, etc.",
        },
        {
          name: "Escritura de Posesión",
          description: "Cesión de derechos posesorios ante escribano público",
        },
        {
          name: "Informe de Dominio",
          description: "Verificación de la propiedad y su historial",
        },
        {
          name: "Cédula Catastral",
          description: "Obtención de la cédula catastral para identificar la propiedad",
        },
      ],
    },
  ]

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index)
  }

  return (
    <section id="servicios" className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        <FadeInSection>
          <div className="max-w-screen-2xl mx-auto">
            {/* Título principal */}
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-montserrat font-extrabold text-gray-800 mb-4 lg:mb-6">
                Nuestros Servicios
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 px-4 sm:px-0 max-w-4xl mx-auto">
                Soluciones integrales para todas tus necesidades
              </p>
            </div>

            {/* Acordeón de servicios */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.01]"
                >
                  {/* Header del acordeón */}
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between p-4 sm:p-6 lg:p-8 text-left focus:outline-none focus:ring-2 focus:ring-brand-dark-blue focus:ring-inset rounded-lg"
                  >
                    <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-lg overflow-hidden shadow-md">
                          <Image
                            src={service.image || "/placeholder.svg"}
                            alt={service.title}
                            width={96}
                            height={96}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-montserrat font-extrabold text-gray-800 mb-1 lg:mb-2">
                          {service.title}
                        </h3>
                        <p className="text-sm sm:text-base lg:text-lg text-gray-600">{service.description}</p>
                      </div>
                    </div>
                    <div className="flex-shrink-0 ml-4">
                      {openAccordion === index ? (
                        <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-gray-500" />
                      ) : (
                        <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-gray-500" />
                      )}
                    </div>
                  </button>

                  {/* Contenido del acordeón */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openAccordion === index ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 lg:pb-8">
                      <div className="border-t border-gray-200 pt-4 sm:pt-6 lg:pt-8">
                        <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:gap-8">
                          {service.items.map((item, itemIndex) => (
                            <div key={itemIndex} className="flex items-start gap-3 lg:gap-4">
                              <div className="flex-shrink-0 w-2 h-2 lg:w-3 lg:h-3 bg-brand-green rounded-full mt-2"></div>
                              <div>
                                <h4 className="font-poppins font-semibold text-gray-800 text-sm sm:text-base lg:text-lg mb-1">
                                  {item.name}
                                </h4>
                                <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* CTAs dentro del acordeón */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 mt-6 lg:mt-8 pt-4 lg:pt-6 border-t border-gray-200">
                          <Link
                            href={
                              index === 0
                                ? "/servicios/mantenimiento"
                                : index === 1
                                  ? "/servicios/consorcios"
                                  : index === 2
                                    ? "/servicios/seguros"
                                    : index === 3
                                      ? "/servicios/automotor"
                                      : index === 4
                                        ? "/servicios/nautica"
                                        : "/servicios/inmobiliaria"
                            }
                            className="inline-flex items-center justify-center gap-2 bg-brand-dark-blue hover:bg-blue-700 text-white font-poppins font-semibold py-2 sm:py-3 lg:py-4 px-4 sm:px-6 lg:px-8 rounded-md transition-colors duration-300 text-sm sm:text-base lg:text-lg"
                          >
                            <span>Ver más detalles</span>
                          </Link>
                          <Link
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-brand-green hover:bg-[#20b358] text-white font-poppins font-semibold py-2 sm:py-3 lg:py-4 px-4 sm:px-6 lg:px-8 rounded-md transition-colors duration-300 text-sm sm:text-base lg:text-lg"
                          >
                            <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                            <span>Consultar</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
