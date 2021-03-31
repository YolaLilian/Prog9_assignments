
// Imports
import localForage from "localforage";

// Variables
const staticCacheName = "site-static-v1";

// Caching our assets
const assets = [
	"/",
	"/index.html",
	"/style.78032849.css",
	"/app.c3f9f951.js",
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
				.filter(key => key !== staticCacheName )
				.map(key => caches.delete(key))
			)
		})
	);
});

// Fetches requests
self.addEventListener('fetch', fetchEvent => {

	const fetchUrl = "https://cmgt.hr.nl/api/projects";
	console.log(fetchEvent.request.url)

	if (fetchEvent.request.url == fetchUrl) {
		
		fetchEvent.respondWith( 
			
			networkFirst( fetchUrl )

		)	
			
	} else {

		fetchEvent.respondWith(
		
			caches.match(fetchEvent.request)
			.then(function (response) {
				return response || fetch(fetchEvent.request);
			})
		);

	}

});

async function networkFirst( fetchUrl) {
	
	try {
			
		const res = await fetch(fetchUrl);
		const data = await res.clone().json();

		localForage.setItem("projects", data);
		return res;
	
	} catch( error ) {

		const storage = await localForage.getItem("projects");
		return new Response(storage);

	}	

}