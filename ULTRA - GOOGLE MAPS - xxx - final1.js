/*

!!GOOGLE MAPS - XXX - FINAL1!!

*/

<body>
<div class="container"><!-- SHOW-HIDE MARKERS -->
	<div class="options-box">
    	<h1>Find your Zagreb Home</h1>
        <div>
        	<input id="show-listings" type="button" value="Show Listings">
            <input id="hide-listings" type="button" value="Hide Listings">
            <hr>
            <span class="text">Draw a shape to search within it for homes!</span>
            <input id="toggle-drawing" type="button" value="Drawing Tools"> <!-- DRAWING -->
        </div>
    </div>
    <div style="height:100%; width:100%; position: absolute;"> <!-- ommiting this div will show the map -->
        <div style="height:100%;" id="map"></div>
    </div>
</div>


    <script>

		var map;
		
		var markers = [];	// MULTIPLE MARKERS
		
		var polygon = null;	// DRAWING
		
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
			

			var locations = [	// MULTIPLE MARKERS
				{title: 'Mia Cassa', location: {lat: 45.80466555, lng: 15.95497549}},
				{title: 'Caffe Bar Nostalgia', location: {lat: 45.80396811, lng: 15.95389456}},
				{title: 'Don Quijote', location: {lat: 45.80374373, lng: 15.9531489}}
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
			
			function hideListings() {	// SHOW-HIDE MARKERS
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
		}
    </script>
    
    <script async defer
		src="https://maps.googleapis.com/maps/api/js?libraries=drawing&key=AIzaSyB6DGiJ9ZOK-m9-5ES0YLvcHk6AMWP5tg4&v=3&callback=initMap">	// DRAWING & LIBRARIES & BASIC
    </script> 
</body>