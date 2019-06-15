/*

!!INTER - CLIENT-SERVER COMMUNICATION & DATA - JSON - PROCESSING JSON FROM AN AJAX REQUEST!!

> You want to format Ajax data as JSON, rather than text or XML

*/

/*
SOLUTION STEPS:
1) Create and initiate the Ajax request the same as for an XML or text data request. In this
code, the service is a Node application, accessible at port 8080

2) In the function to process the response, use the JSON object’s parse() method to convert
the returned text into a JavaScript object

3) The key to sending JSON in response to an Ajax request is to use whatever language’s
version of the JSON.stringify() method to convert the object into a JSON-formatted
string. In the following Node application, we can use the Node version of JSON to format
the data. The MIME type for the data is also set to application/json
*/
1)
// ajax object
if(window.XMLHttpRequest) {
	httpRequest = new XMLHttpRequest();
}

// build request
var url = "http://shelleystoybox.com:8080";
httpRequest.open('GET', url, true);
httpRequest.onreadystatechange = getData;
httpRequest.send();

2)
function getData() {
	if(httpRequest.readyState == 4 && httpRequest.status == 200) {
		try {
			// Javascript function JSON.parse to parse JSON data
			var jsonObj = JSON.parse(httpRequest.responseText);
			console.log(jsonObj.list[0].name);
		} catch(e) {
			console.log(e.message);
		}
	}
}

3)
var http = require('http');

// start server, listen for requests
var server = http.createServer().listen(8080);

server.on('request', function(req, res) {
	var titleList = {
		"list" : [
			{"id": "id1", "name": "Title One"},
			{"id": "id12", "name": "Another Value"},
			{"id": "id20", "name": "End of the Road"},
			{"id": "id24", "name": "One More"}
		],
		"totalRecords" : 4
	}
	res.writeHeader(200, {"Content-Type": "application/json", "Access-Control-Allow-Origin": "*"});
	res.end(JSON.stringify(titleList));
});


/*
EXAMPLE:
> Processing JSON data from an Ajax request
*/
+)
var httpRequest;

// ajax object
if(window.XMLHttpRequest) {
	httpRequest = new XMLHttpRequest();
}

// build request
var url = "http://shelleystoybox.com:8080";
httpRequest.open('GET', url, true);
httpRequest.onreadystatechange = getData;
httpRequest.send();

function printData(element) {
	console.log(element.name);
}

function getData() {
	if(httpRequest.readyState == 4 && httpRequest.status == 200) {
		try {
			// Javascript function JSON.parse to parse JSON data
			var jsonObj = JSON.parse(httpRequest.responseText);
			jsonObj.list.forEach(function(element) {
				console.log(element.name);
			});
		} catch(e) {
			console.log(e.message);
		}
	}
}