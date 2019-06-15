/*

!!ULTRA - MANAGE JS - TAKING YOU CODE ACROSS ALL MODULE ENVIROMENTS!!

> You’ve written a library that you’d like to share with others, but folks are using a variety
of module systems to incorporate external JavaScript. How can you ensure your library
works in all of the various environments?

*/

/*
SOLUTION:
1) The following library with two functions

2) Will work with RequireJS, Node, as a plain script, and CommonJS in the browser when
converted to
*/
1)
function concatArray(str, array) {
	return array.map(function(element) {
		return str + ' ' + element;
	});
}

function splitArray(str,array) {
	return array.map(function(element) {
		var len = str.length + 1;
		return element.substring(len);
	});
}

2)
(function(global) {
	'use strict';
	
	var bbArray = {};
	
	bbArray.concatArray = function(str, array) {
		return array.map(function(element) {
			return str + ' ' + element;
		});
	};
	
	bbArray.splitArray = function(str,array) {
		return array.map(function(element) {
			var len = str.length + 1;
			return element.substring(len);
		});
	};
	
	if(typeof module != 'undefined' && module.exports) {
		module.exports = bbArray;
	} else if (typeof define === "function" && define.amd ) {
		define( "bbArray", [], function() {
			return bbArray;
		});
	} else {
		global.bbArray = bbArray;
	}
}(this));
