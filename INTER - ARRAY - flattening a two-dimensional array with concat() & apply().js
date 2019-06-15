/*

!!INTER - ARRAY - FLATTENING A TWO-DIMENSIONAL ARRAY WITH concat() and apply()!!

> You want to flatten a two-dimensional array

*.concat() - used to join two or more arrays
*.apply() - used to invoke a function

*/

/*
SOLUTION:
+) Use the Array object concat() method to merge the multidimensional array into a
single-dimensional array
*/
+)
var fruitarray = [];
fruitarray[0] = ['strawberry','orange'];
fruitarray[1] = ['lime','peach','banana'];
fruitarray[2] = ['tangerine','apricot'];
fruitarray[3] = ['raspberry','kiwi'];

// flatten array
var newArray = fruitarray.concat.apply([], fruitarray);
console.log(newArray[5]);	// tangerine