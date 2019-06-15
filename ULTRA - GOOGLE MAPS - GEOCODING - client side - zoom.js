/*

!!GOOGLE MAPS - GEOCODING - CLIENT SIDE - ZOOM!!

> ALERT < 
	- ne funkcionira mi???????????
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
        <hr>
        <div>
        	<input id="zoom-to-area-text" type="text" placeholder="Enter your favourite area!">	<!-- GEOCODING - CLIENT SIDE -->
            <input id="zoom-to-area" type="button" value="Zoom">
        </div>
    </div>
    <div style="height:100%; width:100%; position: absolute;"> <!-- ommiting this div will show the map -->
        <div style="height:100%;" id="map"></div>
    </div>
</div>


    <script>
		/***
		Google Maps - GEOCODING - CLIENT SIDE - ZOOM
		
		- do a search based on location or a grid & zoom to that area
		- ucefull if we have a ton of markers / listings
		
		*<HTML> zoom - user input for zoom to area
		*addEventListener('zoom-to-area') - execute custom function zoomToArea on click
		*zoomToArea - takes the input value in the find nearby area text box, locates it, and zooms into that area
			*geocoder - initialize the geocoder
			*address - get the adress or place that the user entered
			*if(address) - make sure the adress is not blank
			*componentRestrictions - so you can not enter address outside of that area
			*if(status) - if status ok re-center map
				- you usually get multiple results so always use the best result / first result / aka result[0]
		***/

		var map;
		
		function initMap() {	// BASIC
			
			document.getElementById('zoom-to-area').addEventListener('click', function() {	// GEOCODING - CLIENT SIDE - ZOOM
				zoomToArea();
			});
			

			function zoomToArea() {	// GEOCODING - CLIENT SIDE - ZOOM
				var geocoder = new google.maps.Geocoder();
				
				var address = document.getElementById('zoom-to-area-text').value;
				
				if(address == '') {
					window.alert('You must enter an area, or address!');
				} else {
					geocoder.geocode(
						{
							address: address,
							componentRestrictions: {locality: 'Zagreb'}
						},  function(result, status) {
								if(status == google.maps.GeocoderStatus.OK) {
									map.setCenter(results[0].geometry.location);
									map.setZoom(15);
								} else {
									window.alert('We could not find that locations - try entering a more specific place');
								}
							}
					);
				}
			}
			
		}
    </script>
    
    <script async defer
		src="https://maps.googleapis.com/maps/api/js?libraries=drawing&key=AIzaSyB6DGiJ9ZOK-m9-5ES0YLvcHk6AMWP5tg4&v=3&callback=initMap">	// DRAWING & LIBRARIES & BASIC
    </script> 
</body>