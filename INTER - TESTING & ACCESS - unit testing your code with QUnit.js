/*

!!INTER - TESTING & ACCESS - UNIT TESTING YOUR CODE WITH QUnit!!

> You want to ensure the robustness of your application or library. A part of this is performing
unit testing, but you don’t want to create the tests manually

> There are multiple types of tests, such as tests for security, usability, and performance,
but the most basic form of testing is unit testing

> Look up - instaling & running QUnit
	>> You can download QUnit at the QUnit website, as well as the jQuery CDN (Content Delivery Network). 
	>> You can also install it using npm, and it’s available as a library in JS Bin

*/

/*
SOLUTION:
> Use a tool such as QUnit to incorporate unit testing into your application at the earliest
possible stage. 
	1) we’re interested in testing a new function, addAndRound()
	2) A QUnit test case could look like the following
*/
1)
function addAndRound(value1,value2) {
	return Math.round(value1 + value2);
}

2)
test( "testing addAndRound", function() {
	equal(6, addAndRound(3.55, 2.33), "checking valid");
	ok(addAndRound("three", "4.12"), "checking NaN");
});