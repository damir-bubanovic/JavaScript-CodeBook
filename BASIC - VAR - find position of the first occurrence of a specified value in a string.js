/*

!!BASIC - VAR - FIND POSITION OF THE FIRST OCCURANCE OF A SPECIFIC VALUE IN A STRING!!

*.indexOf - Returns the position of the first occurrence of a specified value in a string

*/

/*Here's the string we're going to call indexOf on*/
var phrase = "the cat in the hat";

/*And our goal is to find the first occurence of “cat" in phrase*/
var index = phrase.indexOf("cat");
console.log("There's a cat sitting at index " + index);
// There's a cat sitting at index 4


/*You can also add a second argument, which is the starting index for the search*/
index = phrase.indexOf("the", 5);
console.log("There's a the sitting at index " + index);
// There's a the sitting at index 11



/*If the string can't be found, then -1 is returned as the index*/
index = phrase.indexOf("dog");
console.log("There's a dog sitting at index " + index);
// There's a dog sitting at index -1