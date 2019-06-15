/*

!!ULTRA - MANAGE JS - USING REQUIREJS WITH JQUERY OR ANOTHER LIBRARY!!

> Your applications uses jQuery (or Underscore.js or Backbone). How can the library fit
into the use of RequireJS to manage dependencies?

*/

/*
SOLUTION:

1) If the library can work with AMD (as jQuery can), and you save the jQuery file as
jquery.js and load it in the same directory as your application JavaScript, you can use
the jQuery functionality easily, as shown in the following small code snippet

2) However, if the jQuery file is named something else, or you’re accessing the library from
a CDN, then you’ll need to use a RequireJS shim
*/
1)
require(["./jquery"],function($) {
	$('h1').css('color','red');
});

2)
requirejs.config({
	baseUrl: 'scripts/lib',
	paths: {
		jquery: '//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min'
	},
});