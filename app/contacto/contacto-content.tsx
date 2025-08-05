"use client"

import type React from "react"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import FloatingWhatsApp from "@/components/floating-whatsapp"
import { Mail, MapPin, Clock, CheckCircle } from "lucide-react"
import WhatsAppIcon from "@/components/whatsapp-icon"
import Image from "next/image"
import Link from "next/link"

interface FormData {
  nombre: string
  email: string
  telefono: string
  servicio: string
  mensaje: string
}

interface FormErrors {
  nombre?: string
  email?: string
  telefono?: string
  servicio?: string
  mensaje?: string
}

export default function ContactoPageContent() {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    email: "",
    telefono: "",
    servicio: "",
    mensaje: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const whatsappNumber = "5491130849514"
  const whatsappMessage = "Hola, me interesa contactar con RoMar Gestiones para una consulta."
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  const servicios = [
    "Mantenimiento Integral",
    "Administración de Consorcios",
    "Gestoría Inmobiliaria",
    "Gestoría Automotor",
    "Gestoría Náutica",
    "Trámites Notariales",
    "Otro",
  ]

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // Validar nombre
    if (!formData.nombre.trim()) {
      newErrors.nombre = "El nombre es requerido"
    } else if (formData.nombre.trim().length < 2) {
      newErrors.nombre = "El nombre debe tener al menos 2 caracteres"
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido"
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "El email no es válido"
    }

    // Validar teléfono
    const phoneRegex = /^[\d\s\-+$$$$]{8,}$/
    if (!formData.telefono.trim()) {
      newErrors.telefono = "El teléfono es requerido"
    } else if (!phoneRegex.test(formData.telefono)) {
      newErrors.telefono = "El teléfono no es válido"
    }

    // Validar servicio
    if (!formData.servicio) {
      newErrors.servicio = "Selecciona un servicio"
    }

    // Validar mensaje
    if (!formData.mensaje.trim()) {
      newErrors.mensaje = "El mensaje es requerido"
    } else if (formData.mensaje.trim().length < 10) {
      newErrors.mensaje = "El mensaje debe tener al menos 10 caracteres"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Limpiar error del campo cuando el usuario empiece a escribir
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const createWhatsAppMessage = (data: FormData): string => {
    const currentDate = new Date().toLocaleDateString("es-AR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })

    return `🏢 *NUEVA CONSULTA - ROMAR GESTIONES*

📅 *Fecha:* ${currentDate}

👤 *DATOS DEL CLIENTE:*
• *Nombre:* ${data.nombre}
• *Email:* ${data.email}
• *Teléfono:* ${data.telefono}

🔧 *SERVICIO DE INTERÉS:*
• ${data.servicio}

💬 *MENSAJE:*
${data.mensaje}

---
✅ *Consulta enviada desde:* romar-gestiones.vercel.app
📞 *Responder por WhatsApp para continuar la conversación*

#RoMarGestiones #ConsultaWeb #GestoriaIntegral`
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Crear el mensaje de WhatsApp
      const whatsappMessage = createWhatsAppMessage(formData)
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

      // Simular un pequeño delay para mejor UX
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Abrir WhatsApp con el mensaje
      window.open(whatsappUrl, "_blank")

      // Marcar como enviado
      setIsSubmitted(true)
      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        servicio: "",
        mensaje: "",
      })
    } catch (error) {
      console.error("Error al procesar formulario:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const quickWhatsAppUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hola, me interesa conocer más sobre sus servicios de gestoría integral.",
  )}`

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="flex items-center justify-center py-16 sm:py-20">
          <div className="max-w-md mx-auto text-center p-6 sm:p-8 bg-white rounded-lg shadow-lg">
            <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-brand-green mx-auto mb-4" />
            <h2 className="text-xl sm:text-2xl font-montserrat font-extrabold text-gray-800 mb-4">
              ¡Consulta Enviada!
            </h2>
            <p className="font-poppins text-gray-600 mb-6">
              Tu consulta se ha enviado correctamente a nuestro WhatsApp. Te responderemos a la brevedad.
            </p>
            <div className="space-y-3">
              <a
                href={quickWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-green hover:bg-[#20b358] text-white font-poppins font-bold py-3 px-6 rounded-lg transition-colors duration-300"
              >
                <WhatsAppIcon className="w-5 h-5" />
                <span className="text-sm">Continuar en WhatsApp</span>
              </a>
              <div>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-brand-dark-blue hover:text-blue-700 font-poppins text-sm underline"
                >
                  Enviar otra consulta
                </button>
              </div>
            </div>
          </div>
        </div>
        <FloatingWhatsApp />
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section con imagen de banner */}
      <section className="relative py-12 sm:py-16 lg:py-20 xl:py-24 overflow-hidden">
        {/* Imagen de fondo */}
        <div className="absolute inset-0">
          <Image
            src="/images/contacto-banner.webp"
            alt="Atención al Cliente - RoMar Gestiones"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay de color de marca */}
          <div className="absolute inset-0 bg-brand-dark-blue/70"></div>
        </div>

        {/* Contenido */}
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-montserrat font-extrabold mb-6 lg:mb-8">
              Contactanos
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed mb-8 lg:mb-12">
              Estamos aquí para ayudarte con todas tus <span className="font-semibold">gestiones y consultas</span>
            </p>
            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-brand-green hover:bg-[#20b358] text-white font-poppins font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <WhatsAppIcon className="w-6 h-6" />
              <span>Contactar por WhatsApp</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Contenido principal */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 xl:grid-cols-5 gap-8 sm:gap-12 lg:gap-16">
            {/* Información de contacto */}
            <div className="xl:col-span-2">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-montserrat font-extrabold text-gray-800 mb-6 sm:mb-8 lg:mb-12">
                Información de Contacto
              </h2>

              <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                {/* WhatsApp */}
                <div className="flex items-center gap-4 lg:gap-6 p-4 lg:p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.01]">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-brand-green rounded-full flex items-center justify-center flex-shrink-0">
                    <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-gray-800 text-base sm:text-lg lg:text-xl">
                      WhatsApp
                    </h3>
                    <a
                      href={quickWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-poppins text-brand-green hover:text-[#20b358] transition-colors duration-300 text-sm sm:text-base lg:text-lg"
                    >
                      +54 9 11 3084-9514
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4 lg:gap-6 p-4 lg:p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.01]">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-brand-dark-blue rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-gray-800 text-base sm:text-lg lg:text-xl">Email</h3>
                    <a
                      href="mailto:info@romargestioness.com.ar"
                      className="font-poppins text-brand-dark-blue hover:text-blue-700 transition-colors duration-300 text-sm sm:text-base lg:text-lg break-all"
                    >
                      info@romargestioness.com.ar
                    </a>
                  </div>
                </div>

                {/* Ubicación */}
                <div className="flex items-center gap-4 lg:gap-6 p-4 lg:p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.01]">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-brand-dark-blue rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-gray-800 text-base sm:text-lg lg:text-xl">
                      Ubicación
                    </h3>
                    <p className="font-poppins text-gray-600 text-sm sm:text-base lg:text-lg">
                      Buenos Aires, Argentina
                    </p>
                  </div>
                </div>

                {/* Horarios */}
                <div className="flex items-center gap-4 lg:gap-6 p-4 lg:p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.01]">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-brand-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-gray-800 text-base sm:text-lg lg:text-xl">
                      Horarios de Atención
                    </h3>
                    <p className="font-poppins text-gray-600 text-sm sm:text-base lg:text-lg">
                      Lunes a Viernes: 9:00 - 18:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulario */}
            <div className="xl:col-span-3">
              <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 lg:p-12">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-montserrat font-extrabold text-gray-800 mb-6 sm:mb-8 lg:mb-12">
                  Envíanos un Mensaje
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 lg:space-y-8">
                  {/* Nombre */}
                  <div>
                    <label
                      htmlFor="nombre"
                      className="block font-poppins font-semibold text-gray-700 mb-2 lg:mb-3 text-sm sm:text-base lg:text-lg"
                    >
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 sm:px-4 sm:py-3 lg:px-6 lg:py-4 border rounded-lg font-poppins focus:outline-none focus:ring-2 transition-colors duration-300 text-sm sm:text-base lg:text-lg ${
                        errors.nombre
                          ? "border-destructive focus:ring-destructive"
                          : "border-gray-300 focus:ring-brand-dark-blue focus:border-brand-dark-blue"
                      }`}
                      placeholder="Tu nombre completo"
                    />
                    {errors.nombre && (
                      <p className="mt-1 text-xs sm:text-sm lg:text-base font-poppins text-destructive">
                        {errors.nombre}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block font-poppins font-semibold text-gray-700 mb-2 lg:mb-3 text-sm sm:text-base lg:text-lg"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 sm:px-4 sm:py-3 lg:px-6 lg:py-4 border rounded-lg font-poppins focus:outline-none focus:ring-2 transition-colors duration-300 text-sm sm:text-base lg:text-lg ${
                        errors.email
                          ? "border-destructive focus:ring-destructive"
                          : "border-gray-300 focus:ring-brand-dark-blue focus:border-brand-dark-blue"
                      }`}
                      placeholder="tu@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs sm:text-sm lg:text-base font-poppins text-destructive">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Teléfono */}
                  <div>
                    <label
                      htmlFor="telefono"
                      className="block font-poppins font-semibold text-gray-700 mb-2 lg:mb-3 text-sm sm:text-base lg:text-lg"
                    >
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 sm:px-4 sm:py-3 lg:px-6 lg:py-4 border rounded-lg font-poppins focus:outline-none focus:ring-2 transition-colors duration-300 text-sm sm:text-base lg:text-lg ${
                        errors.telefono
                          ? "border-destructive focus:ring-destructive"
                          : "border-gray-300 focus:ring-brand-dark-blue focus:border-brand-dark-blue"
                      }`}
                      placeholder="11 1234-5678"
                    />
                    {errors.telefono && (
                      <p className="mt-1 text-xs sm:text-sm lg:text-base font-poppins text-destructive">
                        {errors.telefono}
                      </p>
                    )}
                  </div>

                  {/* Servicio */}
                  <div>
                    <label
                      htmlFor="servicio"
                      className="block font-poppins font-semibold text-gray-700 mb-2 lg:mb-3 text-sm sm:text-base lg:text-lg"
                    >
                      Servicio de Interés *
                    </label>
                    <select
                      id="servicio"
                      name="servicio"
                      value={formData.servicio}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 sm:px-4 sm:py-3 lg:px-6 lg:py-4 border rounded-lg font-poppins focus:outline-none focus:ring-2 transition-colors duration-300 text-sm sm:text-base lg:text-lg ${
                        errors.servicio
                          ? "border-destructive focus:ring-destructive"
                          : "border-gray-300 focus:ring-brand-dark-blue focus:border-brand-dark-blue"
                      }`}
                    >
                      <option value="">Selecciona un servicio</option>
                      {servicios.map((servicio) => (
                        <option key={servicio} value={servicio}>
                          {servicio}
                        </option>
                      ))}
                    </select>
                    {errors.servicio && (
                      <p className="mt-1 text-xs sm:text-sm lg:text-base font-poppins text-destructive">
                        {errors.servicio}
                      </p>
                    )}
                  </div>

                  {/* Mensaje */}
                  <div>
                    <label
                      htmlFor="mensaje"
                      className="block font-poppins font-semibold text-gray-700 mb-2 lg:mb-3 text-sm sm:text-base lg:text-lg"
                    >
                      Mensaje *
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleInputChange}
                      rows={4}
                      className={`w-full px-3 py-2 sm:px-4 sm:py-3 lg:px-6 lg:py-4 border rounded-lg font-poppins focus:outline-none focus:ring-2 transition-colors duration-300 resize-vertical text-sm sm:text-base lg:text-lg ${
                        errors.mensaje
                          ? "border-destructive focus:ring-destructive"
                          : "border-gray-300 focus:ring-brand-dark-blue focus:border-brand-dark-blue"
                      }`}
                      placeholder="Cuéntanos sobre tu consulta o proyecto..."
                    />
                    {errors.mensaje && (
                      <p className="mt-1 text-xs sm:text-sm lg:text-base font-poppins text-destructive">
                        {errors.mensaje}
                      </p>
                    )}
                  </div>

                  {/* Botón enviar */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-brand-green hover:bg-[#20b358] disabled:bg-gray-400 text-white font-poppins font-bold py-3 sm:py-4 lg:py-5 px-4 sm:px-6 lg:px-8 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 sm:gap-3 lg:gap-4 text-sm sm:text-base lg:text-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Enviando a WhatsApp...
                      </>
                    ) : (
                      <>
                        <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                        Enviar por WhatsApp
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FloatingWhatsApp />
      <Footer />
    </div>
  )
}
