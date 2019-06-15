/*

!!GOOGLE MAPS - BASIC!!

> ALERT < 
	You need these css rules for map to work
	
- JavaScript files can be in the head or end of body (You decide)
*/

<body>
    <div style="height:100%; width:100%; position: absolute;"> <!-- ommiting this div will show the map -->
        <div style="height:100%;" id="map"></div>
    </div>



	
	/***
	Google Maps - SCRIPT INFO 1
	
	- initialize map
	
	*map - map variable
    *document.getElementById('map') - where to load the map
    *center - latitude & longitude of the starting location
    *initMap - initialized JavaScript function to load the map (center)
    *zoom 	- how much detail of the map to show
    		- 1 (World), 5 (Landmass/continent), 10 (City), 15 (Streets), 20 (Buildings)
	***/
    <script>
    	var map;
		function initMap() {	// SCRIPT INFO 1
			// Constructor creates a new map - only center $ zoom are required
			map = new google.maps.Map(document.getElementById('map'), {
				center: {lat: 45.8150108, lng: 15.981919},
				zoom: 13
			}); 
		}
    </script>
    
	/***
	Google Maps - SCRIPT INFO 2
	*async 	- downloads the file during HTML parsing and will pause the HTML parser to execute it when it has finished downloading
    		- rest of the page renders while the JavaScript API loads
            - gives you more speed, because it lets your page load first while it loads JavaScript
    *defer 	- downloads the file during HTML parsing and will only execute it after the parser has completed
    *callback	- execute (API) when the API is done loading
    			- if you are not going to use imediately, put it into a function and call it when you plan to use it
    *v=3	- we are calling version 3 of the API
    *key= 	- API key you created)
	***/
	
    <script async defer
		src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB6DGiJ9ZOK-m9-5ES0YLvcHk6AMWP5tg4&v=3&callback=initMap">	// SCRIPT INFO 2
    </script>   
</body>