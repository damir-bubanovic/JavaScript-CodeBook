/*

!!GOOGLE MAPS - STYLE MAPS!!

> Style reference manual
https://developers.google.com/maps/documentation/javascript/reference#MapTypeStyleFeatureType
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
		Google Maps - STYLE MAPS
		
		> ALERT < 
			-> Google Search - Google Maps API Styles
			-> https://snazzymaps.com/ - free stylized Google Maps
		
		*styles - create a stypes array to use with map
			*featureType - geographical elements that can be targeted on the map (roads, parks, lakes...)
			*elementType - feature of geographical elements you want to change (geometry, label, inner text...)
			*stylers - color & visibility properties that can be applied to the features
		*map -> styles - set the stypes property within the map object options
		*mapTypeControl - alows the user to change map type to road, terain, satelite... (true - enable / false - disable)
		***/

		var map;
		
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
		}
    </script>
    
</body>