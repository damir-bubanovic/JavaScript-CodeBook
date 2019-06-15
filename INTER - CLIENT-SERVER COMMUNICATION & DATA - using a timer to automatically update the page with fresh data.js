/*

!!INTER - CLIENT-SERVER COMMUNICATION & DATA - USING A TIMER TO AUTOMATICALLY UPDATE THE PAGE WITH FRESH DATA!!

> You want to display entries from a file, but the file is updated frequently

*/

/*
SOLUTION STEPS:
> Use Ajax and a timer to periodically check the file for new values and update the display
accordingly

1) We’ll use a GET, because we’re retrieving data. We put together the request, attach a function 
to the onreadystatechange event handler, and send the request

2) In the code that processes the response, we just place the new text into a new unordered
list item and append it to an existing ul element

3) The new part is the addition of the setTimeout() in the code. It triggers the entire
process again in 15 seconds
	>> The new part is the addition of the setTimeout() in the code. It triggers the entire
	process again in 15 seconds
*/
1)
var xmlhttp;
// prepare and send XHR request

function populateList() {
	var url = 'text.txt'; // change to full url to prevent caching problems
	xmlhttp.open('GET', url, true);
	xmlhttp.onreadystatechange = processResponse;
	xmlhttp.send(null);
}

2)
// process return
function processResponse() {
	if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
		var li = document.createElement("li");
		var txt = document.createTextNode(xmlhttp.responseText);
		li.appendChild(txt);
		document.getElementById("update").appendChild(li);
		setTimeout(populateList,15000);
	} else if (xmlhttp.readyState == 4 && xmlhttp.status != 200) {
		console.log(xmlhttp.responseText);
	}
}

3)
window.onload = function() {
	xmlhttp = new XMLHttpRequest();
	populateList();
}