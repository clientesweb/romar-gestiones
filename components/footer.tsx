import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-brand-dark-blue text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Image
                src="/images/logo-blanco.webp"
                alt="RoMar Gestiones Logo"
                width={180}
                height={60}
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Empresa líder en gestiones integrales con más de 10 años de experiencia brindando servicios profesionales
              de calidad.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Nuestros Servicios</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/servicios/mantenimiento"
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                >
                  Mantenimiento Edilicio
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/consorcios"
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                >
                  Administración de Consorcios
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/seguros"
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                >
                  Gestión de Seguros
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/inmobiliaria"
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                >
                  Gestoría Inmobiliaria
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/automotor"
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                >
                  Gestoría Automotor
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/nautica"
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                >
                  Gestoría Náutica
                </Link>
              </li>
            </ul>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/proyectos"
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                >
                  Proyectos
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                >
                  Contacto
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                  Términos y Condiciones
                </a>
              </li>
            </ul>
          </div>

          {/* Información de contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-brand-light-blue mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm">Buenos Aires, Argentina</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-brand-light-blue flex-shrink-0" />
                <a
                  href="tel:+541132951164"
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                >
                  +54 11 3295-1164
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-brand-light-blue flex-shrink-0" />
                <a
                  href="mailto:romargestiones@gmail.com"
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                >
                  romargestiones@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-brand-light-blue mt-0.5 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>Lun - Vie: 9:00 - 18:00</p>
                  <p>Sáb: 9:00 - 13:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-600 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2024 RoMar Gestiones. Todos los derechos reservados.</p>
            <p className="text-gray-400 text-sm">Desarrollado con ❤️ para brindar el mejor servicio</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
