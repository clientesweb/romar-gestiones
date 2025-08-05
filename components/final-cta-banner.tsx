import Link from "next/link"
import WhatsAppIcon from "./whatsapp-icon"
import Image from "next/image"

export default function FinalCTABanner() {
  const whatsappNumber = "5491130849514"
  const whatsappMessage =
    "Hola, estoy listo para trabajar con RoMar Gestiones. Me interesa conocer más sobre sus servicios."
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <section className="relative py-8 sm:py-12 lg:py-16 overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <Image
          src="/images/cta-banner-background.webp"
          alt="Comenzamos - RoMar Gestiones"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay de color de marca con menor opacidad */}
        <div className="absolute inset-0 bg-brand-dark-blue/70"></div>
      </div>

      {/* Contenido */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-montserrat font-extrabold mb-3 sm:mb-4 px-4 sm:px-0 text-white">
            Comenzamos
          </h2>
          <p className="text-white/90 text-base sm:text-lg md:text-xl font-poppins mb-6 sm:mb-8 leading-relaxed px-4 sm:px-0">
            <span className="font-semibold">Contactanos hoy</span> y descubre cómo podemos ayudarte con todas tus
            gestiones
          </p>

          <div className="flex justify-center">
            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 sm:gap-3 bg-white text-brand-dark-blue hover:bg-gray-100 font-poppins font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-sm sm:text-base">Contactar por WhatsApp</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
