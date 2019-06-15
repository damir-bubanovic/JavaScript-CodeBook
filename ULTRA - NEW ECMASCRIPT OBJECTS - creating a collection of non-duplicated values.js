/*

!!ULTRA - NEW ECMASCRIPT OBJECTS - CREATING A COLLECTION OF NON-DUPLICATED VALUES!!

> You want to create a collection of unique values

*/

/*
SOLUTION:
+) Use the new ECMAScript 6 Set object to create the collection
	1) The Set handles uniqueness for us. If you try to add the same value multiple times, 
	it’s added the first time and the rest of the additions are just ignored
	2) The Set also has a clean way of removing members, without having to use the splice()
	method
	3) To discover whether the Set has a specific value, use the has() method
	4) You can also iterate through the members
	5) As well as convert a Set to an Array using the new ES 6 spread operator
	6) If you want to get rid of all the Set members, use clear()
*/
+)
var col1 = new Set();
col1.add("apple");
col1.add("oranges");
console.log(col1.size); // 2

1)
col1.add("banana");
col1.add("banana"); // ignored
col1.add("banana"); // yup, still ignored

2)
col1.delete("banana"); // OK, all gone

3)
col1.has("banana"); // false, it was removed
col1.has("apple"); // true

4)
col1.forEach(function(value) {
	console.log(value);
});

5)
var arr = [...col1];
console.log(arr[1]); // oranges

6)
col1.clear();
console.log(col1.size); // 0


/*
EXAMPLE:
1) A Set collection can consist of any number of object types, including objects. And that
includes well-known objects, functions, even other Sets
*/
1)
var mySet = new Set();

mySet.add(window);
mySet.add(function() { 
	console.log("whoa");
});

var mySet2 = new Set();
mySet2.add('test');
mySet2.add(5);
mySet2.add(true);

mySet.add(mySet2);

mySet.forEach(function(value) {
	console.log(value.toString());
});
/*
[object Window]
function () { console.log("whoa");}
[object Set]
*/