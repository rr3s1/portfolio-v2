const CACHE_NAME = 'portfolio-v2';
const STATIC_CACHE = 'static-v2';
const DYNAMIC_CACHE = 'dynamic-v2';

const STATIC_ASSETS = [
  '/',
  '/favicon.png',
  '/rs-concept.png',
  '/git.svg',
  '/link.svg',
];

// Assets that should be cached with different strategies
const CACHE_STRATEGIES = {
  images: /\.(jpg|jpeg|png|gif|webp|avif|svg)$/i,
  videos: /\.(mp4|webm|ogg)$/i,
  fonts: /\.(woff|woff2|eot|ttf|otf)$/i,
  scripts: /\.(js|mjs)$/i,
  styles: /\.css$/i,
};

// Install event - cache critical assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    Promise.all([
      caches.open(STATIC_CACHE).then((cache) => cache.addAll(STATIC_ASSETS)),
      self.skipWaiting()
    ])
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    Promise.all([
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((cacheName) => 
              cacheName !== STATIC_CACHE && 
              cacheName !== DYNAMIC_CACHE &&
              cacheName !== CACHE_NAME
            )
            .map((cacheName) => caches.delete(cacheName))
        );
      }),
      self.clients.claim()
    ])
  );
});

// Fetch event with optimized caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests and external requests
  if (request.method !== 'GET' || !url.origin.includes(self.location.origin)) {
    return;
  }

  // Handle different asset types with appropriate strategies
  if (CACHE_STRATEGIES.images.test(url.pathname)) {
    // Cache first for images
    event.respondWith(cacheFirst(request, DYNAMIC_CACHE));
  } else if (CACHE_STRATEGIES.videos.test(url.pathname)) {
    // Network first for videos (they're large and change less frequently)
    event.respondWith(networkFirst(request, DYNAMIC_CACHE));
  } else if (CACHE_STRATEGIES.fonts.test(url.pathname)) {
    // Cache first for fonts (they rarely change)
    event.respondWith(cacheFirst(request, STATIC_CACHE));
  } else if (CACHE_STRATEGIES.scripts.test(url.pathname) || CACHE_STRATEGIES.styles.test(url.pathname)) {
    // Stale while revalidate for JS/CSS
    event.respondWith(staleWhileRevalidate(request, DYNAMIC_CACHE));
  } else {
    // Network first for HTML and other resources
    event.respondWith(networkFirst(request, DYNAMIC_CACHE));
  }
});

// Cache first strategy
async function cacheFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  
  if (cached) {
    return cached;
  }
  
  try {
    const response = await fetch(request);
    if (response.status === 200) {
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    return new Response('Offline', { status: 503 });
  }
}

// Network first strategy
async function networkFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  
  try {
    const response = await fetch(request);
    if (response.status === 200) {
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    const cached = await cache.match(request);
    return cached || new Response('Offline', { status: 503 });
  }
}

// Stale while revalidate strategy
async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  
  const fetchPromise = fetch(request).then((response) => {
    if (response.status === 200) {
      cache.put(request, response.clone());
    }
    return response;
  }).catch(() => cached);
  
  return cached || fetchPromise;
}