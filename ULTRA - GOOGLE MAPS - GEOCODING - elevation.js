/*

!!GOOGLE MAPS - GEOCODING - ELEVATION!!

*/

    <script>
		/***
		Google Maps - GeoCoding - Elevation
		
		- get the elevation of a certain point
		
		
		*https://maps.googleapis.com/maps/api/ - all request start with the same namespace
		*elevation - elevation API
		*json - output format (either json or xml - use json!)
		*locations=30.8681,79.0322 - lattitude & longitude of a point
		*key=MYAPIKEY - custom api key you get from google maps
		
		ADDRESS - EXAMPLE:
		https://maps.googleapis.com/maps/api/elevation/json?locations=30.8681,79.0322&key=AIzaSyB6DGiJ9ZOK-m9-5ES0YLvcHk6AMWP5tg4	
		
		
		OUTPUT:
		*status - OK (request is sucessfull), INVALID REQUEST (something not right in request), UNKNOW ERROR (error on the server, repeat request)
		
		{
		   "results" : [
			  {
				 "elevation" : 6527.14306640625,
				 "location" : {
					"lat" : 30.8681,
					"lng" : 79.0322
				 },
				 "resolution" : 152.7032318115234
			  }
		   ],
		   "status" : "OK"
		}
		***/
	</script>