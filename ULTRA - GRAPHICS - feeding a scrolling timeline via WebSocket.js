/*

!!ULTRA - GRAPHICS - FEEDING A SCROLLING TIMELINE VIA WEBSOCKET!!

> You need to graph changing data to a timeline, but the data is only available on the
server

> SVG is ideal for a scrolling timeline for three reasons:
	• We can access the path element directly, as well as its attributes
	• We can modify the path element’s path descriptor attribute d and modify it
	• We can move the path easily using a transform when the timeline exceeds the
	element’s viewport

*/

/*
SOLUTION:
> Use a combination of graphics with the real-time, bidirectional communication capability
of WebSockets
> To demonstrate, the server is quite simple: serving up the primary HTML interface and
a WebSockets server that sends a randomly generated value between 0 and 100 every
three seconds
> The number generation exists outside of the communication, so that all WebSockets
clients get the same data. To manage this, we use setInterval(), set to fire every three
seconds to generate the new value. The nodejs-websocket module we’re using keeps
an array of open connections. The code traverses the array and issues an individual
sendText message for each
*/
+)
var app = require('http').createServer(handler), fs = require('fs');
var ws = require("nodejs-websocket");

app.listen(8124);

// serve static page
function handler (req, res) {
	fs.readFile(__dirname + '/drawline.html',
	function (err, data) {
		if (err) {
			res.writeHead(500);
			return res.end('Error loading drawline.html');
		}
		res.writeHead(200);
		res.end(data);
	});
}

function startTimer() {
	setInterval(function() {
		var newval = Math.floor(Math.random() * 100) + 1;
		if (server.connections.length > 0) {
			console.log('sending ' + newval);
			var counter = {counter: newval};
			server.connections.forEach(function(conn, idx) {
				conn.sendText(JSON.stringify(counter), function() {
					console.log('conn sent')
				});
			});
		}
	},1000);
}

// WebSockets connection
var server = ws.createServer(function (conn) {
	console.log('connected');
	conn.on("close", function (code, reason) {
		console.log("Connection closed")
	});
}).listen(8001, function() {
	startTimer(); }
);


/*
SOLUTION:
+) The console.log() calls are so you can follow the application as it handles new clients.
SVG is used for the graphic because we can easily manipulate components within the
graphic, to expand a graphic beyond the element’s viewport, and it’s simple to transform
the line as it goes beyond the right border of the element
*/
+) HTML
<svg id="timeline" width="600px" height="100px">
	<path id="thepath" d="M0 100" />
</svg>

+) CSS
#timeline {
	border: 1px solid black;
}

path {
	fill: none;
	stroke: maroon;
	stroke-width: 1px;
}

+) JavaScript
var counter = 0;
var x = 0;
var socket = new WebSocket("ws://shelleystoybox.com:8001");
socket.onmessage = function (event) {
	
	var val = JSON.parse(event.data);
	var point = parseInt(val.counter);
	
	// modify path
	var path = document.getElementById('thepath');
	var d = path.getAttribute('d');
	counter+=10;
	d+= 'L' + counter + ' ' + point;
	path.setAttribute('d',d);
	
	// now see if path needs moving
	if(counter > 600) {
		x = 600 - counter;
		var translate = 'translate(' + x + ',0)';
		path.setAttribute('transform',translate);
	}
};