/*

!!GOOGLE MAPS - GEOCODING - COMMUTE - PLACES - basic!!

*/

<body>
<div class="container"><!-- SHOW-HIDE MARKERS -->
	<div class="options-box">
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
		
		var placeMarkers = [];	// COMMUTE - PLACES - SEARCHBOX
		
		function initMap() {	// BASIC
		
			
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

			
			searchBox.addListener('places_changed', function() {	// COMMUTE - PLACES - SEARCHBOX
				searchBoxPlaces(this);
			});
			
			document.getElementById('go-places').addEventListener('click', textSearchPlaces);	// COMMUTE - PLACES - SEARCHBOX
			
			
			function hideMarkers(markers) {	// COMMUTE - PLACES - SEARCHBOX, SHOW-HIDE MARKERS
				for(var i = 0; i < markers.length; i++) {
					markers[i].setMap(null);
				}
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