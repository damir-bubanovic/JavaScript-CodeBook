/*

!!GOOGLE MAPS - GEOCODING - DISTANCE - BASIC!!

*/

    <script>
		/***
		Google Maps - GeoCoding - Distance
		
		- get the distance to a certain point
		
		
		*https://maps.googleapis.com/maps/api/ - all request start with the same napespace
		*distancematrix - distance API
		*json - output format (either json or xml - use json!)
		*locations=30.8681,79.0322 - lattitude & longitude of a point
		*origins=... - starting location (there can be multiple origins & destination pairs)
		*destinations=... - finish location
		*key=MYAPIKEY - custom api key you get from google maps
		
		ADDRESS - EXAMPLE:
		https://maps.googleapis.com/maps/api/distancematrix/json?origins=New+York,+NY&destinations=San+Francisco&key=AIzaSyB6DGiJ9ZOK-m9-5ES0YLvcHk6AMWP5tg4
		
		EXTRA - WITH MODE:
		https://maps.googleapis.com/maps/api/distancematrix/json?mode=bicycling&avoid=highways&
		origins=New+York,+NY&destinations=San+Francisco&key=AIzaSyB6DGiJ9ZOK-m9-5ES0YLvcHk6AMWP5tg4	
		
		
		OUTPUT:
		*status - OK (request is sucessfull), INVALID REQUEST (something not right in request), UNKNOW ERROR (error on the server, repeat request)
		*elements - in our case is 1 element 
			(element is 1 origin & destination pair)
		*distance - distance for travel
			> value - defaults to meters
		*duration - duration of travel
			> value - defaults to seconds
		*travelmode - in our case is not specified, so the default is driving
		EXTRA:
		*mode=... - means of transportation
			> mode=transit&transit_mode=rail - travel by rail
		*avoid=... - avoid certain roads
		
		{
		   "destination_addresses" : [ "San Francisco, CA, USA" ],
		   "origin_addresses" : [ "New York, NY, USA" ],
		   "rows" : [
			  {
				 "elements" : [
					{
					   "distance" : {
						  "text" : "4,670 km",
						  "value" : 4669670
					   },
					   "duration" : {
						  "text" : "1 day 18 hours",
						  "value" : 152815
					   },
					   "status" : "OK"
					}
				 ]
			  }
		   ],
		   "status" : "OK"
		}
		***/
	</script>