"use client"
import ContactoPageContent from "./contacto-content"

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

export default function ContactoPageClient() {
  return <ContactoPageContent />
}
