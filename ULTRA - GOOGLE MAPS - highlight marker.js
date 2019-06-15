/*

!!GOOGLE MAPS - HIGHTLIGHT MARKER!!

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
		Google Maps - OH HOVER HIGHTLIGHT MARKER
		
		- great for multiple markers / icons (easier selection)
		
		*defaultIcon - default icon that appears when markers appear on the map
		*highlightedIcon - highlighted icon that appears when you hover over marker
		*makeMarkerIcon - custom function
			- take any marker & create a marker object
			- function takes marker color & creates a new marker image
		*for loop for markers -> icon - set icon for each icon to default icon
		*add 2 event listeners (mouseover & mouseout)
		***/

		var map;
		
		function initMap() {
			
			var defaultIcon = makeMarkerIcon('0091ff');	// HIGHTLIGHT MARKER
			
			var highlightedIcon = makeMarkerIcon('FFFF24');	// HIGHTLIGHT MARKER
			
						
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
				
				marker.addListener('mouseover', function() {	// HIGHTLIGHT MARKER
					this.setIcon(highlightedIcon);
				});
				
				marker.addListener('mouseout', function() {	// HIGHTLIGHT MARKER
					this.setIcon(defaultIcon);
				});
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
		}
    </script>

</body>