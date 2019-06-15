/*

!!INTER - CLIENT-SERVER COMMUNICATION & DATA - JSON - CONVERTING AN OBJECT TO A FILTERED OR TRANSFORMED STRING WITH JSON!!

> You need to convert a JavaScript object to a JSON-formatted string for posting to a web
application. However, the web application has data requirements that differ from your
client application

*/

/*
SOLUTION:
+) Use the JSON.stringify() method, passing in the object as first parameter and providing
a transforming function (a replacer) as the second parameter
*/
+)
function convertBoolToNums(key,value) {
	if(typeof value == "boolean") {
		value = 1;
	} else {
		value = 0;
	}
	return value;
}

var obj = {
	test : "value1",
	test2 : 3.44,
	test3 : false	
};

var jsonstr = JSON.stringify(obj, convertBoolToNums, 3);

console.log(jsonstr); // '{ "test" : "value1", "test2" : 3.44, "test3" : 0}'


/*
EXAMPLE:
1) You can also use an array rather than a function. The array can contain strings or numbers,
and is a whitelist of properties that are allowed in the result
	2) The resulting string is also pretty-printed using a tab (\t) this time, instead of the 
	three spaces used in the solution
3) The last parameter controls how much whitespace is used in the result. It can be a
number representing the number of spaces or a string. If it is a string, the first 10 characters
are used as whitespace. 
	4) the result is
*/
1)
var whitelist = ["test","test2"];

var obj = {"test" : "value1", "test2" : 3.44, "test3" : false};
var jsonobj = JSON.stringify(obj, whitelist, '\t');
2)
{
	"test": "value1",
	"test2": 3.44
}

3)
var jsonobj = JSON.stringify(obj, whitelist, "***");
4)
{
	***"test": "value1",
	***"test2": 3.44
}