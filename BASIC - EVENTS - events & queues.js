/*

!!BASIC - EVENTS - EVENTS & QUEUES!!

> browser maintains a queue of events (browser can only process 1 event at a time)
> browser is constantly taking events off that queue and processing them by calling 
the appropriate event handler for them
> browser steps through the queue from oldest to newest, processing each event

> The functions setTimeout and setInterval are used to generate time-based events after 
a certain time has passed

*/

/*
EVENT QUEUE EXAMPLE:
- A page loaded
- A user clicked
- A timer just went off
- A form was submitted
- A user clicked
- The user clicked again
- Another timer went off
- A form was submitted
- Data arrives from network
*/

/*
TIME-BASED EVENTS
> you want your code to wait five seconds before doing something
> we pass a function to another function
*/

/*Write an event handler. This is the handler that will be called when the time event has occurred*/
function timerHandler() {
	alert("Hey what are you doing just sitting there staring at a blank screen?");
}
/*call setTimeout, which takes two arguments: the event handler and a time duration (in milliseconds)*/
setTimeout(timerHandler, 5000);


/*
TIME-BASED REPEATING EVENTS:
> each second event occurs (in our case clock ticks)
> When you call setInterval, it returns a timer object.
	>> You can pass that timer object to another function, clearInterval, to stop the timer
		var t = setInterval(ticker, 1000);
		clearInterval(t);
*/
var tick = true;

function ticker() {
	if(tick) {
		console.log("Tick");
		tick = false;
	} else {
		console.log("Tock");
		tick = true;
	}
}
setInterval(ticker, 1000);

/*
Tick
Tock
Tick
Tock
Tick
Tock
...
*/
