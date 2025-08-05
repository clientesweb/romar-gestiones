"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import FadeInSection from "./fade-in-section"

export default function ProjectsGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const projects = [
    {
      id: 1,
      title: "Iluminación y Cableado Completo - Sector SUM",
      image: "/images/projects/iluminacion-sector-sum-1.jpg",
      category: "Mantenimiento Eléctrico",
    },
    {
      id: 2,
      title: "Iluminación Sector Cocina",
      image: "/images/projects/iluminacion-sector-cocina.jpg",
      category: "Instalación Eléctrica",
    },
    {
      id: 3,
      title: "Proyecto Integral SUM",
      image: "/images/projects/iluminacion-sum-3.jpg",
      category: "Obra Completa",
    },
    {
      id: 4,
      title: "Estructura e Iluminación SUM",
      image: "/images/projects/iluminacion-sum-2.jpg",
      category: "Mantenimiento Edilicio",
    },
    {
      id: 5,
      title: "Iluminación Sector Depósito",
      image: "/images/projects/fin-obra-2.jpg",
      category: "Finalización de Obra",
    },
    {
      id: 6,
      title: "Iluminación Baños de Damas",
      image: "/images/projects/iluminacion-sector-bano-dam.jpg",
      category: "Instalación Sanitaria",
    },
    {
      id: 7,
      title: "Equipo Trabajando - Sector Cocina",
      image: "/images/projects/aun-trabajando.jpg",
      category: "Proceso de Obra",
    },
    {
      id: 8,
      title: "Iluminación Baños de Caballeros",
      image: "/images/projects/iluminacion-sector-bano-cab.jpg",
      category: "Instalación Sanitaria",
    },
  ]

  // Configuración responsive del slider
  const getItemsPerView = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1536) return 4 // 2xl: 4 items
      if (window.innerWidth >= 1024) return 3 // lg: 3 items
      if (window.innerWidth >= 640) return 2 // sm: 2 items
      return 1 // mobile: 1 item
    }
    return 3
  }

  const [itemsPerView, setItemsPerView] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(getItemsPerView())
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const maxIndex = projects.length - itemsPerView
        return prevIndex >= maxIndex ? 0 : prevIndex + 1
      })
    }, 4000) // Cambia cada 4 segundos

    return () => clearInterval(interval)
  }, [isAutoPlaying, itemsPerView, projects.length])

  const nextSlide = () => {
    const maxIndex = projects.length - itemsPerView
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    const maxIndex = projects.length - itemsPerView
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // El número de puntos debe corresponder al número de posibles posiciones de inicio para una vista completa.
  const maxDots = Math.max(0, projects.length - itemsPerView + 1)

  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        <FadeInSection>
          <div className="max-w-screen-2xl mx-auto">
            {/* Título */}
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-montserrat font-extrabold text-gray-800 mb-4 lg:mb-6">
                Nuestros Proyectos
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 px-4 sm:px-0 max-w-4xl mx-auto">
                Algunos de los trabajos realizados con <span className="font-semibold">calidad y profesionalismo</span>
              </p>
            </div>

            {/* Slider Container */}
            <div
              className="relative mb-8 sm:mb-12 lg:mb-16"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              {/* Slider Wrapper */}
              <div className="overflow-hidden rounded-lg">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
                  }}
                >
                  {projects.map((project) => (
                    <div
                      key={project.id}
                      className="flex-shrink-0 px-2 sm:px-3 lg:px-4"
                      style={{ width: `${100 / itemsPerView}%` }}
                    >
                      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group h-full hover:scale-[1.02]">
                        {/* Imagen */}
                        <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 overflow-hidden">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1536px) 33vw, 25vw"
                          />
                          {/* Overlay con categoría */}
                          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 lg:top-6 lg:left-6">
                            <span className="bg-brand-dark-blue text-white px-2 py-1 sm:px-3 sm:py-1 lg:px-4 lg:py-2 rounded-full text-xs sm:text-sm lg:text-base font-poppins font-semibold">
                              {project.category}
                            </span>
                          </div>
                        </div>

                        {/* Contenido */}
                        <div className="p-4 sm:p-6 lg:p-8">
                          <h3 className="font-poppins font-semibold text-gray-800 text-base sm:text-lg lg:text-xl mb-2 line-clamp-2">
                            {project.title}
                          </h3>
                          <p className="font-poppins text-gray-600 text-xs sm:text-sm lg:text-base">
                            Trabajo realizado con materiales de primera calidad y técnicas profesionales.
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-2 sm:left-4 lg:left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
                aria-label="Proyecto anterior"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-gray-700" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-2 sm:right-4 lg:right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
                aria-label="Proyecto siguiente"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-gray-700" />
              </button>
            </div>

            {/* Dots Indicators */}
            <div className="flex justify-center gap-2 lg:gap-3 mb-8 sm:mb-12 lg:mb-16">
              {Array.from({ length: maxDots }, (_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-brand-dark-blue scale-125" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Ir al grupo de proyectos ${index + 1}`}
                />
              ))}
            </div>

            {/* Auto-play indicator */}
            <div className="flex justify-center items-center gap-2 lg:gap-3 mb-6 lg:mb-8">
              <div
                className={`w-2 h-2 lg:w-3 lg:h-3 rounded-full transition-colors duration-300 ${
                  isAutoPlaying ? "bg-brand-green" : "bg-gray-400"
                }`}
              />
              <span className="text-xs lg:text-sm text-gray-500 font-poppins">
                {isAutoPlaying ? "Reproducción automática" : "Pausado"}
              </span>
            </div>

            {/* Botón Ver Más */}
            <div className="text-center">
              <Link
                href="/proyectos"
                className="inline-flex items-center gap-2 sm:gap-3 lg:gap-4 bg-brand-dark-blue hover:bg-blue-700 text-white font-poppins font-bold py-3 sm:py-4 lg:py-5 px-6 sm:px-8 lg:px-12 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <span className="text-sm sm:text-base lg:text-lg xl:text-xl">Ver más proyectos</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
              </Link>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
