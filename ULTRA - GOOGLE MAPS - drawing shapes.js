/*

!!GOOGLE MAPS - DRAWING!!

> Documentation
https://developers.google.com/maps/documentation/javascript/libraries
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
		/***
		Google Maps - DRAWING
		
		*libraries=drawing - load the library for drawing
		*drawingManager - initiate the drawing manager
		*drawingModes - specisify drawing modes (in our case POLYGON, other -> Rectangle, Circle, Polyline & Marker)
		*position - position of the controls on the map
		*<HTML> toggle-drawing - button to toggle drawing on & off
		*('toggle-drawing').addEventListener - when the buttons is clicked drawing tools are hidden or shown
		*toggleDrawing - function to enagle drawing tools (null - hide, map - show)
		*polygon - global polygon variable to ensure only ONE polygon is renderes
		*addListener('overlaycomplete') - 	when the polygon is drawn on the map to catch those points & use them, call the 
											searchWithinPolygon function. This will show markers in the polygon, and hide any outside of it
				*polygon - check if there is an existing polygon, if there is remove it & remove the markers
				*setDrawingMode(null) 	- switch the drawing mode to the HAND (i.e. no longer drawing)
										- do this when the polygon is completed
				*polygon 	- creating a new editable polygon from the overlay
							- capture the overlay & assign it to polygon var
							- we also want the polygon to be editable (set to true) & it is dragable
				*searchWithinPolygon() - call this function that was created below
				*addListener('set_at') & ('insert_at')	- redo the search if the polygon is edited (checking for changes)
														- these are listeners for polygon
		*searchWithinPolygon - function hides all markers outside the polygon & shows only the ones within
		*toggleDrawing -> second if polygon - if user hides drawing tools get rid of polygon
		***/

		var map;
		
		var polygon = null;	// DRAWING
		
		function initMap() {
			
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