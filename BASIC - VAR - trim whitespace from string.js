/*

!!BASIC - VAR - trim whitespace from string!!

*.trim - Remove whitespace from both sides of a string
	> string.trim()

*/

var str = "       Hello World!        ";
console.log(str.trim());
// Hello World!


/*
> For browsers that do not support the trim() method, you can remove 
whitespaces from both sides of a string with a regular expression
*/
function myTrim(x) {
    return x.replace(/^\s+|\s+$/gm,'');
}

function myFunction() {
    var str = myTrim("        Hello World!        ");
    alert(str);
}
// Hello World!