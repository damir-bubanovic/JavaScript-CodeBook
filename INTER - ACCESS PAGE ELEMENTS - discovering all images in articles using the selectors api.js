/*

!!INTER - ACCESS PAGE ELEMENTS - DISCOVERING ALL IMAGES IN ARTICLES USING THE SELECTORS API!!

> You want to get a list of all img elements that are descendants of article elements,
without having to traverse an entire collection of elements

*.querySelectorAll() - 	returns all elements in the document that matches a specified 
						CSS selector(s), as a static NodeList object

*/

/*
SOLUTION:
1) Use the Selectors API and access the img elements contained within article elements
using CSS-style selector strings

2) To access all img elements regardless of parent element
*/
1)
var imgs = document.querySelectorAll("article img");

2)
var imgs = document.querySelectorAll("img");


/*
EXAMPLE:
1) article elements

2) If you want only those img elements that are direct children of an article element
3) If you’re interested in accessing all img elements that are immediately followed by a
paragraph
4) If you’re interested in an img element that has an empty alt attribute
5) If you’re only interested in img elements that don’t have an empty alt attribute
*/
1)
<article>
	<div>
	<img src="..." />
	</div>
</article>

2)
var imgs = document.querySelectorAll("article> img");
3)
var imgs = document.querySelectorAll("img + p");
4)
var imgs = document.querySelectorAll('img[alt=""]');
5)
var imgs = document.querySelectorAll('img:not([alt=""])');


/*
EXAMPLE: Namespace Variation and CSS Selectors

1) The following is how to define a namespace in CSS3

2.1) If an element is given with a namespace prefix, such as the following
2.2) to style the element
2.3) and to style an attribute
*/
1)
@namespace svg "http://www.w3.org/2000/svg";

2.1)
<q:elem>...</q:elem>
2.2)
@namespace q "http://example.com/q-markup";
q|elem { ... }
2.3)
@namespace foo "http://www.example.com";
[foo|att=val] { color: blue }


/*
EXAMPLE:
> Now, a namespace error will be thrown if the namespace is not resolved before using
the Selectors API methods. Unfortunately, the Selectors API doesn’t provide an approach
to resolve the namespace before using one of the methods. Instead, the Selectors
API specification recommends using JavaScript processing to handle namespaces. 
	>> to find all of the dc:title elements within an SVG element in a document, 
	use the following
*/
>)
var list = document.querySelectorAll("svg title");
var result = new Array();
var svgns = "http://www.w3.org/2000/svg"

for(var i = 0; i < list.length; i++) {
	if(list[i].namespaceURI == svgns) {
		result.push(list[i]);
	}
}