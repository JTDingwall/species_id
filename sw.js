const CACHE = 'species-id-v2';
const URLS = [
  'index.html',
  'css/style.css',
  'js/data.js',
  'js/library.js',
  'js/flashcards.js',
  'js/quiz.js',
  'js/matching.js',
  'js/timed.js',
  'js/app.js',
  'manifest.json',
  'images/species-01.jpg',
  'images/species-02.jpg',
  'images/species-03.jpg',
  'images/species-04.jpg',
  'images/species-05.jpg',
  'images/species-06.jpg',
  'images/species-07.jpg',
  'images/species-08.jpg',
  'images/species-09.jpg',
  'images/species-10.jpg',
  'images/species-11.jpg',
  'images/species-12.jpg',
  'images/species-13.jpg',
  'images/species-14.jpg',
  'images/species-15.jpg',
  'images/species-16.jpg',
  'images/species-17.jpg',
  'images/species-18.jpg',
  'images/species-19.jpg',
  'images/species-20.jpg',
  'images/species-21.jpg',
  'images/species-22.jpg',
  'images/species-23.jpg',
  'images/species-24.jpg',
  'images/species-25.jpg'
];

// Install: cache static assets
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(URLS))
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
  e.respondWith(
    caches.match(e.request).then(cached => {
      const fetchPromise = fetch(e.request).then(response => {
        if (response && response.ok && response.type === 'basic') {
          const clone = response.clone();
          caches.open(CACHE).then(cache => cache.put(e.request, clone));
        }
        return response;
      }).catch(() => cached);
      return cached || fetchPromise;
    })
  );
});