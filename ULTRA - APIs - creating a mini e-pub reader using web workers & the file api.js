/*

!!ULTRA - APIs - CREATING A MINI E-PUB READER USING WEB WORKERS & THE FILE API!!

> Your application uploads E-Pub XHTML documents for reading in your web application,
but you don’t want to block the browser while the file is being processed

*/

/*
SOLUTION:
>) The solution needs to incorporate two pieces: uploading a file and opening it, and doing
all of this in a separate thread so the browser isn’t blocked waiting for what could be a
time-consuming operation to finish
*/

/*To create a web worker, all you need do is call the Worker object constructor, passing
in the URI for a script file to run:*/
var theWorker = new Worker("loading.js");

/*You can also assign a function to the web worker’s onmessage event handler, and onerror
event handler:*/
theWorker.onmessage = handleMessage;
theWorker.onerror = handleError;

/*To communicate with the web worker, use the postMessage method, providing any data
it needs:*/
theWorker.postMessage(dataObject);

/*In the web worker, an onmessage event handler receives this message, and can extract
the data from the event object:*/
onmessage(event) {
	var data = event.data;
	...
}

/*If the web worker needs to pass data back, it also calls postMessage. The function to
receive the message in the main application is the event handler function assigned to
the web worker’s onmessage event handler:*/
theWorker.onmessage= handleMessage;


/*
EXAMPLE:
+) Reading a file using a web worker
*/
+) HTML
<form>
	<label for="file">File:</label>
	<input type="file" id="file" /><br />
</form>
<div id="result"></div>

+) CSS
#result {
	width: 500px;
	margin: 30px;
}

+) JavaScript
var inputElement = document.getElementById("file");
inputElement.addEventListener("change", handleFiles, false);

function handleFiles() {
	var file = this.files[0];
	var worker = new Worker("loading.js");
	worker.onmessage=loadFile;
	worker.postMessage(file);
}

function loadFile(event) {
	// look for the body section of the document
	var parser = new DOMParser();
	var xml = parser.parseFromString(event.data,"text/xml");
	var content = xml.getElementsByTagName("body");
	
	// if found, extract the body element's innerHTML
	if(content.length > 0) {
		var ct = content[0].innerHTML;
		document.getElementById("result").innerHTML = ct;
	}
}


/*
EXAMPLE:
+) Using web worker JavaScript to reverse an array and return the resulting string
*/
+)
// web worker thread - reverses array
onmessage = function(event) {
	var reverseArray = function(x,indx,str) {
		return indx == 0 ? str : reverseArray(x,--indx,(str+= " " + x[indx]));;
	}
	
	// reverse array
	var str = reverseArray(event.data, event.data.length, "");
	
	// return resulting string to main application
	postMessage(str);
};