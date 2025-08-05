const CACHE_NAME = "romar-gestiones-v1.0.0"
const urlsToCache = [
  "/",
  "/contacto",
  "/proyectos",
  "/images/logo-romar-gestiones.png",
  "/images/banner-principal-romar-gestiones.webp",
  "/images/og-image-romar-gestiones.jpg",
  "/manifest.json",
]

// Instalación del Service Worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Cache abierto")
      return cache.addAll(urlsToCache)
    }),
  )
})

// Activación del Service Worker
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log("Eliminando cache antiguo:", cacheName)
            return caches.delete(cacheName)
          }
        }),
      )
    }),
  )
})

// Interceptar peticiones de red
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Cache hit - devolver respuesta del cache
      if (response) {
        return response
      }

      return fetch(event.request).then((response) => {
        // Verificar si recibimos una respuesta válida
        if (!response || response.status !== 200 || response.type !== "basic") {
          return response
        }

        // Clonar la respuesta
        const responseToCache = response.clone()

        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache)
        })

        return response
      })
    }),
  )
})

// Manejar mensajes del cliente
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting()
  }
})

// Notificaciones push (opcional para futuras implementaciones)
self.addEventListener("push", (event) => {
  const options = {
    body: event.data ? event.data.text() : "Nueva notificación de RoMar Gestiones",
    icon: "/images/logo-romar-gestiones.png",
    badge: "/images/logo-romar-gestiones.png",
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1,
    },
    actions: [
      {
        action: "explore",
        title: "Ver más",
        icon: "/images/logo-romar-gestiones.png",
      },
      {
        action: "close",
        title: "Cerrar",
        icon: "/images/logo-romar-gestiones.png",
      },
    ],
  }

  event.waitUntil(self.registration.showNotification("RoMar Gestiones", options))
})
