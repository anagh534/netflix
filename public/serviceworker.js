const CACHE_NAME = "netflix-clone";
const urlsToCache = ['index.html'];

const self = this;

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log("install cache");
                return cache.addAll(urlsToCache);
            })
    )
});
self.addEventListener('fetch', event => {
    console.log("fetch cache");
    event.respondWith(
        caches.match(event.request)
            .then(() => {
                return fetch(event.request)
                    .catch(() => caches.match('index.html'))
            })
    )
});
self.addEventListener('activate', event => {
    const cacheWhitelist = [];
    cacheWhitelist.push(CACHE_NAME);
    console.log("active");
    event.waitUntil(
        caches.keys().then((cacheNames) => Promise.all(
            cacheNames.map((cacheName) => {
                if (!cacheWhitelist.includes(cacheName)) {
                    return caches.delete(cacheName);
                }
            })
        ))
    )
});