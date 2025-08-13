"use client"

import Image from "next/image"

export default function WorkWithUsBanner() {
  const handleWorkWithUsClick = () => {
    const subject = "Interés en trabajar con RoMar Gestiones"
    const body = `Hola,

Me interesa formar parte del equipo de RoMar Gestiones. Me gustaría conocer más sobre las oportunidades laborales disponibles.

Mis datos de contacto:
- Nombre: 
- Teléfono: 
- Experiencia: 

Quedo a la espera de su respuesta.

Saludos cordiales.`

    const mailtoLink = `mailto:romargestiones@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoLink
  }

  return (
    <div className="relative bg-gray-100 overflow-hidden cursor-pointer" onClick={handleWorkWithUsClick}>
      <div className="relative w-full">
        <Image
          src="/images/trabaja-con-nosotros.webp"
          alt="Trabaja con nosotros - RoMar Gestiones"
          width={1920}
          height={600}
          className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
          priority
          sizes="100vw"
        />
      </div>
    </div>
  )
}
