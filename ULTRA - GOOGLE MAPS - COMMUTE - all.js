/*

!!GOOGLE MAPS - GEOCODING - COMMUTE - ALL!!

*/

<body>
<div class="container"><!-- SHOW-HIDE MARKERS -->
	<div class="options-box">
    	<h1>Find your Zagreb Home</h1>
        <div>
        	<input id="show-listings" type="button" value="Show Listings"> <!-- SHOW-HIDE MARKERS -->
            <input id="hide-listings" type="button" value="Hide Listings">
            <hr>
            <span class="text">Draw a shape to search within it for homes!</span>
            <input id="toggle-drawing" type="button" value="Drawing Tools"> <!-- DRAWING -->
        </div>
        <hr>
        <div>
        	<input id="zoom-to-area-text" type="text" placeholder="Enter your favourite area!">	<!-- GEOCODING - CLIENT SIDE -->
            <input id="zoom-to-area" type="button" value="Zoom">
        </div>
        <hr>
        <div>
        	<span class="text"> Within </span> 
            <select id="max-duration">	<!-- DISTANCE - TIME -->
            	<option value="10">10 min</option>
                <option value="15">15 min</option>
                <option value="30">30 min</option>
                <option value="60">60 min</option>
            </select>
            <select id="mode">	<!-- DISTANCE - TIME -->
            	<option value="DRIVING">drive</option>
                <option value="WALKING">walk</option>
                <option value="BICYCLING">bike</option>
                <option value="TRANSIT">transit ride</option>
            </select>
            <span class="text">of</span>
            <input id="search-within-time-text" type="text" placeholder="Ex: Trešnjevka"> <!-- GEOCODING - DISTANCE - TIME -->
            <input id="search-within-time" type="button" value="Go">
        </div>
        <hr>
        <div> <!-- GEOCODING - COMMUTE - PLACES - SEARCHBOX -->
        	<span class="text">Search for nearby places</span>
            <input id="places-search" type="text" placeholder="Ex: Pizza delivery in NYC">
            <input id="go-places" type="button" value="Go">
        </div>
    </div>
    <div style="height:100%; width:100%; position: absolute;"> <!-- ommiting this div will show the map -->
        <div style="height:100%;" id="map"></div>
    </div>
</div>


    <script>
		/***
		Google Maps - GEOCODING - COMMUTE - PLACES (LIBRARY)
		
			> ALERT < 
				>> either use autocomplete or search box
		
		
		AUTOCOMPLETE
			- search for places, establishments, geographical locations or points of interest (on whole map or defined area)
			- autocomplete functionality for search
			
			> ALERT < 
				- ima još koda nenapisanog (istraži bolje)
		
		*library=places - include places library at startup
		*timeAutocomplete - autocomplete for use in search within time entry box
		*zoomAutocomplete - autocomplete for use in the geocoder entry box
		*zoomAutocomplete - bias the boundaries within the map for the zoom to area text
		
		
		SEARCHBOX
			- advantage - extended list of predictions (places & queries)
			- disadvantage - you can not restrict the searches as much as with autocomplete
				
		*<HTML> - add search place text input field and go button
		*searchBox - create the searchbox in order to execute a places search
		*.setBounds - bias the searchbox to within the bounds of the map
		*addListener(places_changed) - when the user selects a predicion from the picklist and retrieve more details for that place
		*addListener(click) - when the user types a prediction & clicks go more details for that place
		*placeMarkers - global placemarkers array to use in multiple functions
			> controle markers seperately from our listings markers
			> to have only 1 set of placemarkers on our map at a time
		*make hideMarkers more generic
		*searchBoxPlaces - custom function to do a nearby search using the selected query string or place
			*hideMarkers - when user chooses - first hide all the markers
			*places - fund all the places that match our query
			*if(0) - no places are found display alert window
			*createMarkersForPlaces - if we do find places that apply createMarkersForPlaces function to them
		*textSearchPlaces - custom function fires when go is clicked & does a nearby search using the entered query or place
			*bounds - capture the bounds of the map
			*hideMarkers - hide any existing place markers
			*placesService - create a new places service instance
			*textSearch - call the text search function
				*query - pass on the value of user entered query places-search
				*bounds - bounds of the map
				*if(OK) - call createMarkers for places function on the results
		*createMarkersForPlaces - custom function that creates markers for each place found in either places search
			*for - iterate through the places & create marker per place 
			*icon - we are capturing a lot of information about the place (marker icon)
			*marker - name -> as a title, location -> as markers position
			*placeMarkers.push - push each marker we created intu placeMarkers array
			*if() - adjust be bounds of the map to fit all of the place markers
		
			
		PLACES DETAILS - PLACE ID
			- pass them like lat long's
			- gives you details about establishments or location
		TASK - on click markers show details of the establishment
		
		*createMarkersForPlaces - change custom function
								- for each place marker add an event listener to call a get details function
			*placeInfoWindow - create a single infowindow to be used with the place details information so only one is open
			*addListener(click) - if the marker is clicked, do a place details search on it in the getPlacesDetails custom function
		*getPlacesDetails 	- custom function fow place details search
							- only executed when the marker is selected
							- indicating the user wants more details about that place
			*service - create the new places service
			*.getDetails - get details method & set values
			*if(OK) - check that status is ok
			*if -> innerHTML - parse all the date we saw in the service call & put all the data into infowindow the created
		***/

		var map;
		
		var markers = [];	// MULTIPLE MARKERS
		
		var polygon = null;	// DRAWING
		
		var placeMarkers = [];	// COMMUTE - PLACES - SEARCHBOX
		
		function initMap() {	// BASIC
			
			var styles = [	// STYLE MAPS
				{
					featureType: 'water',
					stylers: [
						{color: '#19a0d8'}
					]
				},
				{
					featureType: 'administrative',
					elementType: 'labels.text.stroke',
					stylers: [
						{color: '#ffffff'},
						{weight: 6}
					]
				},
				{
					featureType: 'administrative',
					elementType: 'labels.text.fill',
					stylers: [
						{color: '#e85113'}
					]
				},
				{
					featureType: 'road.highway',
					elementType: 'geometry.stroke',
					stylers: [
						{color: '#efe9e4'},
						{lightness: -40}
					]
				},
				{
					featureType: 'transit.station',
					stylers: [
						{weight: 9},
						{hue: '#e85113'}
					]
				},
				{
					featureType: 'road.highway',
					elementType: 'labels.icon',
					stylers: [
						{visibility: 'off'}
					]
				},
				{
					featureType: 'road.highway',
					elementType: 'geometry.fill',
					stylers: [
						{color: '#efe9e4'},
						{lightness: -25}
					]
				}
			];
		
			// Constructor creates a new map - only center $ zoom are required
			map = new google.maps.Map(document.getElementById('map'), {
				center: {lat: 45.8150108, lng: 15.981919},
				zoom: 15,
				styles: styles,	// STYLE MAPS
				mapTypeControl: false	// STYLE MAPS
			});
			
			
			var timeAutocomplete = new google.maps.places.Autocomplete(	// COMMUTE - PLACES - AUTOCOMPLETE
				document.getElementById('search-within-time-text')
			);
			
			var zoomAutocomplete = new google.maps.places.Autocomplete(	// COMMUTE - PLACES - AUTOCOMPLETE
				document.getElementById('zoom-to-area-text')
			);
			zoomAutocomplete.bindTo('bounds', map);	// COMMUTE - PLACES - AUTOCOMPLETE
			
			var searchBox = new google.maps.places.SearchBox(	// COMMUTE - PLACES - SEARCHBOX
				document.getElementById('places-search')
			);
			searchBox.setBounds(map.getBounds());	// COMMUTE - PLACES - SEARCHBOX
			

			var locations = [	// MULTIPLE MARKERS
				{title: 'Mia Cassa', location: {lat: 45.80466555, lng: 15.95497549}},
				{title: 'Caffe Bar Nostalgia', location: {lat: 45.80396811, lng: 15.95389456}},
				{title: 'Zigma Home', location: {lat: 45.81173663, lng: 15.98118067}},
				{title: 'Dom Zdravlja Zagreb', location: {lat: 45.79881281, lng: 15.98480701}},
				{title: 'KB Vinogradska', location: {lat: 45.81529613, lng: 15.95193386}},
				{title: 'Dom Stjepan Radić', location: {lat: 45.78425496, lng: 15.94549656}}
			];
		
			var largeInfowindow = new google.maps.InfoWindow();	// infoWindow
			
			var drawingManager = new google.maps.drawing.DrawingManager({	// DRAWING
				drawingMode: google.maps.drawing.OverlayType.POLYGON,
				drawingControl: true,
				drawingControlOptions: {
					position: google.maps.ControlPosition.TOP_LEFT,	// DRAWING
					drawingModes: [	// DRAWING
						google.maps.drawing.OverlayType.POLYGON
					]
				}
			});
			
			var defaultIcon = makeMarkerIcon('0091ff');	// HIGHTLIGHT MARKER
			
			var highlightedIcon = makeMarkerIcon('FFFF24');	// HIGHTLIGHT MARKER
			
			var bounds = new google.maps.LatLngBounds();	// BOUNDARIES
						
			for(var i = 0; i < locations.length; i++) {	// MULTIPLE MARKERS
				var position = locations[i].location;
				var title = locations[i].title;
				
				/*Removed map parameter*/
				var marker = new google.maps.Marker({	// SHOW-HIDE MARKERS & MARKER
					position: position,
					title: title,
					icon: defaultIcon,	// HIGHTLIGHT MARKER
					animation: google.maps.Animation.DROP,
					id: i					
				});
				
				markers.push(marker);	// MULTIPLE MARKERS
				
				bounds.extend(marker.position);	// BOUNDARIES
				
				marker.addListener('click', function() {	// infoWindow
					populateInfoWindow(this, largeInfowindow);
				});
				
				marker.addListener('mouseover', function() {	// HIGHTLIGHT MARKER
					this.setIcon(highlightedIcon);
				});
				
				marker.addListener('mouseout', function() {	// HIGHTLIGHT MARKER
					this.setIcon(defaultIcon);
				});
			}
			/*Removed bounds*/
			
			document.getElementById('show-listings').addEventListener('click', showListings);	// SHOW-HIDE MARKERS
			document.getElementById('hide-listings').addEventListener('click', hideListings);
			
			document.getElementById('toggle-drawing').addEventListener('click', function() {	// DRAWING
				toggleDrawing(drawingManager);
			});
			
			document.getElementById('zoom-to-area').addEventListener('click', function() {	// GEOCODING - CLIENT SIDE - ZOOM
				zoomToArea();
			});
			
			document.getElementById('search-within-time').addEventListener('click', function() {	// GEOCODING - DISTANCE - TIME
				searchWithinTime();
			});
			
			searchBox.addListener('places_changed', function() {	// COMMUTE - PLACES - SEARCHBOX
				searchBoxPlaces(this);
			});
			
			document.getElementById('go-places').addEventListener('click', textSearchPlaces);	// COMMUTE - PLACES - SEARCHBOX
			
						
			drawingManager.addListener('overlaycomplete', function(event) {	// DRAWING
				if(polygon) {	// DRAWING
					polygon.setMap(null);
					hideListings();
				}
				
				drawingManager.setDrawingMode(null);	// DRAWING
				
				polygon = event.overlay;	// DRAWING
				polygon.setEditable(true);
				
				searchWithinPolygon();	// DRAWING
				
				polygon.getPath().addListener('set_at', searchWithinPolygon);	// DRAWING
				polygon.getPath().addListener('insert_at', searchWithinPolygon);
			});			
		
			function populateInfoWindow(marker, infowindow) {	// MULTIPLE MARKERS
				if(infowindow.marker != marker) {
					infowindow.marker = marker;
					infowindow.setContent('<div>' + marker.title + '</div>');
					infowindow.open(map, marker);	// infoWindow
					
					infowindow.addListener('closeclick', function() {	// infoWindow
						infowindow.setMarker(null);
					});
				}
			}
			
			function showListings() {	// SHOW-HIDE MARKERS
				var bounds = new google.maps.LatLngBounds();
				
				for(var i = 0; i < markers.length; i++) {
					markers[i].setMap(map);
					bounds.extend(markers[i].position);
				}
				map.fitBounds(bounds);
			}
			
			function hideMarkers(markers) {	// COMMUTE - PLACES - SEARCHBOX, SHOW-HIDE MARKERS
				for(var i = 0; i < markers.length; i++) {
					markers[i].setMap(null);
				}
			}
			
			
			function makeMarkerIcon(markerColor) {	// HIGHTLIGHT MARKER
				var markerImage = new google.maps.MarkerImage(
					'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|' + markerColor + '|40|_|%E2%80%A2',
					new google.maps.Size(21, 34),
					new google.maps.Point(0, 0),
					new google.maps.Point(10, 34),
					new google.maps.Size(21, 34)
				);
				return markerImage;
			}
			
			
			function toggleDrawing(drawingManager) {	// DRAWING
				if(drawingManager.map) {
					drawingManager.setMap(null);
					
					if(polygon) {
						polygon.setMap(null);	// DRAWING
					}
				} else {
					drawingManager.setMap(map);
				}
			}
			
			function searchWithinPolygon() {	// DRAWING
				for(var i = 0; i < markers.length; i++) {
					if(google.maps.geometry.poly.containsLocation(markers[i].position, polygon)) {
						markers[i].setMap(map);
					} else {
						markers[i].setMap(null);
					}
				}
			}
			
			
			function zoomToArea() {	// GEOCODING - CLIENT SIDE - ZOOM
				var geocoder = new google.maps.Geocoder();
				
				var address = document.getElementById('zoom-to-area-text').value;
				
				if(address == '') {
					window.alert('You must enter an area, or address!');
				} else {
					geocoder.geocode(
						{
							address: address,
							componentRestrictions: {locality: 'Zagreb'}
						},  function(result, status) {
								if(status == google.maps.GeocoderStatus.OK) {
									map.setCenter(results[0].geometry.location);
									map.setZoom(15);
								} else {
									window.alert('We could not find that locations - try entering a more specific place');
								}
							}
					);
				}
			}
			
			
			function searchWithinTime() {	// GEOCODING - DISTANCE - TIME
				var distanceMatrixService = new google.maps.DistanceMatrixService;
				var address = document.getElementById('search-within-time-text').value;
				
				if(address == '') {
					window.alert('You must enter an address!');
				} else {
					hideListings();
					
					var origins = [];
					for(var i = 0; i < markers.length; i++) {
						origins[i] = markers[i].position;
					}
					var destination = address;
					var mode = document.getElementById('mode').value;
					
					distanceMatrixService.getDistanceMatrix({
						origins: origins,
						destinations: [destination],
						travelMode: google.maps.TravelMode[mode],
						unitSystem: google.maps.UnitSystem.IMPERIAL,
					}, function(response, status) {
							if(status != google.mapsDistanceMatrixStatus.OK) {
								window.alert('Error was: ' + status);
							} else {
								displayMarkersWithinTime(response);
							}
					   }
					);
				}
			}
			
			
			function displayMarkersWithinTime(response) {	// GEOCODING - DISTANCE - TIME
				var maxDuration = document.getElementById('max-duration').value;
				var origins = response.originAddresses;
				var destinations = response.destinationAddresses;
				
				var atLeastOne = false;
				for(var i = 0; i < origins.length; i++) {
					var results = response.rows[i].elements;
					
					for(var j = 0; j < results.length; j++) {
						var element = results[j];
						
						if(element.status == 'OK') {
							var distanceText = element.distance.text;
							var duration = element.duration.value / 60;
							var durationText = element.duration.text;
							
							if(duration <= maxDuration) {
								markers[i].setMap(map);
								atLeastOne = true;
								
								var infowindow = new google.maps.InfoWindow({
									content: durationText + ' away, ' + distanceText +
									'<div><input type=\"button\" value=\"View Route\" onclick =' +	// COMMUTE - DISPLAYING ROUTES
									'\"displayDirections(&quot;' + origins[i] + '&quot;);\"></input></div>'
								});
								
								infowindow.open(map, markers[i]);
								markers[i].infowindow = infowindow;
								google.maps.event.addListener(markers[i], 'click', function() {
									this.infowindow.close();
								});
							}
						}
					}
				}
			}
			
			
			function displayDirections(origin) {	// COMMUTE - DISPLAYING ROUTES
				hideListings();
				var directionsService = new google.maps.DirectionsService;				
				var destinationAddress = document.getElementById('search-within-time-text').value;				
				var mode = document.getElementById('mode').value;
				
				directionsService.route({
					origin: origin,
					destination: destinationAddress,
					travelMode: google.maps.TravelMode[mode]
				}, function(response, status) {
						if(status == google.maps.DirectionsStatus.OK) {
							var directionsDisplay = new google.maps.DirectionsRenderer({
								map: map,
								directions: response,
								draggable: true,
								polylineOptions: {
									strokeColor: 'green'
								}
							});
						} else {
							window.alert('Directions request failed due to ' + status);
						}
				   }
				);
			}
			
			
			function searchBoxPlaces(searchBox) {	// COMMUTE - PLACES - SEARCHBOX
				hideMarkers(placeMarkers);
				var places = searchBox.getPlaces();
				
				createMarkersForPlaces(places);
				if(places.length == 0) {
					window.alert('We did not find any places matching that search!');
				}
			}
			
			function textSearchPlaces() {	// COMMUTE - PLACES - SEARCHBOX
				var bounds = map.getBounds();
				hideMarkers(placeMarkers);
				var placesService = new google.maps.places.PlacesService(map);
				
				placesService.textSearch({
					query: document.getElementById('places-search').value,
					bounds: bounds
				}, function(results, status) {
						if(status == google.maps.places.PlacesServiceStatus.OK) {
							createMarkersForPlaces(results);
						}
				   }
				);
			}
			
			function createMarkersForPlaces() {	// COMMUTE - PLACES - SEARCHBOX
				var bounds = new google.maps.LatLngBounds();
				for(var i = 0; i < places.length; i++) {
					var place = places[i];
					var icon = {
						url: place.icon,
						size: new google.maps.Size(35, 35),
						origin: new google.maps.Point(0, 0),
						anchor: new google.maps.Point(15, 34),
						scaledSize: new google.maps.Size(25, 25)
					};
					
					var marker = new google.maps.Marker({
						map: map,
						icon: icon,
						title: place.name,
						position: place.geometry.location,
						id: place.id
					});
					
					var placeInfoWindow = new google.maps.InfoWindow();	// COMMUTE - PLACES - PLACES DETAILS - PLACE ID
					marker.addListener('click', function() {	// COMMUTE - PLACES - PLACES DETAILS - PLACE ID
						if(placeInfoWindow.marker == this) {
							console.log("This infowindow already is on the marker!");
						} else {
							getPlacesDetails(this, placeInfoWindow);
						}
					});
					
					placeMarkers.push(marker);
					if(place.geometry.viewport) {
						bounds.union(place.geometry.viewport);
					} else {
						bounds.extend(place.geometry.location);
					}
				}
				map.fitBounds(bounds);
			}
			
			function getPlacesDetails(marker, infowindow) {	// COMMUTE - PLACES - PLACES DETAILS - PLACE ID
				var service = new google.maps.places.PlacesService(map);				
				service.getDetails({
						placeId: marker.id
					},  function(place, status) {
							if(status == google.maps.places.PlacesServiceStatus.OK) {
								infowindow.marker = marker;
								var innerHTML = '<div>';
								if(place.name) {
									innerHTML += '<strong>' + place.name + '</strong>';
								}
								if(place.formatted_address) {
									innerHTML += '<br>' + place.formatted_address;
								}
								if(place.formatted_phone_number) {
									innerHTML += '<br>' + place.formatted_phone_number;
								}
								if(place.opening_hours) {
									innerHTML += '<br><br><strong>Hours:</strong><br>' +
									place.opening_hours.weekday_text[0] + '<br>' +
									place.opening_hours.weekday_text[1] + '<br>' +
									place.opening_hours.weekday_text[2] + '<br>' +
									place.opening_hours.weekday_text[3] + '<br>' +
									place.opening_hours.weekday_text[4] + '<br>' +
									place.opening_hours.weekday_text[5] + '<br>' +
									place.opening_hours.weekday_text[6];
								}
								if(place.photos) {
									innerHMTL += '<br><br><img src"' + place.photos[0].getUrl({maxHeight: 100, maxWidth: 200}) + '">';
								}
								innerHTML += '</div>';
								infowindow.setContent(innerHTML);
								infowindow.open(map, marker);
								
								infowindow.addListener('closeclick', function() {
									infowindow.marker = null;
								});
							}
						}
				);
			}
			
		}
    </script>
    
    <script async defer
		src="https://maps.googleapis.com/maps/api/js?libraries=places,geometry,drawing&key=AIzaSyB6DGiJ9ZOK-m9-5ES0YLvcHk6AMWP5tg4&v=3&callback=initMap">	// COMMUTE - PLACES DRAWING & LIBRARIES & BASIC
    </script> 
</body>