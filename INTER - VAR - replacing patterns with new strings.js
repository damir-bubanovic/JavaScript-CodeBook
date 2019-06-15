/*

!!INTER - VAR - REPLACING PATTERS WITH NEW STRINGS!!

> want to replace all matched substrings with a new substring

*.replace() -  	searches a string for a specified value, or a regular expression, 
				and returns a new string where the specified values are replaced

*/

/*
EXAMPLE:
1) regular expression
2) whole words
3) global search
	> Using the global flag (g) with the regular expression in combination with the 
	replace() method will replace all instances of the matched text with the 
	replacement string. 
	> If we didn’t use the global flag, only the first match would trigger a replacement
*/
1)
var searchString = "Now is the time, this is the tame";

var re = /t\w{2}e/g;
var replacement = searchString.replace(re, "place");
console.log(replacement); 
// Now is the place, this is the place

2)
var myString = "Medo ide po šumi";

var oldName = "Medo";
var replaceName = myString.replace(oldName, "Zeko");
console.log(replaceName);
// Zeko ide po šumi

3)
var re = new RegExp('t\\w{2}e', "g");
var replacement = searchString.replace(re, "place");
console.log(p);


/*
REGULAR EXPRESSION EXTRA:
1) regular expression for a pattern that matches against a string that contains the 
word technology and the word book, in that order, and separated by one or more 
whitespace characters
	>> Look up -> TABLE - REGULAR EXPRESSION SPECIAL CHARACTERS
*/
1)
var re = /technology\s+book/;
