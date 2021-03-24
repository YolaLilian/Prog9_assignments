
// Variables
const ul = document.getElementById('games');
const jsonButton = document.getElementById('json-button');
const jsonButton2 = document.getElementById('json-button_2');

// Event Listeners
jsonButton.addEventListener('click', fetchJSON);
jsonButton2.addEventListener('click', fetchJSON);
window.addEventListener('load', registerServiceWorker);

// Error handling 
function logError(error) {

	console.log('Looks like there was a problem:', error);

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
function fetchJSON() {

	fetch("https://cmgt.hr.nl/api/projects")
	// console.log( data );
	.then( response => response.json() )
	.then( data => {

		let projects = data.data;
		// console.log( projects )
		return projects.map(function(project) {
			// console.log(project);
			let li = createNode('li');
			let span = createNode('span');
			span.innerHTML = `${project.project.title}`;
			append(li, span);
			append(ul, li);
		} ) 
	
	} ) 
	.catch(logError);

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