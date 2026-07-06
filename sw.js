const CACHE = 'species-id-v6';

// Only pre-cache critical assets (JS, CSS, HTML, manifest). Images are lazy-cached at runtime.
const PRECACHE_URLS = [
  'index.html',
  'css/style.css',
  'js/data.js',
  'js/library.js',
  'js/flashcards.js',
  'js/quiz.js',
  'js/matching.js',
  'js/timed.js',
  'js/app.js',
  'manifest.json'
];

// Install: cache critical static assets
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => {
      return Promise.allSettled(
        PRECACHE_URLS.map(url =>
          cache.add(url).catch(err => {
            console.warn('SW: failed to pre-cache', url, err);
          })
        )
      );
    })
  );
  self.skipWaiting();
});

// Activate: clean old caches
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch: serve from cache, fallback to network, cache the result
self.addEventListener('fetch', e => {
  // Skip non-GET requests
  if (e.request.method !== 'GET') return;

  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;

      return fetch(e.request).then(response => {
        // Only cache successful responses
        if (response && response.ok && response.type === 'basic') {
          const clone = response.clone();
          caches.open(CACHE).then(cache => cache.put(e.request, clone));
        }
        return response;
      }).catch(() => {
        // If network fails for an image, return a simple fallback
        if (e.request.destination === 'image') {
          return new Response(
            '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="150" viewBox="0 0 200 150"><rect width="200" height="150" fill="#e8d9c0"/><text x="100" y="75" text-anchor="middle" font-size="48">📷</text></svg>',
            { headers: { 'Content-Type': 'image/svg+xml' } }
          );
        }
        // For non-image requests, return the cached version if available
        return cached;
      });
    })
  );
});