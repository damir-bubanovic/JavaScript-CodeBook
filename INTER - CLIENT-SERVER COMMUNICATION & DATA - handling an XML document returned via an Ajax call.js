/*

!!INTER - CLIENT-SERVER COMMUNICATION & DATA - HANDLING AN XML DOCUMENT RETURNED VIA AN AJAX CALL!!

> You need to prepare your Ajax application to deal with data returned in XML

*/


/*
SOLUTION STEPS:
1) First, ensure the application can handle a document with an XML MIME type

2) Next, access the returned XML document via the XHMLHttpRequest’s responseXML
property, and then use the DOM methods to query the document for data:
*/
1)
if(window.XMLHttpRequest) {
	xmlHttpObj = new XMLHttpRequest();
	
	if (xmlHttpObj.overrideMimeType) {
		xmlHttpObj.overrideMimeType('application/xml');
	}
}

2)
if(xmlHttpObj.readyState == 4 && xmlHttpObj.status == 200) {
	var citynodes = xmlHttpObj.responseXML.getElementsByTagName("city");
	...
}


/*
EXAMPLE:
1) If you’re unsure whether the API returns the proper MIME type, or if you have no control 
over the API, you can override the MIME type when you access the XMLHttpRequest object

2) If you want to use responseXML, it’s better to either change the server-side application 
so that it supports the application/xml MIME type, or convert the text into XML using the 
following cross-browser technique
*/
1)
if(window.XMLHttpRequest) {
	xmlHttpObj = new XMLHttpRequest();
	
	if (xmlHttpObj.overrideMimeType) {
		xmlHttpObj.overrideMimeType('application/xml');
	}
}

2)
if(window.DOMParser) {
	parser = new DOMParser();
	xmlResult = parser.parserFromString(xmlHttpObj.responseText, "text/xml");
} else {
	xmlResult = new ActiveXObject("Microsoft.XMLDOM");
	xmlResult.async = "false"
	xmlResult.loadXML(xmlHttpObj.responseText);
}

var stories = xmlResult.getElementsByTagName("story");