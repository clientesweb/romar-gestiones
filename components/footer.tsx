"use client"

import Link from "next/link"
import Image from "next/image"
import { MapPin, Mail, Clock, Instagram, Facebook } from 'lucide-react'
import WhatsAppIcon from "./whatsapp-icon"

export default function Footer() {
  const whatsappNumber = "541132951164"
  const whatsappMessage = "Hola, me interesa conocer más sobre sus servicios de gestoría integral."
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <footer className="bg-[#1e3a5f] text-white">
      {/* Sección principal del footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Logo y descripción */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4 sm:mb-6">
              <Image
                src="/images/logo-romar-gestiones.png"
                alt="RoMar Gestiones"
                width={180}
                height={60}
                className="h-10 sm:h-12 w-auto"
              />
            </div>
            <p className="font-poppins text-white/90 text-sm leading-relaxed mb-4 sm:mb-6">
              <span className="font-semibold">Gestoría integral</span> con profesionales matriculados y experimentados.
              Soluciones personalizadas para todas tus necesidades.
            </p>

            {/* Redes sociales */}
            <div className="flex gap-3 sm:gap-4">
              <Link
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-[#25D366] hover:bg-[#20b358] rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </Link>
              <Link
                href="https://instagram.com/romargestioness"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full flex items-center justify-center transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </Link>
              <Link
                href="https://facebook.com/romargestioness"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-[#1877F2] hover:bg-[#166FE5] rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </Link>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="font-montserrat font-extrabold text-base sm:text-lg mb-4 sm:mb-6">Servicios</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <button
                  onClick={() => {
                    if (window.location.pathname !== "/") {
                      window.location.href = "/#servicios"
                    } else {
                      document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                  className="font-poppins text-white/90 hover:text-white text-sm transition-colors duration-300 text-left"
                >
                  Mantenimiento Integral
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    if (window.location.pathname !== "/") {
                      window.location.href = "/#servicios"
                    } else {
                      document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                  className="font-poppins text-white/90 hover:text-white text-sm transition-colors duration-300 text-left"
                >
                  Administración de Consorcios
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    if (window.location.pathname !== "/") {
                      window.location.href = "/#servicios"
                    } else {
                      document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                  className="font-poppins text-white/90 hover:text-white text-sm transition-colors duration-300 text-left"
                >
                  Gestoría Inmobiliaria
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    if (window.location.pathname !== "/") {
                      window.location.href = "/#servicios"
                    } else {
                      document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                  className="font-poppins text-white/90 hover:text-white text-sm transition-colors duration-300 text-left"
                >
                  Gestoría Automotor
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    if (window.location.pathname !== "/") {
                      window.location.href = "/#servicios"
                    } else {
                      document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                  className="font-poppins text-white/90 hover:text-white text-sm transition-colors duration-300 text-left"
                >
                  Gestoría Náutica
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    if (window.location.pathname !== "/") {
                      window.location.href = "/#servicios"
                    } else {
                      document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                  className="font-poppins text-white/90 hover:text-white text-sm transition-colors duration-300 text-left"
                >
                  Trámites Notariales
                </button>
              </li>
            </ul>
          </div>

          {/* Enlaces útiles */}
          <div>
            <h3 className="font-montserrat font-extrabold text-base sm:text-lg mb-4 sm:mb-6">Enlaces</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <button
                  onClick={() => {
                    if (window.location.pathname !== "/") {
                      window.location.href = "/#nosotros"
                    } else {
                      document.getElementById("nosotros")?.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                  className="font-poppins text-white/90 hover:text-white text-sm transition-colors duration-300 text-left"
                >
                  Sobre Nosotros
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    if (window.location.pathname !== "/") {
                      window.location.href = "/#servicios"
                    } else {
                      document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                  className="font-poppins text-white/90 hover:text-white text-sm transition-colors duration-300 text-left"
                >
                  Nuestros Servicios
                </button>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="font-poppins text-white/90 hover:text-white text-sm transition-colors duration-300"
                >
                  Contacto
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="font-poppins text-white/90 hover:text-white text-sm transition-colors duration-300"
                >
                  Solicitar Presupuesto
                </Link>
              </li>
              <li>
                <Link
                  href="/proyectos"
                  className="font-poppins text-white/90 hover:text-white text-sm transition-colors duration-300"
                >
                  Nuestros Proyectos
                </Link>
              </li>
            </ul>
          </div>

          {/* Información de contacto */}
          <div>
            <h3 className="font-montserrat font-extrabold text-base sm:text-lg mb-4 sm:mb-6">Contacto</h3>
            <div className="space-y-3 sm:space-y-4">
              {/* WhatsApp */}
              <div className="flex items-center gap-3">
                <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#25D366] flex-shrink-0" />
                <div>
                  <p className="font-poppins text-white/90 text-xs sm:text-sm">WhatsApp</p>
                  <Link
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-poppins font-semibold text-white hover:text-[#25D366] transition-colors duration-300 text-sm"
                  >
                    +54 9 11 3084-9514
                  </Link>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="font-poppins text-white/90 text-xs sm:text-sm">Email</p>
                  <Link
                    href="mailto:gestión inmobiliaria.romargestiones@gmail.com"
                    className="font-poppins font-semibold text-white hover:text-blue-400 transition-colors duration-300 text-sm break-all"
                  >
                    gestión inmobiliaria.romargestiones@gmail.com
                  </Link>
                </div>
              </div>

              {/* Ubicación */}
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 flex-shrink-0" />
                <div>
                  <p className="font-poppins text-white/90 text-xs sm:text-sm">Ubicación</p>
                  <p className="font-poppins font-semibold text-white text-sm">Buenos Aires, Argentina</p>
                </div>
              </div>

              {/* Horarios */}
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 flex-shrink-0" />
                <div>
                  <p className="font-poppins text-white/90 text-xs sm:text-sm">Horarios</p>
                  <p className="font-poppins font-semibold text-white text-sm">Lun - Vie: 9:00 - 18:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Línea divisoria */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <p className="font-poppins text-white/80 text-xs sm:text-sm text-center sm:text-left">
                © 2024 RoMar Gestiones. Todos los derechos reservados.
              </p>
              <p className="font-poppins text-white/60 text-xs text-center sm:text-left">
                Desarrollado por{" "}
                <Link
                  href="https://dualitydomain.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-300 font-semibold"
                >
                  Duality Domain
                </Link>
              </p>
            </div>
            <div className="flex gap-4 sm:gap-6">
              <Link
                href="/privacidad"
                className="font-poppins text-white/80 hover:text-white text-xs sm:text-sm transition-colors duration-300"
              >
                Política de Privacidad
              </Link>
              <Link
                href="/terminos"
                className="font-poppins text-white/80 hover:text-white text-xs sm:text-sm transition-colors duration-300"
              >
                Términos y Condiciones
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
