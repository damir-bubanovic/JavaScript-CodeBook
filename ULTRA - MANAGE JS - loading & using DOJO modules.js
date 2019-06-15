/*

!!ULTRA - MANAGE JS - LOADING & USING DOJO MODULES!!

> You’re interested in using some of the Dojo functionality, but you’re not sure how to
load the associated modules

*/

/*
SOLUTION:
1) Dojo has implemented the AMD architecture for its functionality. When you add the
main Dojo script to your page, what you’re loading is the module loader, rather than all
of its various functions

> The library can be accessed at a CDN, as the code snippet demonstrates. The custom
data attribute data-dojo-config specifies that the Dojo asynchronous AMD loader
should be used
2) To use the Dojo functionality, specify the dependencies in the require() method
*/
1)
<script src="http://ajax.googleapis.com/ajax/libs/dojo/1.10.0/dojo/dojo.js"
data-dojo-config="async: true"></script>

2)
require([
	'dojo/dom',
	'dojo/dom-construct'
], function (dom, domConstruct) {
	var ph = dom.byId("placeholder");
	ph.innerHTML = "Using Dojo";
	domConstruct.create("h1", {innerHTML: "<i>Howdy!</i>"},ph,"before");
});


/*
EXAMPLE:
+) A complete Dojo example accessing one page element and adding another
*/
+) HTML
<head>
	<script src="http://ajax.googleapis.com/ajax/libs/dojo/1.10.0/dojo/dojo.js"
	data-dojo-config="async: true"></script>
</head>

<body>
	<div id="placeholder"></div>
</body>

+) JavaScript
require([
	'dojo/dom',
	'dojo/dom-construct'
], function (dom, domConstruct) {
	var ph = dom.byId("placeholder");
	ph.innerHTML = "Using Dojo";
	domConstruct.create("h1", {innerHTML: "<i>Howdy!</i>"},ph,"before");
});