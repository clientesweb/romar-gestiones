import type React from "react"
import type { Metadata, Viewport } from "next"
import { Montserrat, Poppins } from 'next/font/google'
import "./globals.css"
import HeaderAnnouncement from "@/components/header-announcement"
import Script from "next/script"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1e3a5f" },
    { media: "(prefers-color-scheme: dark)", color: "#1e3a5f" },
  ],
  colorScheme: "light",
}

export const metadata: Metadata = {
  metadataBase: new URL("https://www.romargestiones.com.ar"),
  title: {
    default: "RoMar Gestiones - Gestoría Integral en Buenos Aires",
    template: "%s | RoMar Gestiones",
  },
  description:
    "Servicios de gestoría integral en Buenos Aires: mantenimiento edilicio, administración de consorcios, gestoría inmobiliaria, automotor y náutica. Profesionales matriculados con +500 clientes satisfechos.",
  keywords: [
    "gestoría integral",
    "mantenimiento edilicio",
    "administración consorcios",
    "gestoría inmobiliaria",
    "gestoría automotor",
    "gestoría náutica",
    "trámites notariales",
    "Buenos Aires",
    "Argentina",
    "profesionales matriculados",
    "electricistas matriculados",
    "gasistas matriculados",
    "administradores consorcio",
    "maestros mayor obra",
    "RoMar Gestiones",
  ],
  authors: [{ name: "RoMar Gestiones", url: "https://romar-gestiones.vercel.app" }],
  creator: "RoMar Gestiones",
  publisher: "RoMar Gestiones",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: "business",
  classification: "Gestoría Integral y Servicios Profesionales",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.romargestiones.com.ar",
    languages: {
      "es-AR": "https://www.romargestiones.com.ar",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://www.romargestiones.com.ar",
    siteName: "RoMar Gestiones",
    title: "RoMar Gestiones - Gestoría Integral en Buenos Aires",
    description:
      "Servicios de gestoría integral: mantenimiento, administración de consorcios, gestoría inmobiliaria y automotor. Profesionales matriculados en Buenos Aires.",
    images: [
      {
        url: "/images/og-image-romar-gestiones.jpg",
        width: 1200,
        height: 630,
        alt: "RoMar Gestiones - Gestoría Integral: Mantenimiento, Obras, Inmobiliaria, Seguros",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@romargestioness",
    creator: "@romargestioness",
    title: "RoMar Gestiones - Gestoría Integral en Buenos Aires",
    description:
      "Servicios de gestoría integral: mantenimiento, administración de consorcios, gestoría inmobiliaria y automotor. Profesionales matriculados.",
    images: ["/images/og-image-romar-gestiones.jpg"],
  },
  verification: {
    google: "google-site-verification-code", // Reemplazar con el código real
    yandex: "yandex-verification-code", // Reemplazar con el código real
    yahoo: "yahoo-verification-code", // Reemplazar con el código real
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "RoMar Gestiones",
    startupImage: [
      {
        url: "/images/og-image-romar-gestiones.jpg",
        media: "(device-width: 768px) and (device-height: 1024px)",
      },
    ],
  },
  applicationName: "RoMar Gestiones",
  generator: "Next.js",
  manifest: "/manifest.json",
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "RoMar Gestiones",
    "application-name": "RoMar Gestiones",
    "msapplication-TileColor": "#1e3a5f",
    "msapplication-config": "/browserconfig.xml",
    "theme-color": "#1e3a5f",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/favicon-romar-gestiones.png", type: "image/png", sizes: "32x32" },
      { url: "/images/favicon-romar-gestiones.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [{ url: "/images/favicon-romar-gestiones.png", sizes: "180x180" }],
    shortcut: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-AR">
      <head>
        {/* Preconnect para mejorar rendimiento */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="//wa.me" />
        <link rel="dns-prefetch" href="//instagram.com" />
        <link rel="dns-prefetch" href="//facebook.com" />

        {/* Favicons mejorados */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/images/favicon-romar-gestiones.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/images/favicon-romar-gestiones.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/images/favicon-romar-gestiones.png" sizes="180x180" />
        <link rel="mask-icon" href="/images/favicon-romar-gestiones.png" color="#1e3a5f" />

        {/* Manifest */}
        <link rel="manifest" href="/manifest.json" />

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "RoMar Gestiones",
              description:
                "Servicios de gestoría integral: mantenimiento edilicio, administración de consorcios, gestoría inmobiliaria, automotor y náutica en Buenos Aires.",
              url: "https://www.romargestiones.com.ar",
              telephone: "+5491130849514",
              email: "info@romargestioness.com.ar",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Buenos Aires",
                addressCountry: "AR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -34.6118,
                longitude: -58.396,
              },
              openingHours: "Mo-Fr 09:00-18:00",
              sameAs: [
                "https://instagram.com/romargestioness",
                "https://facebook.com/romargestioness",
                "https://wa.me/5491130849514",
              ],
              serviceArea: {
                "@type": "Place",
                name: "Buenos Aires, Argentina",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Servicios de Gestoría Integral",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Mantenimiento Edilicio",
                      description: "Servicios de mantenimiento integral de edificios y estructuras",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Administración de Consorcios",
                      description: "Administración profesional de propiedades horizontales",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Gestoría Inmobiliaria",
                      description: "Gestión integral de propiedades y contratos inmobiliarios",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Gestoría Automotor",
                      description: "Trámites automotor: transferencias, informes de dominio, cédulas",
                    },
                  },
                ],
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "500",
                bestRating: "5",
                worstRating: "1",
              },
            }),
          }}
        />
      </head>
      <body className={`${montserrat.variable} ${poppins.variable} font-poppins antialiased`}>
        <HeaderAnnouncement />
        {children}

        {/* Service Worker Registration */}
        <Script id="sw-registration" strategy="afterInteractive">
          {`
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', function() {
                navigator.serviceWorker.register('/sw.js')
                  .then(function(registration) {
                    console.log('SW registered: ', registration);
                  })
                  .catch(function(registrationError) {
                    console.log('SW registration failed: ', registrationError);
                  });
              });
            }
          `}
        </Script>

        {/* Google Analytics (opcional - reemplazar con tu ID) */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
      </body>
    </html>
  )
}
