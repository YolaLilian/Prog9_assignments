const staticCacheName = "site-static-v2";

// Caching our assets
const assets = [
	"/",
	"/index.html",
	"/css/style.css",
	"/js/app.js",
	"https://fonts.googleapis.com/css2?family=Inter&display=swap"
];

// Install new service worker
self.addEventListener("install", installEvent => {
	// console.log("service worker installed");
	installEvent.waitUntil(
		caches.open(staticCacheName)
		.then(cache => {
			console.log("caching all shell assets!")
			cache.addAll(assets)
		})
	)
});

// Activate new service worker
self.addEventListener("activate", activateEvent => {
	// console.log("service worker activated");
	activateEvent.waitUntil(
		caches.keys().then(keys => {
			// console.log(keys);
			return Promise.all(keys
				.filter(key => key !== staticCacheName)
				.map(key => caches.delete(key))
			)
		})
	);
});

// Checking if cache matches fetch
self.addEventListener('fetch', fetchEvent => {
	console.log("fetch event", fetchEvent);
	fetchEvent.respondWith(
		caches.match(fetchEvent.request)
		.then(cacheResponse => {
			return cacheResponse || fetch(fetchEvent.request);
		})
	);
});