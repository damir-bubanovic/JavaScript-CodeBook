/*

!!ULTRA - NEW ECMASCRIPT OBJECTS - USING PROMISES FOR EFFICIENT ASYNCHRONOUS PROCESSING!!

> You want to have your code do something based on the success or failure of an asynchronous
operation

*/

/*
SOLUTION
> One option is to use the new native Promise object. A classic use for Promise in a client
application is to use it with an Ajax call
*/
>)
var test = new Promise(function(resolve, reject) {
	
	var req = new XMLHttpRequest();
	req.open('GET', 'http://examples.burningbird.net:8124');
	
	req.onload = function () {
		if (req.status == 200) {
			resolve(req.response);
		} else {
			reject(req.statusText);
		}
	};
	
	req.onerror = function() {
		reject("network error");
	};
	
	req.send();
});

test.then(
	function(response) {
		console.log("Response is ", response);
	}, function (error) {
		console.error("Request failed: ", error);
	});