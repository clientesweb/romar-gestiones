"use client"

import { useEffect, useState } from "react"
import { Star } from "lucide-react"
import FadeInSection from "./fade-in-section"

export default function ReviewsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const reviews = [
    {
      name: "María González",
      initials: "MG",
      rating: 5,
      text: "Excelente servicio. Resolvieron todos mis trámites de manera rápida y eficiente. Muy recomendable.",
      date: "hace 2 semanas",
      color: "bg-pink-500",
    },
    {
      name: "Carlos Rodríguez",
      initials: "CR",
      rating: 5,
      text: "Profesionales muy capacitados. Me ayudaron con la administración de mi consorcio sin problemas.",
      date: "hace 1 mes",
      color: "bg-blue-500",
    },
    {
      name: "Ana Martínez",
      initials: "AM",
      rating: 5,
      text: "Gestión inmobiliaria impecable. Atención personalizada y resultados garantizados.",
      date: "hace 3 semanas",
      color: "bg-green-500",
    },
    {
      name: "Roberto Silva",
      initials: "RS",
      rating: 5,
      text: "Muy conformes con el mantenimiento edilicio. Trabajo prolijo y en tiempo récord.",
      date: "hace 1 semana",
      color: "bg-purple-500",
    },
    {
      name: "Laura Fernández",
      initials: "LF",
      rating: 5,
      text: "Excelente atención al cliente. Resolvieron mis trámites automotor sin complicaciones.",
      date: "hace 2 meses",
      color: "bg-orange-500",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [reviews.length])

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
      />
    ))
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        <FadeInSection>
          <div className="max-w-7xl mx-auto">
            {/* Título */}
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-montserrat font-extrabold text-gray-800 mb-4 lg:mb-6">
                Lo que dicen nuestros clientes
              </h2>
              <p className="text-base sm:text-lg lg:text-xl font-poppins text-gray-600 px-4 sm:px-0 max-w-4xl mx-auto">
                Reseñas reales de clientes satisfechos
              </p>
            </div>

            {/* Slider Container */}
            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {reviews.map((review, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-2 sm:px-4 lg:px-8">
                    <div className="bg-gray-50 rounded-lg p-6 sm:p-8 lg:p-12 shadow-lg max-w-4xl mx-auto">
                      {/* Header con foto, nombre y estrellas */}
                      <div className="flex items-center gap-4 sm:gap-6 lg:gap-8 mb-6 lg:mb-8">
                        {/* Foto con iniciales */}
                        <div
                          className={`w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 ${review.color} rounded-full flex items-center justify-center flex-shrink-0`}
                        >
                          <span className="text-white font-poppins font-semibold text-sm sm:text-lg lg:text-xl">
                            {review.initials}
                          </span>
                        </div>

                        {/* Nombre y fecha */}
                        <div className="flex-1 min-w-0">
                          <h3 className="font-poppins font-semibold text-gray-800 text-lg sm:text-xl lg:text-2xl truncate">
                            {review.name}
                          </h3>
                          <p className="font-poppins text-sm sm:text-base lg:text-lg text-gray-500">{review.date}</p>
                        </div>

                        {/* Estrellas */}
                        <div className="flex gap-1 lg:gap-2">{renderStars(review.rating)}</div>
                      </div>

                      {/* Texto de la reseña */}
                      <p className="font-poppins text-gray-700 leading-relaxed text-center italic mb-6 lg:mb-8 text-base sm:text-lg lg:text-xl xl:text-2xl">
                        "{review.text}"
                      </p>

                      {/* Logo de Google simulado */}
                      <div className="flex items-center justify-center pt-6 lg:pt-8 border-t border-gray-200">
                        <div className="flex items-center gap-2 lg:gap-3">
                          <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-brand-dark-blue rounded-sm flex items-center justify-center">
                            <span className="text-white text-sm sm:text-base lg:text-lg font-bold">G</span>
                          </div>
                          <span className="font-poppins text-sm sm:text-base lg:text-lg text-gray-500">Google</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Indicadores */}
              <div className="flex justify-center mt-8 sm:mt-12 lg:mt-16 gap-2 lg:gap-3">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 rounded-full transition-colors duration-300 ${
                      index === currentIndex ? "bg-brand-dark-blue" : "bg-gray-300"
                    }`}
                    aria-label={`Ir a reseña ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
