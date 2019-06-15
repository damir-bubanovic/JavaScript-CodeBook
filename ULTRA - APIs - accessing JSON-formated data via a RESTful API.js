/*

!!ULTRA - APIs - ACCESSING JSON-FORMATED DATA VIA A RESTFUL API!!

> You want to access data formatted as JSON from a service through their API. You need
to access the data both in a client and in a Node application, but don’t know the best
approach to use in both cases

*/

/*
SOLUTION:

1) One of the simplest approaches for accessing data through an API that supports the
principles of Representational State Transfer (REST), and returns data formatted as
JSON, is to use jQuery’s getJSON() function

2) In a Node application, the simplest technique for accessing JSON-formatted data from
an API is to use node-rest-client to access the data
*/
1)
$.getJSON('http://somedomain.com/latest.json?apid=someid', function(data) {
	// do something with the data now formatted as an object
});

2)
var Client = require('node-rest-client').Client;

var client = new Client();

client.get('http://somedomain.com/latest.json?apid=someid'
			function(data, response) {
				// do something the with data now formatted as an object
			}
);


/*
EXAMPLE:
+) The Open Exchange Rate API
*/
+)
var moneyAPI1 = "https://openexchangerates.org/api/latest.json?app_id=apid";
var moneyAPI2 = "http://openexchangerates.org/api/currencies.json?app_id=apid";

$.getJSON(moneyAPI1).done(function( data ) {
	$.getJSON(moneyAPI2).done(function(data2) {
		
		var rates = data.rates;
		var keys = Object.keys(rates);
		
		for(var i = 0; i < keys.length; i++) {
			var rate = rates[keys[i]];
			var name = data2[keys[i]];
			console.log(name + " " + rate);
		}
	});
});
/*
"Malawian Kwacha 394.899498"
"Mexican Peso 13.15711"
"Malaysian Ringgit 3.194393"
"Mozambican Metical 30.3662"
"Namibian Dollar 10.64314"
"Nigerian Naira 162.163699"
"Nicaraguan Córdoba 26.03978"
"Norwegian Krone 6.186976"
"Nepalese Rupee 98.07189"
"New Zealand Dollar 1.185493"
*/


/*
EXAMPLE:
+) Flickr’s API
1) search for photos using a text search string with “birds”
2) However, if you want to return search results for a specific person, and formatted as
JSON, you’d craft the request as
3) if you want a result crafted purely as JSON, which I do when using node-rest-client, you 
add another parameter to the query string, nojsoncallback, setting it to a value of 1

4) processing the results
*/
1)
https://api.flickr.com/services/rest/?method=flickr.photos.search&
text=bird&api_key=apikey

2)
"https://api.flickr.com/services/rest/?method=flickr.photos.search&
text=bird&user_id=92659632@N05&format=json&api_key=apikey"

3)
"https://api.flickr.com/services/rest/?method=flickr.photos.search&
text=bird&user_id=92659632@N05&format=json&api_key=apikey&nojsoncallback=1"


4)
var Client = require('node-rest-client').Client;
var client = new Client();

var flickrapi =
"https://api.flickr.com/services/rest/?method=flickr.photos.search
&text=bird&user_id=92659632@N05&format=json&api_key=apikey&nojsoncallback=1";

client.get(flickrapi, function(data, response) {
	var photos = data.photos.photo;
	
	photos.forEach(function(elem) {
		console.log(elem.title);
	});
});