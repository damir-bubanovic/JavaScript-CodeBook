/*

!!INTER - DATE & TIME - CONVERTING AN ISO 8601 FORMATTED DATE TO A DATE OBJECT ACCEPTABLE FORMAT!!

> need to convert an ISO 8601 formatted date string into values that can be used to
create a new Date object instance

> The ISO 8601 is an international standard that defines a representation for both dates
and times. It’s not unusual for applications that provide APIs to require ISO 8601 formatting.
> It’s also not unusual for most dates to and from APIs to be in UTC, rather than local time.


*.replace() - 	searches a string for a specified value, or a regular expression, and returns 
				a new string where the specified values are replaced
*.split() - 	split a string into an array of substrings, and returns the new array
*Date - 		Date object is used to work with dates and times
*.apply() - 	calls a function with a given this value and arguments provided as an array 
				(or an array-like object)
*.toString() - 	converts a number to a string
*toUTCString - 	converts a Date object to a string, according to universal time

*/

/*
SOLUTION:
+) Parse the ISO 8601 string into the individual date values, and use it to create a new
JavaScript Date object instance
*/
+)
var datetimeString = "2014-3-04T19:35:32Z";

datetimeString = datetimeString.replace(/\D/g, " ");
var datetimeComps = datetimeString.split(" ");

// modify month between 1 based ISO 8601 and zero based Date
datetimeComps[1]--;

var converteddatetime = new Date(Date.UTC.apply(null, datetimeComps));

console.log(converteddatetime.toString()); // Tue, 04 Mar 2014 19:35:32 GMT



/*
EXAMPLE:
> Converting ISO 8601 formatted dates to JavaScript Dates
*/
+) HTML
<p>Datestring in ISO 8601 format: <input type="text" id="datestring" /></p>
<button id="dateSubmit">Convert Date</button>


+) JavaScript
document.getElementById("dateSubmit").onclick = function() {
	var dtstr = document.getElementById("datestring").value;
	var convdate = convertISO8601toDate(dtstr);
	
	document.getElementById("result").innerHTML = convdate;
}

function convertISO8601toDate(dtstr) {
	
	// replace anything but numbers by spaces
	dtstr = dtstr.replace(/\D/g," ");
	
	// trim any hanging white space
	dtstr = dtstr.replace(/\s+$/,"");
	
	// split on space
	var dtcomps = dtstr.split(" ");
	
	
	// not all ISO 8601 dates can convert, as is
	// unless month and date specified, invalid
	if(dtcomps.length < 3) {
		return "invalid date";
	}
	
	// if time not provided, set to zero
	if(dtcomps.length < 4) {
		dtcomps[3] = 0;
		dtcomps[4] = 0;
		dtcomps[5] = 0;
	}
	
	// modify month between 1 based ISO 8601 and zero based Date
	dtcomps[1]--;
	
	var convdt = new Date(Date.UTC.apply(null,dtcomps));
	
	return convdt.toUTCString();
}