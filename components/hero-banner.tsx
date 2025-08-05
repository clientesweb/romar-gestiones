"use client"

import Image from "next/image"

export default function HeroBanner() {
  const scrollToServices = () => {
    const element = document.getElementById("servicios")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="w-full">
      <div
        className="w-full cursor-pointer group relative overflow-hidden"
        onClick={scrollToServices}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault()
            scrollToServices()
          }
        }}
        aria-label="Ir a la sección de servicios"
      >
        <Image
          src="/images/banner-principal-romar-gestiones-oficial.webp"
          alt="RoMar Gestiones - Empresa de Servicios Integrales - Haz clic para ver servicios"
          width={1920}
          height={1080}
          className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
          priority
          sizes="100vw"
        />

        {/* Overlay sutil para indicar que es clickeable */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 sm:px-6 sm:py-3">
            <p className="text-gray-800 font-poppins font-semibold text-sm sm:text-base text-center">
              👆 Haz clic para ver nuestros servicios
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
