/*

!!GOOGLE MAPS - MULTIPLE MARKERS & INFOWINDOWS!!

*/

<body>
    <div style="height:100%; width:100%; position: absolute;"> <!-- ommiting this div will show the map -->
        <div style="height:100%;" id="map"></div>
    </div>



    <script>
		/***
		Google Maps - MULTIPLE MARKERS
		
		*markers - GLOBAL Empty Array for Multiple Markers
		*locations - Bunch of Locations
			- use database & serve information to the site			
		*loop (for) - cycle through array of markers & locations on initialize
			*position - get the position from the location array
			*marker... - create a marker per location, and put into markers array
		*markers.push - push the marker to our array of markers
		*addListener - create an onclick event to open an infowindow at each marker (does not work)
		*populateInfoWindow - custom function to populate each infowindow
			- setting the content of the infowindow to the marker title & opening the infowindow on that marker
			- populates the infowindow when the marker is clicked, well only allow one infowindow which will open at the marker
			that is clicked, and popilate based on markers position
			*first if - checking to make sure the infowindow is not already opened on this marker
			*all with closeclick - make sure the marker property is cleared if the window is closed.
		***/
		
		var map;
		
		var markers = [];	// MULTIPLE MARKERS
		
		function initMap() {

			var locations = [	// MULTIPLE MARKERS
				{title: 'Mia Cassa', location: {lat: 45.80466555, lng: 15.95497549}},
				{title: 'Caffe Bar Nostalgia', location: {lat: 45.80396811, lng: 15.95389456}},
				{title: 'Don Quijote', location: {lat: 45.80374373, lng: 15.9531489}}
			];
		
			var largeInfowindow = new google.maps.InfoWindow();	// infoWindow
			
			for(var i = 0; i < locations.length; i++) {	// MULTIPLE MARKERS
				var position = locations[i].location;
				var title = locations[i].title;
				
				var marker = new google.maps.Marker({	// MARKER
					map: map,
					position: position,
					title: title,
					animation: google.maps.Animation.DROP,
					id: i					
				});
				
				markers.push(marker);	// MULTIPLE MARKERS
				
				marker.addListener('click', function() {	// MULTIPLE MARKERS
					populateInfoWindow(this, largeInfowindow);
				});
			}
			
		
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
		}
    </script>

</body>