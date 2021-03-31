
// Imports
import localForage from "localforage";
import 'regenerator-runtime/runtime';

// Variables
const status = document.querySelector(".status");
const ul = document.getElementById('games');
const ul2 = document.getElementById('tags');
const jsonButton = document.getElementById('json-button');
const jsonButton2 = document.getElementById('json-button_2');

// Event Listeners
jsonButton.addEventListener('click', fetchJSON);
jsonButton2.addEventListener('click', fetchTags);
window.addEventListener('load', registerServiceWorker);

// Check online status
window.addEventListener("load", () => {
	hasNetwork(navigator.onLine);
  });
  
function hasNetwork(online) {

	if (online) {
		status.classList.remove("offline");
		status.classList.add("online");
		status.innerText = "Online";
	} else {
		status.classList.remove("online");
		status.classList.add("offline");
		status.innerText = "Offline";
	}
}

window.addEventListener("load", () => {

	hasNetwork(navigator.onLine);
  
	window.addEventListener("online", () => {
		
		hasNetwork(true);

	});
  
	window.addEventListener("offline", () => {
	
		hasNetwork(false);

	});
  });

// Error handling 
function logError(error) {

	let li = createNode('li');
	let span = createNode('span');
	span.innerHTML = `You're offline, can\'t fetch tags!`;
	append(li, span);
	append(ul, li);

}

// Create element
function createNode(element) {

    return document.createElement(element);

}

// Append element to parent
function append(parent, el) {

    return parent.appendChild(el);

}

// Fetch the JSON data!
async function fetchJSON() {

	let responseJson;

	try {

		const response = await fetch("https://cmgt.hr.nl/api/projects");
		responseJson = await response.json();

	} catch (error) {

		responseJson = await localForage.getItem("projects") ;

	}

	ul.innerHTML = responseJson.data.map(createProject).join('\n');
	
}

function createProject(project){
	console.log(project)
	return `
		<li class="project">
			<div class="project__img">
				<img src="${project.project.header_image}">
			</div>
			<div class="project__title">
				<p>${project.project.title}</p>
			</div>
		</li> 
	`;

}

// Fetch the tags!
async function fetchTags() {

	const response = await fetch("https://cmgt.hr.nl/api/tags").catch(logError);
	const responseJson = await response.json();

	let tags = responseJson.data;
	return tags.map(function(tag) {
		let li = createNode('li');
		let span = createNode('span');
		console.log(tag.name);
		span.innerHTML = `${tag.name}`;
		append(li, span);
		append(ul, li);

	} ) 
}

// Register service worker
function registerServiceWorker() {

	if ("serviceWorker" in navigator) {
		navigator.serviceWorker
		.register("../serviceWorker.js")
		.then(res => console.log("service worker registered"))
		.catch(err => console.log("service worker not registered", err))
  	}

} 

// Check if IndexedDB is supported by browser
if ( !( 'indexedDB' in window ) ) {
	console.log('This browser doesn\'t support IndexedDB');
}