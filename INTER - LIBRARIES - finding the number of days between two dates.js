/*

!!INTER - LIBRARIES - FINDING THE NUMBER OF DAYS BETWEEN TWO DATES!!

> You can create two different dates with the Date object, but you can’t easily find the
number of days between them

*/

/*
SOLUTION
> Use the date library Moment.js to access the more advanced datetime functions. 
	1) Find the number of days between two dates
*/
1)
var deadline = moment('October 1, 2014');
var t = moment();

var df = deadline.diff(t, 'days');
console.log(df); // 37 days