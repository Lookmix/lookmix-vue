// ------------------ Google Generated

// const CACHE_NAME = "lookmix-cache-v1";
// const urlsToCache = [
// 	"/",
// 	"/index.html",
// 	// "/assets/index.css", // Adjust based on your build output
// 	// "/assets/index.js",  // Adjust based on your build output
// 	// "/pwa-192x192.png",
// 	// "/pwa-512x512.png"
// 	"/assets/",
// 	"/icons/"
// ];

// self.addEventListener("install", (event) => {
// 	event.waitUntil(
//     caches.open(CACHE_NAME).then((cache) => {
// 			return cache.addAll(urlsToCache);
//     })
// 	);
// });

// self.addEventListener("fetch", (event) => {
// 	event.respondWith(
//     caches.match(event.request).then((response) => {
// 			return response || fetch(event.request);
//     })
// 	);
// });

// ------------------ chatGPT GENERATED

const CACHE_NAME = "lookmix-cache-v1";
const urlsToCache = [
  "/", // cache a página principal
  "/index.html",
  "/manifest.json",
  // "/icons/icon-192.png",
  // "/icons/icon-512.png"
	"/assets/",
	"/icons/"
];

// Instalando o Service Worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Ativando e limpando caches antigos
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});

// Interceptando requisições
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return (response || 
				fetch(event.request).catch(() => 
					false
          // caches.match("/offline.html") // opcional: exibir algo offline
        )
      );
    })
  );
});
