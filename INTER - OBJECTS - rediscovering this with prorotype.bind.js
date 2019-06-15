/*

!!INTER - OBJECTS - REDISCOVERING THIS WITH PROTOTYPE.BIND!!

> You want to control the scope assigned a given function

*.onload - onload event occurs when an object has been loaded
*.getElementById() - returns the element that has the ID attribute with the specified value
*.innerHTML - sets or returns the HTML content (inner HTML) of an element
*setTimeout() - calls a function or evaluates an expression after a specified number of milliseconds
*.bind() - 	creates a new function that, when called, has its this keyword set to the provided value,
			with a given sequence of arguments preceding any provided when the new function is called

*/

/*
SOLUTION:
+) Use the bind() method
*/
+)
window.onload = function() {
	window.name = "window";
	
	var newObject = {
		name: "object",
		
		sayGreeting: function() {
			alert("Now this is easy, " + this.name);
			
			nestedGreeting = function(greeting) {
				alert(greeting + " " + this.name);
			}.bind(this);
			
			nestedGreeting("hello");
		}
	};
	
	newObject.sayGreeting("hello");
};


/*
EXAMPLE:
+) Demonstrating the utility of bind
*/
+) HTML
<div id="item">10</div>

+) CSS
#item {
	font-size: 72pt;
	margin: 70px auto;
	width: 100px;
}

+) JavaScript
var theCounter = new Counter("item", 10, 0);

theCounter.countDown();

function Counter(id, start, finish) {
	this.count = this.start = start;
	this.finish = finish;
	this.id = id;
	
	this.countDown = function() {
		if(this.count = this.finish) {
			this.countDown = null;
			return;
		}
		document.getElementById(this.id).innerHTML = this.count--;
		setTimeout(this.countDown.bind(this), 1000);
	};
}


/*
EXAMPLE:
+) alternative to using bind()
*/
+)
window.onload = function() {
	window.name = "window";
	
	var newObject = {
		name: "object",
		
		sayGreeting: function() {
			var self = this;
			alert("Now this is easy, " + this.name);
			
			nestedGreeting = function(greeting) {
				alert(greeting + " " + self.name);
			};
			
			nestedGreeting("hello");
		}
	};
	
	newObject.sayGreeting("hello");
}
