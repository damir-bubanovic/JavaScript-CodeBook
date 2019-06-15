/*

!!INTER - VAR - REPLACING HTML Tags WITH NAMED ENTITIES!!

> want to paste example markup into a web page, and escape the markup 
	(i.e., have the angle brackets print out rather than have the contents parsed)

*.replace() - 	searches a string for a specified value, or a regular expression, 
				and returns a new string where the specified values are replaced

*/

/*
SOLUTION:
+) Use regular expressions to convert angle brackets (<>) into the named entities &lt; 
and &gt;
*/
+)
var pieceOfHtml = "<p>This is a <span>paragraph</span></p>";
pieceOfHtml = pieceOfHtml.replace(/</g,"&lt;");
pieceOfHtml = pieceOfHtml.replace(/>/g,"&gt;");
console.log(pieceOfHtml);