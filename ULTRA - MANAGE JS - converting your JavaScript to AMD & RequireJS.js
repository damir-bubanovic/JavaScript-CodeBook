/*

!!ULTRA - MANAGE JS - CONVERTING YOUR JAVASCRIPT TO AMD & REQUIREJS!!

> You’re interested in taking advantage of modularization and controlled dependencies
by converting your libraries to the Asynchronous Module Definition (AMD) format,
implemented with RequireJS, but you’re not sure where to start and what to do

*/

/*
SOLUTION:
1) RequireJS is integrated into the following three small JavaScript libraries
2) And the web page, index.html

2) They could be included in a simple web page as demonstrated in the following code,
assuming all the JavaScript libraries are in a subdirectory named scripts/
*/
1)
one.js
	define(function() {
		return {
			hi: function() {
				console.log('hello from one');
			}
		}
	});

two.js
	define(function() {
		return {
			hi: function(val) {
				console.log('hello ' + val + ' from two');
			}
		}
	});

mylib.js
	require(["./one","./two"],function(one,two) {
		one.hi();
		two.hi('world');
		console.log("And that's all");
	});

2)
<head>
	<title>Hello Modularization</title>
	<script data-main="scripts/mylib" src="scripts/require.js"></script>
</head>


3)
<head>
	<title>Hello Modularization</title>
	<script src="scripts/one.js" type="text/javascript"></script>
	<script src="scripts/two.js" type="text/javascript"></script>
	<script src="scripts/mylib.js" type="text/javascript"></script>
	<script type="text/javascript">
		allThat();
	</script>
</head>