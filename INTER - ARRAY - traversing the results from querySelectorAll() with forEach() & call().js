/*

!!INTER - ARRAY - TRAVERSING THE RESULTS FROM querySelectorAll() WITH forEach() & call()!!

> want to use forEach() on the nodeList returned from a call to querySelectorAll()

*.querySelectorAll() -  returns all elements in the document that matches a specified 
						CSS selector(s), as a static NodeList object
*.forEach.call() - executes a provided function once per array element
*parseFloat() - parses a string and returns a floating point number

*/

/*
SOLUTION:
+) You can coerce forEach() into working with a NodeList 
	(the collection returned by querySelectorAll()) using the following)
*/
+)
// use querySelector to find all second table cells
var cells = document.querySelectorAll("td + td");

[].forEach.call(cells, function(cell) {
	sum += parseFloat(cell.firstChild.data);
});