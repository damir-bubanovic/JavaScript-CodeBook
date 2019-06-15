/*

!!ULTRA - DATA - PERSISTING INFORMATION USING HTML5!!

> You’ve looked at all the ways of handling the back button and controlling page state for
an Ajax application, and you’re saying to yourself, “There has to be a better way.”

*/

/*
SOLUTION:
>) There is a better way—a much better way: using HTML5’s history.pushState and history.replaceState 
methods to persist a state object, and the window.onpope vent to restore the page state
*/
>)
window.history.pushState({ page : page}, "Page " + page, "?page=" + page);
...

window.onpopstate = function(event) {
	// check for event.state, if found, reload state
	if(!event.state) {
		return;
	}
	var page = event.state.page;
}


/*
EXAMPLE:
+) Using history.pushState and history.replaceState to enable back button support
*/
+) HTML
<button id="next" data-page="zero">Next Action</button>
<div id="square" class="zero">
	<p>This is the object</p>
</div>

+) JavaScript
document.getElementById("next").onclick = nextPanel;

window.onpopstate = function(event) {
	// check for event.state, if found, reload state
	if(!event.state) {
		return;
	}
	
	var page = event.state.page;
	switch(page) {
		case "one" :
			functionOne();
			break;
		case "two" :
			functionOne();
			functionTwo();
			break;
		case "three" :
			functionOne();
			functionTwo();
			functionThree();
	}
}

// display next panel, based on button's class
function nextPanel() {
	var page = document.getElementById("next").getAttribute("data-page");
	switch(page) {
		case "zero" :
			functionOne();
			break;
		case "one" :
			functionTwo();
			break;
		case "two" :
			functionThree();
	}
}

// set both the button class, and create the state link, add to page
function setPage(page) {
	document.getElementById("next").setAttribute("data-page",page);
	window.history.pushState({ page : page}, "Page " + page, "?page=" + page);
}

// function one, two, three - change div, set button and link
function functionOne() {
	var square = document.getElementById("square");
	square.style.position="relative";
	square.style.left="0";
	square.style.backgroundColor="#ff0000";
	square.style.width="200px";
	square.style.height="200px";
	square.style.padding="10px";
	square.style.margin="20px";
	setPage("one");
}

function functionTwo() {
	var square = document.getElementById("square");
	square.style.backgroundColor="#ffff00";
	square.style.position="absolute";
	square.style.left="200px";
	setPage("two");
}

function functionThree() {
	var square = document.getElementById("square");
	square.style.width="400px";
	square.style.height="400px";
	square.style.backgroundColor="#00ff00";
	square.style.left="400px";
	setPage("three");
}


/*
EXAMPLE:
+) when you click the button three times to get to the third page, reload
the page, or hit the back button, the window.onpopstate event handler fires—perfect
time to get the state data, and repair the page
*/
window.onpopstate = function(event) {
	// check for event.state, if found, reload state
	if (!event.state) return;
		var page = event.state.page;
		...
	}