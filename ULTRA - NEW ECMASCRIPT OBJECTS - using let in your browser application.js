/*

!!ULTRA - NEW ECMASCRIPT OBJECTS - Using let in Your Browser Application!!

> You’re interested in using let in your browser application, but aren’t sure which browsers
support it (or other ECMAScript functionality), or what you need to do to get it to
work.

> For the most part, you can manage browser differences for object support using a polyfill.
I recommend using Paul Miller’s ES 6 Shim. You can also use Google’s Traceur

*/

/*
SOILTUION:
1) To use let in Firefox, you have to give a version number with the script tag
2) To get the same result in Internet Explorer 11, your HTML document must be HTML5
	> The same applies to Chrome & Opera (see MORE)
*/
1)
if(true) {
	let i = 'testing let';
	console.log(i);
}

if(typeof i != 'undefined'){
	console.log(i);
} else {
	console.log('undefined');
}

2)
'use strict';

if (true) {
	let i = 'testing let';
	alert(i);
}

if(typeof i != 'undefined'){
	alert(i);
} else {
	alert('undefined');
}