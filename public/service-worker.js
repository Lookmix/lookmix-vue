// chatGPT generated: https://chatgpt.com/share/68b79dd4-58e0-8008-9c19-0254db824182
const CACHE_NAME = "lookmix-cache-v0.0.2";
const urlsToCache = [
  "/", // cache a página principal
  "/index.html",
  "/manifest.json",
  // "/icons/icon-192.png",
  // "/icons/icon-512.png"
	"/assets/",
	"/icons/",
  "/img/screenshots/",
  "/offline.html"
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
    fetch(event.request)
      .then((response) => {
        return response;
      })
      .catch(() => {
        return caches.match(event.request).then((cachedResponse) => {
          return cachedResponse || caches.match("/offline.html");
        });
      })
  );
});
