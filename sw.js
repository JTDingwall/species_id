const CACHE = 'species-id-v3';
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
  'images/species-25.jpg',
  'images/species-26.jpg',
  'images/species-27.jpg',
  'images/species-28.jpg',
  'images/species-29.jpg',
  'images/species-30.jpg',
  'images/species-31.jpg',
  'images/species-32.jpg',
  'images/species-33.jpg',
  'images/species-34.jpg',
  'images/species-35.jpg',
  'images/species-36.jpg',
  'images/species-37.jpg',
  'images/species-38.jpg',
  'images/species-39.jpg',
  'images/species-40.jpg',
  'images/species-41.jpg',
  'images/species-42.jpg',
  'images/species-43.jpg',
  'images/species-44.jpg',
  'images/species-45.jpg',
  'images/species-46.jpg',
  'images/species-47.jpg',
  'images/species-48.jpg',
  'images/species-49.jpg',
  'images/species-50.jpg',
  'images/species-51.jpg',
  'images/species-52.jpg',
  'images/species-53.jpg',
  'images/species-54.jpg',
  'images/species-55.jpg',
  'images/species-56.jpg',
  'images/species-57.jpg',
  'images/species-58.jpg',
  'images/species-59.jpg',
  'images/species-60.jpg',
  'images/species-61.jpg',
  'images/species-62.jpg',
  'images/species-63.jpg',
  'images/species-64.jpg',
  'images/species-65.jpg',
  'images/species-66.jpg',
  'images/species-67.jpg',
  'images/species-68.jpg',
  'images/species-69.jpg',
  'images/species-70.jpg',
  'images/species-71.jpg',
  'images/species-72.jpg',
  'images/species-73.jpg',
  'images/species-74.jpg',
  'images/species-75.jpg'
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