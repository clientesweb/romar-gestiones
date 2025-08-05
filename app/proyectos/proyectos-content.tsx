"use client"

import { useState } from "react"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import FloatingWhatsApp from "@/components/floating-whatsapp"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

export default function ProyectosPageContent() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const projects = [
    {
      id: 1,
      title: "Iluminación y Cableado Completo - Sector SUM",
      image: "/images/projects/iluminacion-sector-sum-1.jpg",
      category: "Mantenimiento Eléctrico",
      description:
        "Instalación completa de sistema de iluminación LED y cableado estructural en salón de usos múltiples.",
    },
    {
      id: 2,
      title: "Iluminación Sector Cocina",
      image: "/images/projects/iluminacion-sector-cocina.jpg",
      category: "Instalación Eléctrica",
      description: "Modernización del sistema eléctrico y luminarias LED en área de cocina institucional.",
    },
    {
      id: 3,
      title: "Proyecto Integral SUM",
      image: "/images/projects/iluminacion-sum-3.jpg",
      category: "Obra Completa",
      description: "Proyecto integral de iluminación y acondicionamiento eléctrico en salón multiuso.",
    },
    {
      id: 4,
      title: "Estructura e Iluminación SUM",
      image: "/images/projects/iluminacion-sum-2.jpg",
      category: "Mantenimiento Edilicio",
      description: "Instalación de sistema de iluminación industrial con estructura metálica de soporte.",
    },
    {
      id: 5,
      title: "Iluminación Sector Depósito",
      image: "/images/projects/fin-obra-2.jpg",
      category: "Finalización de Obra",
      description: "Finalización de obra eléctrica en sector de depósito con iluminación LED eficiente.",
    },
    {
      id: 6,
      title: "Iluminación Baños de Damas",
      image: "/images/projects/iluminacion-sector-bano-dam.jpg",
      category: "Instalación Sanitaria",
      description: "Instalación eléctrica completa en sanitarios con luminarias LED y acabados profesionales.",
    },
    {
      id: 7,
      title: "Equipo Trabajando - Sector Cocina",
      image: "/images/projects/aun-trabajando.jpg",
      category: "Proceso de Obra",
      description: "Nuestro equipo de electricistas matriculados trabajando en instalaciones eléctricas.",
    },
    {
      id: 8,
      title: "Iluminación Baños de Caballeros",
      image: "/images/projects/iluminacion-sector-bano-cab.jpg",
      category: "Instalación Sanitaria",
      description: "Sistema de iluminación LED en sanitarios de caballeros con instalación profesional.",
    },
  ]

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % projects.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? projects.length - 1 : selectedImage - 1)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Contenido principal */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-6xl mx-auto">
          {/* Título */}
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-extrabold text-gray-800 mb-4 sm:mb-6">
              Nuestros Proyectos
            </h1>
            <p className="text-lg sm:text-xl font-poppins text-gray-600 leading-relaxed px-4 sm:px-0">
              Descubre la <span className="font-semibold">calidad y profesionalismo</span> de nuestros trabajos
              realizados
            </p>
          </div>

          {/* Grid de proyectos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer hover:scale-[1.02]" // Added hover:scale
                onClick={() => openLightbox(index)}
              >
                {/* Imagen */}
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Overlay con categoría */}
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                    <span className="bg-brand-dark-blue text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-poppins font-semibold">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Contenido */}
                <div className="p-4 sm:p-6">
                  <h3 className="font-poppins font-semibold text-gray-800 text-base sm:text-lg mb-2 sm:mb-3">
                    {project.title}
                  </h3>
                  <p className="font-poppins text-gray-600 text-xs sm:text-sm leading-relaxed">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          {/* Botón cerrar */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-300 z-10 hover:scale-110" // Added hover:scale
            aria-label="Cerrar"
          >
            <X className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          {/* Botón anterior */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-300 z-10 hover:scale-110" // Added hover:scale
            aria-label="Imagen anterior"
          >
            <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          {/* Botón siguiente */}
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-300 z-10 hover:scale-110" // Added hover:scale
            aria-label="Imagen siguiente"
          >
            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          {/* Imagen */}
          <div className="relative max-w-4xl max-h-full">
            <Image
              src={projects[selectedImage].image || "/placeholder.svg"}
              alt={projects[selectedImage].title}
              width={1200}
              height={800}
              className="max-w-full max-h-full object-contain"
            />

            {/* Información de la imagen */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 sm:p-4">
              <h3 className="font-poppins font-semibold text-base sm:text-lg mb-1 sm:mb-2">
                {projects[selectedImage].title}
              </h3>
              <p className="font-poppins text-xs sm:text-sm text-gray-200">{projects[selectedImage].description}</p>
            </div>
          </div>
        </div>
      )}

      <FloatingWhatsApp />
      <Footer />
    </div>
  )
}
