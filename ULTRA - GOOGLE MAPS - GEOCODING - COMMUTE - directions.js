/*

!!GOOGLE MAPS - GEOCODING - COMMUTE - DIRECTIONS!!

*/

    <script>
		/***
		Google Maps - GEOCODING - COMMUTE - DIRECTIONS
		
		ADDRESS - EXAMPLE:
		https://maps.googleapis.com/maps/api/directions/json?mode=transit&origin=Brooklyn&destination=75+9TH+AV,+New+York,NY&key=AIzaSyB6DGiJ9ZOK-m9-5ES0YLvcHk6AMWP5tg4
		*directions - directions API
		*mode= - travel vehicle
		*origin & destination - single origin & destination (also lat-long coordinates)
		*key - API key
		
		ANSWER:
		*routes
			*legs 	- only 1 if you did not specify waypoints (waypoints - like pitstops)
					- each leg has a duration & distance & start & end location & 1 or more steps (smallest unit of instruction)
					- overview polyline - for displaying route on map
			
			
		{
		   "geocoded_waypoints" : [
			  {
				 "geocoder_status" : "OK",
				 "place_id" : "ChIJCSF8lBZEwokRhngABHRcdoI",
				 "types" : [ "political", "sublocality", "sublocality_level_1" ]
			  },
			  {
				 "geocoder_status" : "OK",
				 "place_id" : "ChIJyYfhZ79ZwokRMtXcL6CYxkA",
				 "types" : [ "premise" ]
			  }
		   ],
		   "routes" : [
			  {
				 "bounds" : {
					"northeast" : {
					   "lat" : 40.7428759,
					   "lng" : -73.94415339999999
					},
					"southwest" : {
					   "lat" : 40.678183,
					   "lng" : -74.010187
					}
				 },
				 "copyrights" : "Map data ©2016 Google",
				 "legs" : [
					{
					   "arrival_time" : {
						  "text" : "7:49am",
						  "time_zone" : "America/New_York",
						  "value" : 1466941766
					   },
					   "departure_time" : {
						  "text" : "7:14am",
						  "time_zone" : "America/New_York",
						  "value" : 1466939672
					   },
					   "distance" : {
						  "text" : "7.2 mi",
						  "value" : 11663
					   },
					   "duration" : {
						  "text" : "35 mins",
						  "value" : 2094
					   },
					   "end_address" : "75 9th Ave, New York, NY 10011, USA",
					   "end_location" : {
						  "lat" : 40.7428759,
						  "lng" : -74.00584719999999
					   },
					   "start_address" : "Brooklyn, NY, USA",
					   "start_location" : {
						  "lat" : 40.678183,
						  "lng" : -73.94416129999999
					   },
					   "steps" : [
						  {
							 "distance" : {
								"text" : "0.4 mi",
								"value" : 700
							 },
							 "duration" : {
								"text" : "9 mins",
								"value" : 568
							 },
							 "end_location" : {
								"lat" : 40.6805775,
								"lng" : -73.9497205
							 },
							 "html_instructions" : "Walk to Nostrand Av",
							 "polyline" : {
								"points" : "s}gwF~eibMOA[hP]dPqACgCM{BK?V_AN"
							 },
							 "start_location" : {
								"lat" : 40.678183,
								"lng" : -73.94416129999999
							 },
							 "steps" : [
								{
								   "distance" : {
									  "text" : "26 ft",
									  "value" : 8
								   },
								   "duration" : {
									  "text" : "1 min",
									  "value" : 6
								   },
								   "end_location" : {
									  "lat" : 40.6782551,
									  "lng" : -73.94415339999999
								   },
								   "html_instructions" : "Head \u003cb\u003enorth\u003c/b\u003e on \u003cb\u003eBrooklyn Ave\u003c/b\u003e toward \u003cb\u003eAtlantic Ave\u003c/b\u003e",
								   "polyline" : {
									  "points" : "s}gwF~eibMOA"
								   },
								   "start_location" : {
									  "lat" : 40.678183,
									  "lng" : -73.94416129999999
								   },
								   "travel_mode" : "WALKING"
								},
								{
								   "distance" : {
									  "text" : "0.3 mi",
									  "value" : 467
								   },
								   "duration" : {
									  "text" : "6 mins",
									  "value" : 357
								   },
								   "end_location" : {
									  "lat" : 40.6785498,
									  "lng" : -73.9496743
								   },
								   "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eAtlantic Ave\u003c/b\u003e",
								   "maneuver" : "turn-left",
								   "polyline" : {
									  "points" : "c~gwF|eibM[hP]dP"
								   },
								   "start_location" : {
									  "lat" : 40.6782551,
									  "lng" : -73.94415339999999
								   },
								   "travel_mode" : "WALKING"
								},
								{
								   "distance" : {
									  "text" : "0.1 mi",
									  "value" : 190
								   },
								   "duration" : {
									  "text" : "2 mins",
									  "value" : 136
								   },
								   "end_location" : {
									  "lat" : 40.680262,
									  "lng" : -73.949635
								   },
								   "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eBirdel's Records Way\u003c/b\u003e/\u003cb\u003eNostrand Ave\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the left\u003c/div\u003e",
								   "maneuver" : "turn-right",
								   "polyline" : {
									  "points" : "}_hwFlhjbMqACgCM{BK?V"
								   },
								   "start_location" : {
									  "lat" : 40.6785498,
									  "lng" : -73.9496743
								   },
								   "travel_mode" : "WALKING"
								},
								{
								   "distance" : {
									  "text" : "115 ft",
									  "value" : 35
								   },
								   "duration" : {
									  "text" : "1 min",
									  "value" : 69
								   },
								   "end_location" : {
									  "lat" : 40.6805775,
									  "lng" : -73.9497205
								   },
								   "polyline" : {
									  "points" : "sjhwFfhjbM_AN"
								   },
								   "start_location" : {
									  "lat" : 40.680262,
									  "lng" : -73.949635
								   },
								   "travel_mode" : "WALKING"
								}
							 ],
							 "travel_mode" : "WALKING"
						  },
						  {
							 "distance" : {
								"text" : "6.5 mi",
								"value" : 10404
							 },
							 "duration" : {
								"text" : "20 mins",
								"value" : 1200
							 },
							 "end_location" : {
								"lat" : 40.7399508,
								"lng" : -74.00273899999999
							 },
							 "html_instructions" : "Subway towards Inwood - 207 St",
							 "polyline" : {
								"points" : "slhwFvhjbMb@BGhCS|JAP?RAPARARARARCTARCTCTCTCTCTET{BnQwJdw@aA|HCLALCJCLCLALEJCLCLCLCLEJELCLEJwLla@yBhHEPGPCPEPEPCRCPAPCPARAPAP?R?P?Rh@dJ@X@X@V@V?V?V?VATAVATARCTCRCTERWnAADAF?FADAFAFCFADAFAFCFAFAFCFAFi@pBELCLELELCLCLELCLELCLELCLELCLCLELCNENCLCLENELCNELENCLENELCNELiA|DyDzMKTMRMNMNOJOHODQDQ@Q?SASESGSIUKo@_@ICIEICICICICIAICIAIAIAI?IAI?I?_CGA?A?iGKE?GAE?G?EAE?G?EAG?E?GAE?G?GAE?YCE?EAE?GAE?E?EAE?G?E?GAE?G?E?G?aOYm@@k@Fg@Je@La@R_@T[XY\\U`@Sd@Oh@Kl@Ip@Gr@Cx@GrFExC?VAVATAVATCTATCTCTCRCTERCRERERuDnS[pA[pA_@lA_@jAa@fAc@dAe@`Ag@~@g@z@i@x@k@t@m@r@o@n@o@l@q@j@e^dWKHMJKHKJKJKLKJILKNINILIPINGPIPuDdJmExKKRMNMNMJMHMFOBOBO?OCQCOGQIQKQMuImGqWiRMGKIMGMEMEMEMEMCMCMAMAOAM?MAO@oIJG?{DJK@M?K?M?K?K?KAK?KAKAKCIAKCIAKCiUaHuMkEGCGAGCGCIAGCICGEICICIEICIEIEKEsHgDCAECEACAECEACCEACCECECCAECECECyE_DEACC_EkCMGMGMEMCMAMAMAM?M@M@MBOBMDMFOFsZnOMHODODODO@O@O?M?OAOCOEMEOGEASx@"
							 },
							 "start_location" : {
								"lat" : 40.6805775,
								"lng" : -73.9497205
							 },
							 "transit_details" : {
								"arrival_stop" : {
								   "location" : {
									  "lat" : 40.7399508,
									  "lng" : -74.00273899999999
								   },
								   "name" : "14 St"
								},
								"arrival_time" : {
								   "text" : "7:44am",
								   "time_zone" : "America/New_York",
								   "value" : 1466941440
								},
								"departure_stop" : {
								   "location" : {
									  "lat" : 40.6805775,
									  "lng" : -73.9497205
								   },
								   "name" : "Nostrand Av"
								},
								"departure_time" : {
								   "text" : "7:24am",
								   "time_zone" : "America/New_York",
								   "value" : 1466940240
								},
								"headsign" : "Inwood - 207 St",
								"line" : {
								   "agencies" : [
									  {
										 "name" : "MTA New York City Transit",
										 "phone" : "1 (718) 330-1234",
										 "url" : "http://www.mta.info/"
									  }
								   ],
								   "color" : "#3949ab",
								   "icon" : "//maps.gstatic.com/mapfiles/transit/iw2/6/us-ny-mta/A.png",
								   "name" : "8 Avenue Express",
								   "short_name" : "A",
								   "text_color" : "#ffffff",
								   "url" : "http://web.mta.info/nyct/service/pdf/tacur.pdf",
								   "vehicle" : {
									  "icon" : "//maps.gstatic.com/mapfiles/transit/iw2/6/subway2.png",
									  "name" : "Subway",
									  "type" : "SUBWAY"
								   }
								},
								"num_stops" : 8
							 },
							 "travel_mode" : "TRANSIT"
						  },
						  {
							 "distance" : {
								"text" : "0.3 mi",
								"value" : 559
							 },
							 "duration" : {
								"text" : "5 mins",
								"value" : 326
							 },
							 "end_location" : {
								"lat" : 40.7428759,
								"lng" : -74.00584719999999
							 },
							 "html_instructions" : "Walk to 75 9th Ave, New York, NY 10011, USA",
							 "polyline" : {
								"points" : "u_twFbttbM_GmELJwCfJMb@{@lCuBtG"
							 },
							 "start_location" : {
								"lat" : 40.7399508,
								"lng" : -74.00273899999999
							 },
							 "steps" : [
								{
								   "distance" : {
									  "text" : "0.1 mi",
									  "value" : 166
								   },
								   "duration" : {
									  "text" : "1 min",
									  "value" : 38
								   },
								   "end_location" : {
									  "lat" : 40.741235,
									  "lng" : -74.00171499999999
								   },
								   "polyline" : {
									  "points" : "u_twFbttbM_GmE"
								   },
								   "start_location" : {
									  "lat" : 40.7399508,
									  "lng" : -74.00273899999999
								   },
								   "travel_mode" : "WALKING"
								},
								{
								   "distance" : {
									  "text" : "0.2 mi",
									  "value" : 393
								   },
								   "duration" : {
									  "text" : "5 mins",
									  "value" : 288
								   },
								   "end_location" : {
									  "lat" : 40.7428759,
									  "lng" : -74.00584719999999
								   },
								   "html_instructions" : "Head \u003cb\u003enorthwest\u003c/b\u003e on \u003cb\u003eW 16th St\u003c/b\u003e toward \u003cb\u003e9th Ave\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the left\u003c/div\u003e",
								   "polyline" : {
									  "points" : "ugtwFtmtbMLJwCfJMb@{@lCuBtG"
								   },
								   "start_location" : {
									  "lat" : 40.741235,
									  "lng" : -74.00171499999999
								   },
								   "travel_mode" : "WALKING"
								}
							 ],
							 "travel_mode" : "WALKING"
						  }
					   ],
					   "traffic_speed_entry" : [],
					   "via_waypoint" : []
					}
				 ],
				 "overview_polyline" : {
					"points" : "s}gwF~eibMOA[hP]dPqACcGY?V_ANb@BGhCUnKElAYhDiQfvA_@lBUr@_Qzk@ShAKhAChAl@lLB~AEzAMrAa@pBOz@aAtDoAbFg@tBUz@cGxSYh@[^_@Ta@Jc@@g@Gg@QyAu@g@Og@IuDKyHOw@E}BKaOYm@@sARgA`@{@n@o@~@c@nAU~AKlBMdLGzAMvAQpAKf@uDnS[pA{@~CaArCiAfCoAzBuAnB}AbBaBxAq^nWq@l@m@v@g@~@uKbXYb@[Z[P_@F_@Ca@Kc@UgJ{G_XqRYQw@Ww@K{@AwIJgELs@?o@Cm@KUEiUaHuMkEOEOGc@O{JkEi@Ue@YcLqHw@Yw@Ey@J[Lc[vO]N_@J_@B]?_@E]KUISx@_GmELJwCfJiApDuBtG"
				 },
				 "summary" : "",
				 "warnings" : [
					"Walking directions are in beta.    Use caution – This route may be missing sidewalks or pedestrian paths."
				 ],
				 "waypoint_order" : []
			  }
		   ],
		   "status" : "OK"
		}

		***/
		
	</script>