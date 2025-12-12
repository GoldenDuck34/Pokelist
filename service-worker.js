// Minimal service worker for PWA — does not cache anything
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", () => self.clients.claim());

// Don't cache script.js. It is updated frequently.
self.addEventListener("fetch", event => {
  if (event.request.url.endsWith("script.js") ) {
    event.respondWith(
      fetch(event.request, { cache: "no-store" })
    );
  }
});
