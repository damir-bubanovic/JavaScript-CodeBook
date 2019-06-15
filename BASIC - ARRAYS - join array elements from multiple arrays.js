/*

!!BASIC - ARRAYS - join array elements from multiple arrays!!

*.concat - Join arrays
	> array1.concat(array2, array3,..., arrayX)

*/

var hege = ["Cecilie", "Lone"];
var stale = ["Emil", "Tobias", "Linus"];
var children = hege.concat(stale);
console.log(children);
// ["Cecilie", "Lone", "Emil", "Tobias", "Linus"]