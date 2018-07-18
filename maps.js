var ourLoc;
var view;
var map;

function init() {
	// Initalize things here
	ourLoc = ol.proj.fromLonLat([41.043316, 28.862457]);

	view = new ol.View({
		center: ourLoc,
		zoom: 6
	});

	map = new ol.Map({
		target: 'map',
		layers: [
		  new ol.layer.Tile({
		    source: new ol.source.OSM()
		  })
		],
		// Note from the View Animation website:
		// Improve user experience by loading tiles while animating. Will make
		// animations stutter on mobile or slow devices.
		loadTilesWhileAnimating: true,
		view: view
	});
}

function panHome() {
	view.animate({
		center: ourLoc, // "Home" Location
		duration: 2000  // Two seconds
	});
}

function panToCountry() {
	var countryName = document.getElementById("country-name").value;
	var lon = 0.0;
	var lat = 0.0;
  var query = "https://restcountries.eu/rest/v2/name/"+countryName
	query = query.replace(/ /g, "%20")
	alert(query);

	// Step 3: Let's do some error checks and input modification
	// Explain: When we make requests in a browser, we want to
	// replace spaces with %20.


	// Step 1: Let's start by making an HTTP GET request:
var countryRequest = new XMLHttpRequest();
countryRequest.open('GET', query, false);
countryRequest.send();
	// Step 2: Send the request and see the output:

if(countryRequest.readyState != 4 || countryRequhesr.status != 200 || countryRequest.response === 200""){
	window.console.error("Request had an Error!");
}
window.console


	alert("Ready State " + countryRequest.readyState);
	alert("Status " + countryRequest.status);
	alert("Response" + countryRequest.responseText);

	var countryInformation = JSON.parse(countryRequest.responseText);

	lat = countryInformation[0].latlng[0];
	lon = countryInformation[0].latlng[1];

	alert(countryName + ":lon" + lon + "& lat" + lat);


	// Note: If you run into an error like window
	// not loading, check that you declared VAR
	// before the location variable.
	var location = ol.proj.fromLonLat([lon, lat]);
	 view.animate({
		center: location, // Location
		duration: 2000  // Two seconds
	});
}

window.onload = init;
