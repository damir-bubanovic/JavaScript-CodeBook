/*

!!GOOGLE MAPS - SINGLE MARKER & INFOWINDOW!!

*/

<body>
    <div style="height:100%; width:100%; position: absolute;"> <!-- ommiting this div will show the map -->
        <div style="height:100%;" id="map"></div>
    </div>



	
	/***
	Google Maps - MARKER
	
	- Markers can be constructed on the initialized action or in a action like clicking a button
	
	*home - Custom Marker Coordinates
	*marker - Creating Marker (new marker instance) 
		- we can specify dragable, animation...
		*position - where shoul marker apear
		*map - // map where it should apear on div id 'map'
	***/
	
	/***
	Google Maps - INFOWINDOW
	
	*infowindow - add content for the infoindow	
	*addListener - Add event listener so he can know when & where to open
		*infowindow.open - map - where, marker - on witch to anchor it (optional argument) or position property for place to open
	***/
    <script>
    	var map;
		function initMap() {
			
			/*MARKER*/
			var home = {lat: 45.80466555, lng: 15.95497549};	// MARKER

			var marker = new google.maps.Marker({	// MARKER
				position: home,
				map: map,
				title: 'Home Marker!'
			});
			
			/*INFO WINDOW*/
			var infowindow = new google.maps.InfoWindow({	// infoWindow
				content: 'My Home BIATCH!!!'
			});

			marker.addListener('click', function() {	// infoWindow
				infowindow.open(map, marker);
			});
		}
    </script>
	
</body>