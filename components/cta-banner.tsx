import Link from "next/link"
import WhatsAppIcon from "./whatsapp-icon"

export default function CTABanner() {
  const whatsappNumber = "5491130849514"
  const whatsappMessage = "Hola, me interesa conocer más sobre sus servicios de gestoría integral."
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <section className="bg-brand-dark-blue py-3 sm:py-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          {/* Texto descriptivo */}
          <div className="text-center sm:text-left">
            <h2 className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-montserrat font-extrabold mb-1">
              Gestiones rápidas, seguras y confiables
            </h2>
            <p className="text-white/90 text-xs sm:text-sm font-poppins">
              <span className="font-semibold">Contactanos ahora</span> y obtén asesoramiento personalizado
            </p>
          </div>

          {/* Botón de WhatsApp */}
          <div className="flex-shrink-0">
            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-brand-green hover:bg-brand-green hover:text-white font-poppins font-bold py-2 sm:py-3 px-3 sm:px-4 rounded-md shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-xs sm:text-sm">Contáctanos</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
