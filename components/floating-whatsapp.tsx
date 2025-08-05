"use client"

import Link from "next/link"
import WhatsAppIcon from "./whatsapp-icon"

export default function FloatingWhatsApp() {
  const whatsappNumber = "5491130849514"
  const whatsappMessage = "Hola, me interesa conocer más sobre sus servicios de gestoría integral."
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      <Link
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366] hover:bg-[#20b358] text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 animate-pulse hover:animate-none"
        aria-label="Contactar por WhatsApp"
      >
        <WhatsAppIcon className="w-6 h-6 sm:w-8 sm:h-8" />
      </Link>
    </div>
  )
}
