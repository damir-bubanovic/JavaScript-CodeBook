/*

!!GOOGLE MAPS - GEOCODING!!

*/

    <script>
		/***
		Google Maps - GeoCoding
		
		- geocoding - taking an adress & getting a lattitude + longitude
		- reverse geocoding - getting an adress from lattitude + longitude
		
		> test geocoding API via HTTP Request
		
		LOOK UP
		https://developers.google.com/maps/documentation/geocoding/intro#Types
		***/
		
		/*
		ADRESS:
		https://maps.googleapis.com/maps/api/geocode/json?address=775+Park+Avenue,+New+York&key=MYAPIKEY
		
		*https://maps.googleapis.com/maps/api/ - all request start with the same napespace
		*geocode - specify the service
		*json - output format (either json or xml - use json!)
		*?address=775+Park+Avenue,+New+York&key=MYAPIKEY 	- input parameters (requred parameters here are only adress & api key)
															- you can also include paramterers like:
																> konponent restrictions - limit the results to city or country
																> region bias - certain regions are bether then others for the results that I expect
		*/

		/*
		MY ADRESS - EXAMPLE:
		https://maps.googleapis.com/maps/api/geocode/json?&address=Zagreb+Kalni%C4%8Dka+ulica+17
		
		*status - OK (request is sucessfull), INVALID REQUEST (something not right in request), UNKNOW ERROR (error on the server, repeat request)
		*address_component - has elements broken down to street, town, neighbourhood, country, state...
					*for reverse geocoding to specify lat long we are looking for this data
		*formatted_address - we can use on its on
		*geometry - lat & long of place
					*location - lat & lonf for our use
					*location_type - tell us about the point we got back 
						(ROOFTOP - exact match of our location, RANGE INTERPOLATED - aproximate location, GEOMETRIC CENTER - center of a line - road without adress)
		*place_id - unique identifier for any place
		
		OUTPUT:

		{
		   "results" : [
			  {
				 "address_components" : [
					{
					   "long_name" : "17",
					   "short_name" : "17",
					   "types" : [ "street_number" ]
					},
					{
					   "long_name" : "Kalnička ulica",
					   "short_name" : "Kalnička ul.",
					   "types" : [ "route" ]
					},
					{
					   "long_name" : "Zagreb",
					   "short_name" : "Zagreb",
					   "types" : [ "locality", "political" ]
					},
					{
					   "long_name" : "City of Zagreb",
					   "short_name" : "City of Zagreb",
					   "types" : [ "administrative_area_level_1", "political" ]
					},
					{
					   "long_name" : "Croatia",
					   "short_name" : "HR",
					   "types" : [ "country", "political" ]
					},
					{
					   "long_name" : "10000",
					   "short_name" : "10000",
					   "types" : [ "postal_code" ]
					}
				 ],
				 "formatted_address" : "Kalnička ul. 17, 10000, Zagreb, Croatia",
				 "geometry" : {
					"location" : {
					   "lat" : 45.8046731,
					   "lng" : 15.9551939
					},
					"location_type" : "ROOFTOP",
					"viewport" : {
					   "northeast" : {
						  "lat" : 45.8060220802915,
						  "lng" : 15.9565428802915
					   },
					   "southwest" : {
						  "lat" : 45.8033241197085,
						  "lng" : 15.9538449197085
					   }
					}
				 },
				 "place_id" : "ChIJ-_GDuOnWZUcRJRb4L-KW5lw",
				 "types" : [ "street_address" ]
			  }
		   ],
		   "status" : "OK"
		}

		*/
	</script>