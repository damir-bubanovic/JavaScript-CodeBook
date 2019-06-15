/*

!!GOOGLE MAPS - GEOCODING - DISTANCE - TIME!!

*/

    <script>
		/***
		Google Maps - GEOCODING - DISTANCE - TIME
		
		> ALERT <
			Za sada ne funkcionira
		
		- how long does it take to get to a certain place depending on the means of transportation
		
		*<HTML> max-duration - choose maximum time to travel
		*<HTML> mode - chose means of transportation
		*<HTML> search-within-time - input the adress you are interested in
		*('search-within-time').addEventListener - on click execute cutom funtion
		*searchWithinTime - input desired travel time in minutes, travel mode & location & only show
			markers that are within that travel time (via that travel mode of the location)
			*distanceMatrixService - initialize distance matrix service
			*if(address) - if empty alert
			*for() - calculate the duration ot he routes between all the markers & the destination address
			entered by the user. Than put all the origins into an origin matrix
			*.getDistanceMatrix - now that all the origins & destinations are defined, get all the info
			for the distances between them
		*displayMarkersWithinTime - go through each of the results & if distance is less than value in the picker, show it on the map
			*recapture *origins & *distances & *maxDuration -> user input max travel distance
			*for() - make sure that at least 1 result is found
			*for() -> if() -> distance is returned in feet, but the TEXT is in miles
			*duration - duration is returned in seconds & we make it in minutes
			*if() - compare duration with max duration, if the duration is within than maximum value than display the marker on the map
			*infowindow - create a mini infowindow to open imediatley & display the distance & duration
			*addListener - close little infowindow on click & open big with view street panorama (nisi ovo napravio)
		***/

		
		function initMap() {	// BASIC
			
			
			document.getElementById('search-within-time').addEventListener('click', function() {	// GEOCODING - DISTANCE - TIME
				searchWithinTime();
			});
			
			
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
									content: durationText + ' away, ' + distanceText
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
			
		}
    </script>
 
</body>
</html>