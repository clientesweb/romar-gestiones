import { Check, ChevronDown, Users, Award, Target } from "lucide-react"
import FadeInSection from "./fade-in-section"

export default function AboutSection() {
  return (
    <section id="nosotros" className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        <FadeInSection>
          <div className="max-w-7xl mx-auto">
            {/* Título principal */}
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-montserrat font-extrabold text-gray-800 mb-4 sm:mb-6 lg:mb-8">
                Sobre Nosotros
              </h2>
              <div className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed px-4 sm:px-0 max-w-5xl mx-auto">
                <p className="mb-4 lg:mb-6">
                  En <span className="font-montserrat font-extrabold text-brand-dark-blue">RoMar Gestiones</span> nos
                  especializamos en ofrecer{" "}
                  <span className="font-poppins font-bold text-brand-dark-blue">
                    soluciones personalizadas y eficientes
                  </span>
                  , con un equipo de{" "}
                  <span className="font-poppins font-bold text-brand-dark-blue">
                    profesionales matriculados y experimentados
                  </span>
                  .
                </p>
              </div>
            </div>

            {/* Características destacadas */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12 lg:mb-16">
              {/* Soluciones Personalizadas */}
              <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 lg:p-10 text-center hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group">
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6 group-hover:bg-brand-green/20 transition-colors duration-300">
                  <Target className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-brand-green" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-montserrat font-extrabold text-brand-dark-blue mb-3 lg:mb-4">
                  Soluciones Personalizadas
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                  Adaptamos cada servicio a las{" "}
                  <span className="font-semibold text-brand-dark-blue">necesidades específicas</span> de nuestros
                  clientes
                </p>
              </div>

              {/* Profesionales Matriculados */}
              <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 lg:p-10 text-center hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group">
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-brand-dark-blue/10 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6 group-hover:bg-brand-dark-blue/20 transition-colors duration-300">
                  <Award className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-brand-dark-blue" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-montserrat font-extrabold text-brand-dark-blue mb-3 lg:mb-4">
                  Profesionales Matriculados
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                  Equipo <span className="font-semibold text-brand-dark-blue">certificado y experimentado</span> en cada
                  área de especialización
                </p>
              </div>

              {/* Eficiencia Garantizada */}
              <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 lg:p-10 text-center hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group">
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6 group-hover:bg-brand-green/20 transition-colors duration-300">
                  <Users className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-brand-green" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-montserrat font-extrabold text-brand-dark-blue mb-3 lg:mb-4">
                  Eficiencia Garantizada
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                  <span className="font-semibold text-brand-dark-blue">Resultados rápidos</span> y procesos optimizados
                  para tu tranquilidad
                </p>
              </div>
            </div>

            {/* Servicios Destacados */}
            <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 lg:p-12 xl:p-16 mb-8 sm:mb-12 lg:mb-16 max-w-6xl mx-auto">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-montserrat font-extrabold text-gray-800 mb-6 sm:mb-8 lg:mb-12 text-center">
                Servicios Destacados
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
                <div className="flex items-center gap-3 sm:gap-4 lg:flex-col lg:text-center lg:gap-6 group">
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 lg:w-16 lg:h-16 bg-brand-green rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <span className="text-base sm:text-lg lg:text-xl text-gray-700 font-medium group-hover:text-brand-dark-blue transition-colors duration-300">
                    <span className="font-montserrat font-extrabold text-brand-dark-blue">Gestoría inmobiliaria</span>
                  </span>
                </div>

                <div className="flex items-center gap-3 sm:gap-4 lg:flex-col lg:text-center lg:gap-6 group">
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 lg:w-16 lg:h-16 bg-brand-green rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <span className="text-base sm:text-lg lg:text-xl text-gray-700 font-medium group-hover:text-brand-dark-blue transition-colors duration-300">
                    <span className="font-montserrat font-extrabold text-brand-dark-blue">
                      Administración de consorcios
                    </span>
                  </span>
                </div>

                <div className="flex items-center gap-3 sm:gap-4 lg:flex-col lg:text-center lg:gap-6 group">
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 lg:w-16 lg:h-16 bg-brand-green rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <span className="text-base sm:text-lg lg:text-xl text-gray-700 font-medium group-hover:text-brand-dark-blue transition-colors duration-300">
                    <span className="font-montserrat font-extrabold text-brand-dark-blue">
                      Mantenimiento en general
                    </span>
                  </span>
                </div>
              </div>
            </div>

            {/* CTA con flecha */}
            <div className="text-center">
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 mb-4 lg:mb-6 font-medium px-4 sm:px-0">
                ¿Necesitás ayuda con tus trámites?{" "}
                <span className="font-montserrat font-extrabold text-brand-dark-blue">Conoce nuestros servicios</span>
              </p>
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-brand-dark-blue rounded-full animate-bounce hover:bg-blue-700 transition-colors duration-300 cursor-pointer">
                <ChevronDown className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
