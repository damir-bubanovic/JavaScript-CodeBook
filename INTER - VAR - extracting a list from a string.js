/*

!!INTER - VAR - EXTRACTING A LIST FROM A STRING!!

> You have a string with several sentences, one of which includes a list of items. The list
begins with a colon (:) and ends with a period (.), and each item is separated by a comma.
You want to extract just the list

*.indexOf() - 	returns the position of the first occurrence of a specified value in a string
*.substring() - extracts the characters from a string, between two specified indices, and returns 
				the new sub string
*.split() - 	split a string into an array of substrings, and returns the new array
*.substr() - 	extracts parts of a string, beginning at the character at the specified position, 
				and returns the specified number of characters

*/

/*
EXAMPLE:
1) unprocessed list
2) processed list
*/
1)
This is a list of items: cherries, limes, oranges, apples
2)
['cherries','limes','oranges','apples']


/*
SOLUTION 1:
> solution requires two actions: extract out the string containing the list of items, and
then convert this string into a list
> Once you have the string consisting of the list items, use split() to break
the string into an array

*indexOf() - locate the colon; find the first period following the colon
*substring() - extract the string
*.split - break the string into an array

*/

var sentence = 'This is one sentence. This is a sentence with a list of items:' +
'cherries, oranges, apples, bananas. That was the list of items.';


var start = sentence.indexOf(':');
/*+ 1 -> because we have a sentence before*/
var end = sentence.indexOf('.', start + 1);

/*+ 1 ->because othervise we include :*/
var listStr = sentence.substring(start + 1, end);


var fruits = listStr.split(',');
console.log(fruits); // ['cherries', ' oranges', ' apples', ' bananas']



/*
SOLUTION 2
> begins extraction at an index position marking the start of the substring and passing in the 
length of the substring as the second parameter. 
	>> find the length just by subtracting the beginning position of the string from the end position

*.substr() -  locate the start & string length to search for substring

*/
/*End minus Start*/
var listStr = sentence.substr(start + 1, end - start);

var fruits = listStr.split(',');


/*
EXTRA 1:
> trim whitespace from array elements

*.forEach() - applies the function passed as parameter (the callback) to each array element

*/
fruits.forEach(  
	function(element, index, array) {
		array[index] = element.trim();
	}
);

/*
EXTRA 2:
> Simplifying the Code Using Chaining
*/
var start = sentence.indexOf(":");
var end = sentence.indexOf(".", start + 1);

var fruits = sentence.substring(start + 1, end).split(",");
