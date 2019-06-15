/*

!!INTER - ACCESS PAGE ELEMENTS - APPLYING A STRIPED THEME TO AN UNORDERED LIST!!

> want to modify the appearance of unordered list items so that the list appears
striped

*.querySelectorAll() - 	returns all elements in the document that matches a specified 
						CSS selector(s), as a static NodeList object
*.setAttribute() - adds the specified attribute to an element, and gives it the specified value
*.getElementById() - returns the element that has the ID attribute with the specified value
*.getElementsByTagName() - 	returns a collection of all elements in the document with the 
							specified tag name, as a NodeList object

*/

/*
SOLUTION:
1) Use the Selectors API to query for every other item in the list, and then change the
background color by changing the class for the element or setting the style attribute
on the element using setAttribute()
	>> The :nth-child() pseudoclass allows us to specify an algorithm pattern, which can be
	used to find elements that match a certain pattern, such as 2n+1, to find every other
	element. You can also use the odd and even arguments to access the odd or even elements
	of the type

2) Or access the list parent element and then traverse its child nodes, changing the background
color of every other element, using the arithmetic modulo operator
*/
1)
var lis = document.querySelectorAll('li:nth-child(2n+1)');

for(var i = 0; i < lis.length; i++) {
	lis[i].setAttribute("style", "background-color: #ffeeee");
}

/*OR*/

var lis = document.querySelectorAll('li:nth-child(odd)');

for(var i = 0; i < lis.length; i++) {
	lis[i].setAttribute("style", "background-color: #eeeeff");
}

2)
var parentElement = document.getElementById("thelist");
var lis = parentELement.getElementsByTagName("li");

for(var i = 0; i < lis.lenght; i++) {
	if(i % 2 == 0) {
		lis[i].setAttribute("style", "background-color: #eeffee");
	}
}