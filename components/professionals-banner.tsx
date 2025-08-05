import Image from "next/image"

export default function ProfessionalsBanner() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20 xl:py-24 overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <Image
          src="/images/professionals-background.webp"
          alt="Profesionales RoMar Gestiones trabajando"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay de color de marca */}
        <div className="absolute inset-0 bg-brand-dark-blue/75"></div>
      </div>

      {/* Contenido */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-montserrat font-extrabold mb-4 sm:mb-6 lg:mb-8">
            Profesionales a tu servicio
          </h2>
          <div className="text-white/95 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed max-w-5xl mx-auto px-4 sm:px-0">
            <span className="font-poppins font-bold">Electricistas y gasistas matriculados</span>
            <span className="font-poppins">, técnicos electromecánicos, </span>
            <span className="font-poppins font-bold">administradores de consorcio</span>
            <span className="font-poppins">, licenciados en seguridad e higiene, </span>
            <span className="font-poppins font-bold">maestros mayor de obra</span>
            <span className="font-poppins">, albañiles, plomeros y personal de limpieza.</span>
          </div>
        </div>
      </div>
    </section>
  )
}
