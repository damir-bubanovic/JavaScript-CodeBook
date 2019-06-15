/*

!!GOOGLE MAPS - SHOW / HIDE MARKERS!!

*/

<body>
<div class="container"><!-- SHOW-HIDE MARKERS -->
	<div class="options-box">
    	<h1>Find your Zagreb Home</h1>
        <div>
        	<input id="show-listings" type="button" value="Show Listings">
            <input id="hide-listings" type="button" value="Hide Listings">
        </div>
    </div>
    <div style="height:100%; width:100%; position: absolute;"> <!-- ommiting this div will show the map -->
        <div style="height:100%;" id="map"></div>
    </div>
</div>


    <script>
		/***
		Google Maps - SHOW-HIDE MARKERS
		
		*<HTML> Buttons - add 2 buttons for show & hide listings (CSS not crutial)
		*addEventListener - on click show or hide markers
		*ALERT - removed some thing (map & bounds to transport them to custom functions)
		*showListings - loop through the markers array & display them all
			*setMap - set map to map
			*bounds.extend - extend bounds to markers
			*fitBounds - fit bounds for user
		*hideListings - loop through the markers array & hide them all
		***/

		var map;
		
		function initMap() {	// BASIC
						
			for(var i = 0; i < locations.length; i++) {	// MULTIPLE MARKERS
				var position = locations[i].location;
				var title = locations[i].title;
				
				/*Removed map parameter*/
				var marker = new google.maps.Marker({	// SHOW-HIDE MARKERS & MARKER
					position: position,
					title: title,
					animation: google.maps.Animation.DROP,
					id: i					
				});
				
				markers.push(marker);	// MULTIPLE MARKERS
				
				bounds.extend(marker.position);	// BOUNDARIES
				
				marker.addListener('click', function() {	// infoWindow
					populateInfoWindow(this, largeInfowindow);
				});
			}
			/*Removed bounds*/
			
			document.getElementById('show-listings').addEventListener('click', showListings);	// SHOW-HIDE MARKERS
			document.getElementById('hide-listings').addEventListener('click', hideListings);
			
			function showListings() {	// SHOW-HIDE MARKERS
				var bounds = new google.maps.LatLngBounds();
				
				for(var i = 0; i < markers.length; i++) {
					markers[i].setMap(map);
					bounds.extend(markers[i].position);
				}
				map.fitBounds(bounds);
			}
			
			function hideListings() {	// SHOW-HIDE MARKERS
				for(var i = 0; i < markers.length; i++) {
					markers[i].setMap(null);
				}
			}
		}
    </script>
 
</body>