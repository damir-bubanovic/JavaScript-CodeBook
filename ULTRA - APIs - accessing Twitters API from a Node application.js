/*

!!ULTRA - APIs - ACCESSING TWITTER'S API FROM A NODE APPLICATION!!

> You’re interested in accessing search results and other data from Twitter, without having
to get authorization access from any individual user

*/

/*
SOLUTION:

>) You don’t need to get authorization from an individual user if you use Application-Only
Authentication, based on OAuth 2.0’s Client Credentials Grant

>) API service providers such as Flickr, Twitter, and Facebook place restrictions
on API access to keep from being overwhelmed with requests

>) Twitter has set a limit of 15 requests per 15-minute window for most of the endpoints
*/

/*
INFO:

>) Time to try out the Twitter Search API. First, you’ll need to register an application with
Twitter. There’s no charge, and when you create the new app, you only need to provide
the name, description, and the URI of your primary website. You don’t need to register
a callback URL for this app
>) Once you create the app, Twitter assigns it a unique Consumer Key (API Key) and
Consumer Secret (API Secret).
*/


/*
EXAMPLE:
+) Twitter Search service in Node
*/
+)
var twitreq = require('./twitreq');
var http = require('http');

var consumerKey = 'yourkey';
var consumerSecret = 'yoursecret';

// getting access token from Twitter
twitreq.getAuthorization(consumerKey, consumerSecret, function(err, atoken) {
	if(err) {
		console.log(err);
	return;
	}
	
	// if authorized, start up HTTP server
	var server = http.createServer(function(req, res) {
		
		// extract out search query
		var query = require('url').parse(req.url,true).query;
		var search = require('querystring').escape(query.q);
		
		// forming search path
		var servicePath = '/1.1/search/tweets.json?q=' + search + '&result_type=recent&lang=en';
		// make Twitter request, get results, and return to client
		twitreq.getTwitterData(servicePath, atoken, function(results) {
			res.writeHeader(200, {"Content-Type": "application/json", "Access-Control-Allow-Origin": "*"});
			res.end(results);
		});
	});
	server.listen(8080);
});


/*
EXAMPLE:
+) Web page accessing the Twitter Node service
*/
+) HTML
<label for="one">Twitter Search Value:</label>
<input type="text" name="one" id="one" /><br />
<button id="getdata">Search Twitter</button>
<div id="result"></div>

+) CSS
ul {
	width: 600px;
	list-style-type: none;
	margin-left: 50px;
	padding: 0
}

li {
	font: 200 14px/1.5 Helvetica, Verdana, sans-serif;
	padding-bottom: 10px;
	color: #606060;
}

+) JavaScript
var httpRequest;

document.getElementById('getdata').addEventListener('click',getData,false);

function getData(e) {
	e.preventDefault();
	
	var search = document.getElementById('one').value;
	if(!search || search.length === 0) {
		return;
	}
	httpRequest = new XMLHttpRequest();
	search = encodeURIComponent(search);
	var url = "http://shelleystoybox.com:8080/?q=" + search;
	httpRequest.open('GET', url, true);
	httpRequest.onreadystatechange = processData;
	httpRequest.send();
}

function processData() {
	if (httpRequest.readyState == 4 && httpRequest.status == 200) {
		var tweets = JSON.parse(httpRequest.responseText);
		var str = '<ul>';
		tweets.statuses.forEach(function(tweet) {
			str += '<li>' + tweet.text + ' via ' + '@' + tweet.user.screen_name + '</li>';
		});
		str += '</ul>';
		document.getElementById('result').innerHTML = str;
	}
}