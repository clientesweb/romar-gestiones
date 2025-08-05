"use client"

import { useEffect, useState } from "react"
import { ChevronRight } from "lucide-react"

export default function HeaderAnnouncement() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const announcements = [
    {
      id: 1,
      text: "🎉 Consulta gratuita para nuevos clientes - Contactanos ahora",
      highlight: "Consulta gratuita",
    },
    {
      id: 2,
      text: "⚡ Servicios de emergencia 24/7 disponibles - Llamanos",
      highlight: "24/7 disponibles",
    },
    {
      id: 3,
      text: "🏆 +500 clientes satisfechos nos respaldan - Únete a ellos",
      highlight: "+500 clientes satisfechos",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % announcements.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [announcements.length])

  const scrollToServices = () => {
    if (window.location.pathname !== "/") {
      window.location.href = "/#servicios"
    } else {
      const element = document.getElementById("servicios")
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <div className="bg-brand-dark-blue text-white py-2 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative h-6 sm:h-7">
          <div
            className="flex transition-transform duration-500 ease-in-out absolute inset-0"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {announcements.map((announcement, index) => (
              <div
                key={announcement.id}
                className="w-full flex-shrink-0 flex items-center justify-center cursor-pointer group"
                onClick={scrollToServices}
              >
                <div className="flex items-center gap-2 text-center">
                  <span className="font-poppins text-xs sm:text-sm font-medium">{announcement.text}</span>
                  <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicadores */}
        <div className="flex justify-center mt-1 gap-1">
          {announcements.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-white" : "bg-white/50"
              }`}
              aria-label={`Ir a anuncio ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
