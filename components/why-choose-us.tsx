"use client"

import { useState, useEffect } from "react"
import { Star, Users, Award, Clock, Shield, ChevronDown, ChevronUp } from "lucide-react"
import FadeInSection from "./fade-in-section"

export default function WhyChooseUs() {
  const [currentStat, setCurrentStat] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const stats = [
    { number: "500+", label: "Clientes Satisfechos", icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" /> },
    { number: "15+", label: "Años de Experiencia", icon: <Award className="w-6 h-6 sm:w-8 sm:h-8" /> },
    { number: "24/7", label: "Atención Disponible", icon: <Clock className="w-6 h-6 sm:w-8 sm:h-8" /> },
    { number: "100%", label: "Profesionales Matriculados", icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8" /> },
  ]

  const faqs = [
    {
      question: "¿Qué tipo de servicios de gestoría ofrecen?",
      answer:
        "Ofrecemos una gestoría integral que incluye mantenimiento edilicio, administración de consorcios, gestoría inmobiliaria, automotor, náutica y trámites notariales. Cubrimos todas tus necesidades en un solo lugar.",
    },
    {
      question: "¿Sus profesionales están matriculados?",
      answer:
        "Sí, todos nuestros profesionales, incluyendo electricistas, gasistas, administradores de consorcio y maestros mayor de obra, están debidamente matriculados y cuentan con amplia experiencia en sus respectivas áreas.",
    },
    {
      question: "¿Cómo puedo solicitar un presupuesto o una consulta?",
      answer:
        "Puedes contactarnos directamente a través de nuestro formulario en la sección de Contacto, enviarnos un mensaje por WhatsApp o llamarnos. Estaremos encantados de ofrecerte una consulta gratuita y un presupuesto personalizado.",
    },
    {
      question: "¿Qué áreas geográficas cubren sus servicios?",
      answer:
        "Principalmente operamos en Buenos Aires, Argentina. Si tienes una consulta fuera de esta área, por favor contáctanos y evaluaremos cómo podemos ayudarte.",
    },
    {
      question: "¿Ofrecen servicios de emergencia?",
      answer:
        "Sí, contamos con servicios de emergencia 24/7 para ciertas áreas, especialmente en mantenimiento edilicio y eléctrico. Consulta con nuestro equipo para más detalles.",
    },
  ]

  // Rotar estadísticas cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [stats.length])

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        <FadeInSection>
          <div className="max-w-7xl mx-auto">
            {/* Título principal */}
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <div className="flex items-center justify-center gap-3 lg:gap-4 mb-4 lg:mb-6">
                <Star className="w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 text-yellow-500 fill-current animate-pulse" />
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-montserrat font-extrabold text-gray-800">
                  ¿Por qué elegirnos?
                </h2>
              </div>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
                Más de <span className="font-semibold text-brand-dark-blue">500 clientes</span> confían en nosotros para
                sus gestiones más importantes
              </p>
            </div>

            {/* Estadísticas rotativas */}
            <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 lg:p-12 mb-8 sm:mb-12 lg:mb-16 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="flex items-center justify-center gap-4 mb-4 lg:mb-6">
                  <div className="text-brand-dark-blue">{stats[currentStat].icon}</div>
                  <div>
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-montserrat font-extrabold text-brand-dark-blue">
                      {stats[currentStat].number}
                    </div>
                    <div className="text-sm sm:text-base lg:text-lg font-poppins text-gray-600">
                      {stats[currentStat].label}
                    </div>
                  </div>
                </div>

                {/* Indicadores de estadísticas */}
                <div className="flex justify-center gap-2 lg:gap-3">
                  {stats.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentStat(index)}
                      className={`w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 rounded-full transition-all duration-300 ${
                        index === currentStat ? "bg-brand-dark-blue scale-125" : "bg-gray-300 hover:bg-gray-400"
                      }`}
                      aria-label={`Ver estadística ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Sección de Preguntas Frecuentes (FAQ) */}
            <div className="max-w-4xl mx-auto">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-montserrat font-extrabold text-gray-800 mb-6 sm:mb-8 lg:mb-12 text-center">
                Preguntas Frecuentes
              </h3>
              <div className="space-y-4 sm:space-y-6">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.01]"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-center justify-between p-4 sm:p-6 text-left focus:outline-none focus:ring-2 focus:ring-brand-dark-blue focus:ring-inset rounded-lg"
                    >
                      <h4 className="text-base sm:text-lg lg:text-xl font-montserrat font-semibold text-gray-800">
                        {faq.question}
                      </h4>
                      <div className="flex-shrink-0 ml-4">
                        {openFaq === index ? (
                          <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500" />
                        ) : (
                          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500" />
                        )}
                      </div>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        openFaq === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="px-4 sm:px-6 pb-4 sm:pb-6 border-t border-gray-100 pt-4">
                        <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
