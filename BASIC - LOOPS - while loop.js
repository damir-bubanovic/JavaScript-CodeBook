/*

!!BASIC  - WHILE LOOP!!

> explanation for while loop logic

*/

/*
EXAMPLE:
1) Set variable scoops to value 5
2) When we evaluate a while statement the first thing we do is evaluate the conditional to see 
if it’s true or false (15 > 5 - true)
3) Because the conditional is true, we start executing the block of code. The first statement in 
the body (HTML) writes the string “Another scoop! <br>” to the browser
4) The next statement subtracts one from the number of scoops and then sets scoops to that new value
which is 14
5) That’s the last statement in the block, so we loop back up to the conditional and start over again
6) Until the last time... this time something’s different. Scoops is 5, and so our conditional returns 
false. 
	> That’s it folks; we’re not going to go through the loop anymore, we’re not going to execute the block
7) Now we execute the other document.write, and write the string Life without ice cream isn't fun anymore!. 
	> We’re done!
*/

var scoops = 15;

while(scoops > 5) {
	document.write("Another scoop!<br />");
	scoops = scoops -1;
}
document.write("Life without ice cream isn't fun anymore!");