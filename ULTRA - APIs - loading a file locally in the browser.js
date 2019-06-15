/*

!!ULTRA - APIs - LOADING A FILE LOCALLY IN THE BROWSER!!

> You want to open an ePub XHTML file and output the text to the web page

There are three objects in the File API:
	• FileList: A list of files to upload via input type="file"
	• File: Information about a specific file
	• FileReader: Object to asynchronously upload the file for client-side access

*/

/*
SOLUTION:
+) Use the File API in conjunction with the XML DOM parser
*/
+)
function loadFile() {
	
	// look for the body section of the document
	var parser = new DOMParser();
	var xml = parser.parseFromString(this.result,"text/xml");
	var content = xml.getElementsByTagName("body");
	
	// if found, extract the body element's innerHTML
	if (content.length > 0) {
		var ct = content[0].innerHTML;
		var title = document.getElementById("bookTitle").value;
		title = "<h2>" + title + "</title>";
		document.getElementById("result").innerHTML = title + ct;
	}
}


/*
EXAMPLE:
+) Uploading an ePub XHTML chapter into a web page
*/
+) HTML
<form>
	<label for="title">Title:</label>
	<input type="text" id="bookTitle" /></br ><br />
	<label for="file">File:</label> <input type="file" id="file" /><br />
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
	var fileList = this.files;
	var reader = new FileReader();
	reader.onload = loadFile;
	reader.readAsText(fileList[0]);
}

function loadFile() {	
	// look for the body section of the document
	var parser = new DOMParser();
	var xml = parser.parseFromString(this.result,"text/xml");
	var content = xml.getElementsByTagName("body");
	
	// if found, extract the body element's innerHTML
	if(content.length > 0) {
		var ct = content[0].innerHTML;
		var title = document.getElementById("bookTitle").value;
		title = "<h2>" + title + "</title>";
		document.getElementById("result").innerHTML = title + ct;
	}
}