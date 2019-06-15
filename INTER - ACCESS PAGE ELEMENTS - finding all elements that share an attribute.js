/*

!!INTER - ACCESS PAGE ELEMENTS - FINDING ALL ELEMENTS THAT SHARE AN ATTRIBUTE!!

> want to find all elements in a web document that share the same attribute

*.querySelectorAll() - 	returns all elements in the document that matches a specified 
						CSS selector(s), as a static NodeList object

*/

/*
SOLUTION:
1) Use the universal selector (*) in combination with the attribute selector to find all elements
that have an attribute, regardless of its value

2) The universal selector can also be used to find all elements with an attribute that’s assigned
the same value

3) If you’re not sure of the class name, you can use the substring-matching query selector
	>> Now any class name that contains the substring “red” matches
	
4) You could also modify the syntax to find all elements that don’t have a certain value
*/
1)
var elems = document.querySelectorAll('*[class]');

2)
elems = document.querySelectorAll('*[class="red"]');

3)
var elements = document.querySelectorAll('*[class*="red"]');

4)
var elems = document.querySelectorAll('div:not(.red)');