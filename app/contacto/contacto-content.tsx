"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

export default function ContactoContent() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    servicio: "",
    mensaje: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simular envío del formulario
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Crear el mensaje para WhatsApp
      const whatsappMessage = `Hola! Me contacto desde el formulario web:

*Nombre:* ${formData.nombre}
*Email:* ${formData.email}
*Teléfono:* ${formData.telefono}
*Servicio de interés:* ${formData.servicio}
*Mensaje:* ${formData.mensaje}

¡Espero su respuesta!`

      const phoneNumber = "541132951164"
      const encodedMessage = encodeURIComponent(whatsappMessage)
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

      // Abrir WhatsApp
      window.open(whatsappUrl, "_blank")

      setSubmitStatus("success")
      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        servicio: "",
        mensaje: "",
      })
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-extrabold text-gray-800 mb-6">
            Contactanos
          </h1>
          <p className="text-lg sm:text-xl font-poppins text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Estamos aquí para ayudarte. Completa el formulario y nos pondremos en contacto contigo a la brevedad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulario */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-montserrat font-bold text-gray-800 mb-6">Envíanos un mensaje</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre completo *
                  </label>
                  <Input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono *
                  </label>
                  <Input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                    placeholder="+54 11 3295-1164"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="servicio" className="block text-sm font-medium text-gray-700 mb-2">
                  Servicio de interés
                </label>
                <select
                  id="servicio"
                  name="servicio"
                  value={formData.servicio}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-light-blue focus:border-brand-light-blue"
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="Mantenimiento Edilicio">Mantenimiento Edilicio</option>
                  <option value="Administración de Consorcios">Administración de Consorcios</option>
                  <option value="Gestión de Seguros">Gestión de Seguros</option>
                  <option value="Gestoría Inmobiliaria">Gestoría Inmobiliaria</option>
                  <option value="Gestoría Automotor">Gestoría Automotor</option>
                  <option value="Gestoría Náutica">Gestoría Náutica</option>
                  <option value="Consulta General">Consulta General</option>
                </select>
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje *
                </label>
                <Textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full"
                  placeholder="Cuéntanos cómo podemos ayudarte..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-dark-blue hover:bg-brand-light-blue text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Enviando...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <Send className="w-5 h-5 mr-2" />
                    Enviar mensaje
                  </div>
                )}
              </Button>

              {submitStatus === "success" && (
                <div className="bg-green-50 border border-green-200 rounded-md p-4">
                  <p className="text-green-800 text-sm">
                    ¡Mensaje enviado correctamente! Te redirigimos a WhatsApp para completar el contacto.
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="bg-red-50 border border-red-200 rounded-md p-4">
                  <p className="text-red-800 text-sm">
                    Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.
                  </p>
                </div>
              )}
            </form>
          </div>

          {/* Información de contacto */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-montserrat font-bold text-gray-800 mb-6">Información de contacto</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-light-blue/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-brand-dark-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Ubicación</h3>
                    <p className="text-gray-600">Buenos Aires, Argentina</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-brand-light-blue/10 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-brand-dark-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Teléfono</h3>
                    <a
                      href="tel:+541132951164"
                      className="text-brand-dark-blue hover:text-brand-light-blue transition-colors duration-300"
                    >
                      +54 11 3295-1164
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-brand-light-blue/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-brand-dark-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                    <a
                      href="mailto:romargestiones@gmail.com"
                      className="text-brand-dark-blue hover:text-brand-light-blue transition-colors duration-300"
                    >
                      romargestiones@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-brand-light-blue/10 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-brand-dark-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Horarios de atención</h3>
                    <div className="text-gray-600">
                      <p>Lunes a Viernes: 9:00 - 18:00</p>
                      <p>Sábados: 9:00 - 13:00</p>
                      <p>Domingos: Cerrado</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Llamada a la acción adicional */}
            <div className="bg-gradient-to-r from-brand-dark-blue to-brand-light-blue rounded-lg p-8 text-white">
              <h3 className="text-xl font-montserrat font-bold mb-4">¿Necesitas atención inmediata?</h3>
              <p className="mb-6 text-white/90">Contáctanos directamente por WhatsApp para una respuesta más rápida.</p>
              <Button
                onClick={() => {
                  const phoneNumber = "541132951164"
                  const message = encodeURIComponent("Hola! Necesito atención inmediata. ¿Podrían ayudarme?")
                  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
                  window.open(whatsappUrl, "_blank")
                }}
                className="bg-white text-brand-dark-blue hover:bg-gray-100 font-semibold py-2 px-6 rounded-lg transition-all duration-300 hover:scale-105"
              >
                Contactar por WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
