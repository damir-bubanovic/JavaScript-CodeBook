/*

!!GOOGLE MAPS - LIBRARIES!!

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
        </div>
    </div>
    <div style="height:100%; width:100%; position: absolute;"> <!-- ommiting this div will show the map -->
        <div style="height:100%;" id="map"></div>
    </div>
</div>


    <script>
		/***
		Google Maps - LIBRARIES
		
		- very usefull when you use them, but take a lot of extra space
		- with map API libraries you only load what you need

		*libraries=geometry - loading geomerty libraries API
		*libraries=geometry - you can create heat maps & other visualisation thingies
		***/

		var map;
		
		function initMap() {

		}
    </script>
    
    <script async defer
		src="https://maps.googleapis.com/maps/api/js?libraries=geometry&key=AIzaSyB6DGiJ9ZOK-m9-5ES0YLvcHk6AMWP5tg4&v=3&callback=initMap">	// LIBRARIES & BASIC
    </script> 
</body>