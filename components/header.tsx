"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { ChevronDown } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    setIsServicesOpen(false)
  }

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen)
  }

  const scrollToSection = (sectionId: string) => {
    if (pathname !== "/") {
      // Si no estamos en la página principal, navegar primero
      window.location.href = `/#${sectionId}`
    } else {
      // Si estamos en la página principal, hacer scroll
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
    closeMenu()
  }

  const serviciosLinks = [
    { name: "Mantenimiento", href: "/servicios/mantenimiento" },
    { name: "Administración de Consorcios", href: "/servicios/consorcios" },
    { name: "Seguros", href: "/servicios/seguros" },
    { name: "Gestoría Automotor", href: "/servicios/automotor" },
    { name: "Gestoría Náutica", href: "/servicios/nautica" },
    { name: "Gestoría Inmobiliaria", href: "/servicios/inmobiliaria" },
  ]

  return (
    <>
      <header className="bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100 sticky top-0 z-50 h-18 sm:h-20 md:h-22 lg:h-24 xl:h-26">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">
            {/* Desktop Navigation - Split Layout */}
            <div className="hidden lg:flex items-center justify-between w-full">
              {/* Left Navigation */}
              <nav className="flex items-center space-x-6 xl:space-x-8">
                <button
                  onClick={() => scrollToSection("nosotros")}
                  className="relative text-gray-800 hover:text-brand-dark-blue font-semibold text-base xl:text-lg transition-all duration-300 group"
                >
                  Nosotros
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-dark-blue to-brand-green transition-all duration-300 group-hover:w-full"></span>
                </button>

                {/* Dropdown de Servicios */}
                <div className="relative">
                  <button
                    onClick={toggleServices}
                    className="relative flex items-center gap-1 text-gray-800 hover:text-brand-dark-blue font-semibold text-base xl:text-lg transition-all duration-300 group"
                  >
                    Servicios
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`}
                    />
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-dark-blue to-brand-green transition-all duration-300 group-hover:w-full"></span>
                  </button>

                  {/* Dropdown Menu */}
                  <div
                    className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 transition-all duration-300 ${
                      isServicesOpen
                        ? "opacity-100 visible transform translate-y-0"
                        : "opacity-0 invisible transform -translate-y-2"
                    }`}
                  >
                    <div className="py-2">
                      {serviciosLinks.map((servicio, index) => (
                        <Link
                          key={index}
                          href={servicio.href}
                          onClick={closeMenu}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-brand-dark-blue transition-colors duration-200"
                        >
                          {servicio.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </nav>

              {/* Centered Logo */}
              <div className="flex-shrink-0">
                <Link href="/" className="block">
                  <Image
                    src="/images/logo-romar-gestiones.png"
                    alt="RoMar Gestiones"
                    width={280}
                    height={100}
                    className="h-16 sm:h-18 md:h-20 lg:h-22 xl:h-24 w-auto transition-transform duration-300 hover:scale-105"
                    priority
                  />
                </Link>
              </div>

              {/* Right Navigation */}
              <nav className="flex items-center space-x-6 xl:space-x-8">
                <Link
                  href="/proyectos"
                  className="relative text-gray-800 hover:text-brand-dark-blue font-semibold text-base xl:text-lg transition-all duration-300 group"
                >
                  Proyectos
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-dark-blue to-brand-green transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link
                  href="/contacto"
                  className="relative text-gray-800 hover:text-brand-dark-blue font-semibold text-base xl:text-lg transition-all duration-300 group"
                >
                  Contacto
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-dark-blue to-brand-green transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </nav>
            </div>

            {/* Mobile Logo */}
            <div className="flex-shrink-0 z-50 lg:hidden">
              <Link href="/" className="block">
                <Image
                  src="/images/logo-romar-gestiones.png"
                  alt="RoMar Gestiones"
                  width={200}
                  height={70}
                  className="h-10 sm:h-12 md:h-14 w-auto transition-transform duration-300 hover:scale-105"
                  priority
                />
              </Link>
            </div>

            {/* Modern Hamburger Menu Button */}
            <div className="lg:hidden z-50">
              <button onClick={toggleMenu} className="relative w-8 h-8 focus:outline-none" aria-label="Toggle menu">
                <div className="absolute inset-0 flex flex-col justify-center items-center">
                  <span
                    className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
                      isMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-1.5"
                    }`}
                  ></span>
                  <span
                    className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
                      isMenuOpen ? "opacity-0" : "opacity-100"
                    }`}
                  ></span>
                  <span
                    className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
                      isMenuOpen ? "-rotate-45 -translate-y-0.5" : "translate-y-1.5"
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Services Dropdown Overlay */}
        {isServicesOpen && (
          <div className="fixed inset-0 z-40 lg:block hidden" onClick={() => setIsServicesOpen(false)} />
        )}
      </header>

      {/* Modern Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] transition-opacity duration-300 lg:hidden ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeMenu}
      >
        <div
          className={`fixed top-0 right-0 h-full w-72 sm:w-80 bg-white shadow-2xl transform transition-transform duration-300 z-[70] ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col h-full pt-20 sm:pt-24 px-6 sm:px-8">
            <nav className="flex flex-col space-y-6 sm:space-y-8">
              <button
                onClick={() => scrollToSection("nosotros")}
                className="text-xl sm:text-2xl font-semibold text-gray-800 hover:text-brand-dark-blue transition-colors duration-300 border-b border-gray-100 pb-3 sm:pb-4 text-left"
              >
                Nosotros
              </button>

              {/* Mobile Services Dropdown */}
              <div>
                <button
                  onClick={toggleServices}
                  className="flex items-center justify-between w-full text-xl sm:text-2xl font-semibold text-gray-800 hover:text-brand-dark-blue transition-colors duration-300 border-b border-gray-100 pb-3 sm:pb-4 text-left"
                >
                  Servicios
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isServicesOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pl-4 pt-3 space-y-3">
                    {serviciosLinks.map((servicio, index) => (
                      <Link
                        key={index}
                        href={servicio.href}
                        onClick={closeMenu}
                        className="block text-base font-medium text-gray-600 hover:text-brand-dark-blue transition-colors duration-300 py-2"
                      >
                        {servicio.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                href="/proyectos"
                onClick={closeMenu}
                className="text-xl sm:text-2xl font-semibold text-gray-800 hover:text-brand-dark-blue transition-colors duration-300 border-b border-gray-100 pb-3 sm:pb-4"
              >
                Proyectos
              </Link>
              <Link
                href="/contacto"
                onClick={closeMenu}
                className="text-xl sm:text-2xl font-semibold text-gray-800 hover:text-brand-dark-blue transition-colors duration-300 border-b border-gray-100 pb-3 sm:pb-4"
              >
                Contacto
              </Link>
            </nav>

            <div className="mt-auto pb-6 sm:pb-8">
              <div className="text-center text-gray-500 text-sm">
                <p>RoMar Gestiones</p>
                <p>Gestoría Integral</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
