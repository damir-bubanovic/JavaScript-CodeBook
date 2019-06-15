/*

!!BASIC - DOM - WHEN TO RUN JAVASCRIPT CODE!!

> run the code after the page is fully loaded
> put script at the bottom of body
> use window.onload
	>> with onload -> you can even put script in the head

*/

/*
EXAMPLE:
1) create a function that has the code you’d like executed once the page is fully loaded
2) take the window object, and assign the function to its onload property
*/

<script>
function init() {
	var planet = document.getElementById("greenplanet");
	planet.innerHTML = "Red Alert: hit by phaser fire!";
}

window.onload = init;
</script>