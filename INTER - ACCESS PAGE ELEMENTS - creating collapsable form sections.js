/*

!!INTER - ACCESS PAGE ELEMENTS - CREATING COLLAPSIBLE FORM SECTIONS!!

> You have a large form that takes up a lot of space. You only want to display sections of
the form as they are needed

*/


/*
SOLUTION:
1) Split the form into display blocks using div elements, and then change the block’s styling
to control the display of the form section. When the page is loaded, hide all of the form
blocks by changing the display value to none using JavaScript

2) To expand the section, change the display setting to block using setAttribute
*/
1)
theformblock.setAttribute("style","display: none");
/*OR*/
theformblock.style.display="none";

2)
theformblock.setAttribute("style","block");
/*OR - set the value directly*/
theformblock.style.display="block";


/*
EXAMPLE:
> how collapsible sections can be used with forms
	+) Collapsed form element
*/
+) HTML
<form>

	<div>
		<div id="section1" class="label">
			<p>Checkboxes</p>
		</div>
		<div id="section1b" class="elements">
			<input type="checkbox" name="box1" /> - box one<br />
			<input type="checkbox" name="box1" /> - box one<br />
			...
		</div>
	</div>
	
	<div>
		<div id="section2" class="label">
			<p>Buttons</p>
		</div>
		<div class="elements">
			<input type="radio" name="button1" /> - button one<br />
			<input type="radio" name="button1" /> - button one<br />
			...
		<button>Submit</button>
		</div>
	</div>
</form>

+) CSS
.label {
	width: 400px;
	margin: 10px 0 0 0;
	padding: 10px;
	background-color: #ccccff;
	text-align: center;
	border: 1px solid #ccccff;
}

.elements {
	border: 1px solid #ccccff;
	padding: 10px;
	border: 1px solid #ccccff;
	width: 400px;
}

button {
	margin: 20px;
}

+) JavaScript
var elements = document.getElementsByTagName("div");

// collapse all sections
for (var i = 0; i < elements.length; i++) {
	if (elements[i].className == "elements") {
		elements[i].style.display = "none";
	} else if (elements[i].className == "label") {
		elements[i].onclick = switchDisplay;
	}
}

//collapse or expand depending on state
function switchDisplay() {
	var parent = this.parentNode;
	var target = parent.getElementsByTagName("div")[1];
	
	if (target.style.display == "none") {
		target.style.display = "block";
	} else {
		target.style.display = "none";
	}
	return false;
}