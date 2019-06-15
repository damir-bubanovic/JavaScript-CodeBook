/*

!!BASIC - OBJECTS - JAVASCRIPT PREDEFINED OBJECTS!!

> JavaScript comes with a set of constructors for instantiating some handy
objects—like objects that know how to deal with dates and times, objects
that are great at finding patterns in text, and even objects that will give you
a new perspective on arrays

*/

/*Creates a new date representing the current date and time*/
var now = new Date();

/*Returns a string that represents the date, like “Thu Feb 06 2014 17:29:29 GMT-0800 (PST)”.*/
var dateString = now.toString();

/*Returns the year in the date*/
var theYear = now.getFullYear();

/*Returns a number for the day of the week represented by the date object, like 1 (for Monday).*/
var theDayOfWeek = now.getDay();

/*You can pass a simple date string to the constructor like this*/
var birthday = new Date("May 1, 1983");

/*Now, we’re including a time in the string too*/
var birthday = new Date("May 1, 1983 08:03 pm");