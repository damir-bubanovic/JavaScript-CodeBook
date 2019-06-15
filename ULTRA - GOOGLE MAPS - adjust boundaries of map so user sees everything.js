/*

!!GOOGLE MAPS - ADJUST BOUNDARIES OF MAP SO USER SEES EVERYTHING!!

*/

<body>
    <div style="height:100%; width:100%; position: absolute;"> <!-- ommiting this div will show the map -->
        <div style="height:100%;" id="map"></div>
    </div>



<body>
    <div style="height:100%; width:100%; position: absolute;"> <!-- ommiting this div will show the map -->
        <div style="height:100%;" id="map"></div>
    </div>



    <script>
		/***
		Google Maps - ADJUST BOUNDARIES OF MAP SO USER SEES EVERYTHING
		
		- adjust listings outside the initial zoom area
		- original zoom of initMap() -> zoom: 15 is no longer relevant 
		
		*bounds - captures SW & NE corners of the viewport
		*bounds.extend - extend the boundaries of the map for the each marker
		*map.fitBounds - tell the map to fit itself to those bounds
		***/

		var map;
		
		
		function initMap() {	// BASIC

			var bounds = new google.maps.LatLngBounds();	// BOUNDARIES
						
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
				
				bounds.extend(marker.position);	// BOUNDARIES
				
				marker.addListener('click', function() {	// infoWindow
					populateInfoWindow(this, largeInfowindow);
				});
			}
			map.fitBounds(bounds);	// BOUNDARIES
								
		}
    </script>
    
</body>