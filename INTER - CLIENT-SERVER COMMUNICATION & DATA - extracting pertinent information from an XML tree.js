/*

!!INTER - CLIENT-SERVER COMMUNICATION & DATA - EXTRACTING PERTINENT INFORMATION FROM AN XML TREE!!

> You want to access individual pieces of data from an XML document

*/

/*
SOLUTION:
> Use the same DOM methods you use to query your web page elements to query the
XML document. 
	>> npr. the following will get all elements that have a resource tag name
*/
var resources = xmlHttpObj.responseXML.getElementsByTagName("resource");


/*
EXAMPLE:
+) Node.js server application that returns an XML result
*/
+)
var http = require('http'),
url = require('url');
var XMLWriter = require('xml-writer');

// start server, listen for requests
var server = http.createServer().listen(8080);
server.on('request', function(req, res) {
	var xw = new XMLWriter;
	
	// start doc and root element
	xw.startDocument().startElement("resources");
	
	// resource
	xw.startElement("resource");
	xw.writeElement("title","Ecma-262 Edition 6");
	xw.writeElement("url", "http://wiki.ecmascript.org/doku.php?id=harmony:specification_drafts");
	xw.endElement();
	
	// resource
	xw.startElement("resource");
	xw.writeElement("title","ECMA-262 Edition 5.1");
	xw.writeElement("url", "http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf");
	xw.endElement();
	
	// resource
	xw.startElement("resource");
	xw.writeElement("title", "ECMA-402");
	xw.writeElement("url", "http://ecma-international.org/ecma-402/1.0/ECMA-402.pdf");
	xw.endElement();
	
	// end resources
	xw.endElement();
	res.writeHeader(200, {"Content-Type": "application/xml", "Access-Control-Allow-Origin": "*"});
	res.end(xw.toString(),"utf8");
});


/*
EXAMPLE:
+) Application to process resources from returned XML
*/
+) HTML
<div id="result"></div>

+) JavaScript
var xmlHttpObj;

// ajax object
if(window.XMLHttpRequest) {
	xmlRequest = new XMLHttpRequest();
}

// build request
var url = "http://shelleystoybox.com:8080";
xmlRequest.open('GET', url, true);
xmlRequest.onreadystatechange = getData;
xmlRequest.send();

function getData() {
	if(xmlRequest.readyState == 4 && xmlRequest.status == 200) {
		try {
			var result = document.getElementById("result");
			var str = "<p>";
			
			// can use DOM methods on XML document
			var resources = xmlRequest.responseXML.getElementsByTagName("resource");
			
			// process resources
			for(var i = 0; i < resources.length; i++) {
				var resource = resources[i];
				// get title and url, generate HTML
				var title = resource.childNodes[0].firstChild.nodeValue;
				var url = resource.childNodes[1].firstChild.nodeValue;
				str += "<a href='" + url + "'>" + title + "</a><br />";
			}
			
			// finish HTML and insert
			str += "</p>";
			result.innerHTML=str;
		} catch (e) {
			console.log(e.message);
		}
	}
}