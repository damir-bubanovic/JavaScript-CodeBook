/*

!!Simple Battleship Game!!

> needs better input validation, throwing errors & continuing script

*Math.random 
	> generate random number (return numbers ranging between 0 - 1 (include 0 but not 1))
*Math.floor 
	> round decimal number (round numbers to the nearest integer)
		>> EXAMPLE: random number between 0 and 100 (including 100) -> Math.floor(Math.random() * 101)

*/

<script>
/*Ship locations (random locations)*/
/* * 7 - we get numbers 0-6 (not 7)*/
var randomLoc = Math.floor(Math.random() * 7);
var location1 = radnomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;

/*Variables to end game*/
var guess;
var hits = 0;
var guesses = 0;

/*Starting game status*/
var isSunk = false;



/*while loop till game completion*/
while(isSunk == false) {
	/*saving user input*/
	guess = prompt("Launch torpedoe at...(enter number 0-9)");
	
	/*Range of posible numbers - if not throw (exit)*/
	if(guess < 0 || guess > 9) {
		document.write("Stupid! Enter a valid field number" + "<br/ >");
		throw new error;
	} else {
		/*Store number of guesses*/
		guesses = guesses + 1;
		
		/*If we hit the ship - hit ships */
		if(guess == location1 || guess == location2 || guess == location3) {
			/*Store number of hits*/
			hits = hits + 1;
			document.write("That is a HIT!" + "<br/ >");
			
			/*Game ends when there are 3 hits*/
			if(hits == 3) {
				/*Changing game status to finish game*/
				isSunk = true;
				document.write("Cunty, you sank my Battleshi! (Cry noises)" + "<br/ >");
			}
		} else {
			document.write("That is a MISS!" + "<br/ >");
		}
	}
}

document.write("<br/ >" + "It took you " + guesses + " torpedoes to sink my Battleship!" + "<br/ >");

</script>