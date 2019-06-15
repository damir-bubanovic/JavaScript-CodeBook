/*

!!ULTRA - MANAGE JS - LOADING SCRIPTS WITH A SCRIPT LOADER!!

> You need to use several different JavaScript libraries in your web pages, and they’re
starting to slow the page loads

*/

/*
SOLUTION:
+) One solution is to use a script loader to load your JavaScript files asynchronously and
concurrently. 
+) Script loaders were created to provide a way of loading JavaScript files asynchronously,
which means the rest of the page can continue loading while the script is loading
	>> They use script injection: creating a script element in a script block that loads the JavaScript
	file, and then appending that block to the page. 
	>> The inline JavaScript is executed asynchronously and does not block the page from loading like 
	the use of the traditional script element does

1) One is the traditional method of using a script element for each file, and just loading each in turn. 
	- inefficiency of having to access each file individually, 
	- that can occur if scripts are loaded out of order 
		(with one script being dependent on another already loaded), 
	- the entire page is blocked while the scripts load
	
2) Other method -  compile all the individual JavaScript files into a single file, which is what the 
content management system (CMS) Drupal does. 
	+ eliminates the multiple file access and even the issues with ordering, 
	- the page is blocked from loading until the scripts are loaded
*/


/*
SOLUTION EXAMPLES:
1) The code to do so can be similar to the script block the following minimal HTML5 page (put in body)
2) To prevent the variables from cluttering up the global namespace, they can be included
in an Immediately-Invoked Function Expression (IIFE)
3) If you need to use a pathname for the script, you can use a protocol-relative URL
(sometimes referred to as a protocol-less URL) so that the code adapts whether the page
is accessed with http or https
*/
1) 
var scrpt = document.querySelector("script");
var t = document.createElement("script");
t.src = "test1.js";
scrpt.parentNode.insertBefore(t, scrpt);

2)
(function() {
	var scrpt = document.querySelector("script");
	var t = document.createElement("script");
	t.src = "test1.js";
	scrpt.parentNode.insertBefore(t,scrpt);
}());

3)
t.src = "//somecompany.com/scriptfolder/test1.js";


/*
EXAMPLE BETTER:
1) Multiple scripts can be loaded into the page using this approach. It can also be used to
load CSS files, as well as larger images or other media files. However, we don’t have to
do the work ourselves: we can use a script loading library, such as HeadJS
	>> the best approach to including support for the library is to include a link to the library 
	in the head element
2) If you do have JavaScript, you want to load right away; rather than using another script
element, you can use a data- attribute on the script element loading HeadJS
	>> Any immediately invoked functionality is then listed in init.js
*/
1)
<head>
	<script src="head.min.js"></script>
	<script>
		head.load("file1.js", "file2.js");
	</script>
</head>

<body>
	<!-- my content-->
	
	<script>
		head.ready(function () {
		// some callback stuff
		});
	</script>
</body>

2)
<script src="head.min.js" data-headjs-load="init.js"></script>


/*
BETTER EXAMPLE:
1) Another script loader with an interesting twist is Basket.js. It also loads JavaScript files
asynchronously, but it goes a step further: it caches the script using localStorage, which
means if the JavaScript has already been accessed once, a second access loads the Java‐
Script from cache rather than loading the file again
	>> If you monitor the page using your browser’s debugger/development tools, and reload
	the page, you’ll note that the files aren’t accessed again after the first load
2) To handle source dependencies, Basket.js returns a promise from require(), and the
then() callback is executed. You can then list the second JavaScript file in the callback
*/
1)
<body>

	<script src="basket.full.min.js"></script>
	<script>
		basket.require({ url: 'test1.js'},
		{ url: 'test2.js'});
	</script>
</body>

2)
basket.require({ url: 'test2.js'}).then(function() {
	basket.require({ url: 'test1.js'});
});