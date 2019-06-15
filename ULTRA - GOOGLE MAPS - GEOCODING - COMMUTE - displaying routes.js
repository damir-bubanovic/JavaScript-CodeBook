/*

!!GOOGLE MAPS - GEOCODING - COMMUTE - DISPLAYING ROUTES!!

*/

    <script>
		/***
		Google Maps - GEOCODING - COMMUTE - DISPLAYING ROUTES
			- route to get to listings
			
		> ALERT < 
			certain features become available only if you purchase google.maps API licence
		
		*<HTML in SCRIPT> - button to view route inside infowindow
				- origins is listings adress
				- destination is user input adress
		*displayDirections 	- response to the user selecting "show route" on the markers within the calculated distance
							- displays route on the map
				*directionsService - initialize this google.maps service
				*destinationAddress - recapture user input destination
				*mode - recapture user input travel mode
				*directionsService - calculate the route
				*function(response, statut) - when we get back the response, create the new directions renderer
		***/

		
		function initMap() {	// BASIC
			
				
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
		}
    </script>