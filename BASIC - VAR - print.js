/*

!!BASIC - VAR - PRINT!!

*/

/*
JavaScript can "display" data in different ways:
	Writing into an alert box, using window.alert().
		> window.alert("sometext");
			- Alert box - click OK
		> window.prompt("sometext","defaultText");
			- Alert box - enter any data
		> window.confirm("sometext");
			- Alert box - click Yes or No
	Writing into the HTML output using document.write().
		> For testing purposes, it is convenient to use document.write()
		> Using document.write() after an HTML document is fully loaded, will delete all existing HTML:
	Writing into an HTML element, using innerHTML.
		> 	<p id="demo"></p> (html)
			document.getElementById("demo").innerHTML = 5 + 6; (script)
	Writing into the browser console, using console.log().
		> console.log(5 + 6);
		> Writing to the console log is typically done to troubleshoot as you develop your page

*/