/*

!!INTER - WEB EFFECTS - ADDING FILTER EFFECTS TO VIDEO VIA CANVAS!!

> You’re interested in not only playing video in your web page but also playing modified
versions of the video, such as one that has been grayscaled, or manipulated in some way

*/

/*
SOLUTION:
1) Use HTML5 video with the Canvas element, playing the video to a scratch Canvas
element

2) You can then add the ability to capture the image data using the Canvas element’s
getImageData(), modify the image data with whatever filter you want, and then play
the image data to a second, visible Canvas element
*/
1)
function drawVideo() {
	
	var videoObj = document.getElementById("videoobj");
	
	// if not playing, quit
	if(videoObj.paused || videoObj.ended) return false;
	
	// draw video on canvas
	var canvasObj = document.getElementById("canvasobj");
	var ctx = canvasObj.getContext("2d");
	ctx.drawImage(videoObj, 0, 0, 480, 270);
	...
	setTimeout(drawVideo, 20);
}

2)
var pData = ctx.getImageData(0, 0, 480, 270);

// grayscale it and set to display canvas
pData = grayScale(pData);
ctx2.putImageData(pData, 0, 0);


/*
EXAMPLE:
1) To play a video in a Canvas element, we’ll need to add both elements to the web page

2) To draw the video onto the canvas, we’re going to use the Canvas drawImage()
These parameters are:
	• image: A reference to a Canvas element, an img element, or a Video element
	• dx: x coordinate of the top-left corner of the source image
	• dy: y coordinate of the top-left corner of the source image
	• dw: Width of the source image (can be scaled)
	• dh: Height of the source image (can be scaled)
*/
1)
<video id="videoobj" controls width="480" height="270">
	<source src="videofile.mp4" type="video/mp4" />
	<source src="videofile.webm" type="video/webm" />
</video>
<canvas id="canvasobj" width="480" height="270"></canvas>

2)
void drawImage(
	in nsIDOMElement image,
	in float dx,
	in float dy,
	in float dw,
	in float dh
);


/*
EXAMPLE:
+) A first cut at drawing video data to a canvas element
*/
+) HTML
<body>
	<video id="videoobj" controls width="480" height="270">
		<source src="videofile.mp4" type="video/mp4" />
		<source src="videofile.webm" type="video/webm" />
	</video>
	<canvas id="canvasobj" width="480" height="270"></canvas>
</body>

+) JavaScript
window.onload = function() {
	document.getElementById("videoobj").
	addEventListener("timeupdate", drawVideo, false);
}

function drawVideo() {
	var videoObj = document.getElementById("videoobj");
	var canvasObj = document.getElementById("canvasobj");
	var ctx = canvasObj.getContext("2d");
	ctx.drawImage(videoObj, 0, 0);
}


/*
EXAMPLE:
+) Video with applied color blind filter, playing side by side with original
*/
+) HTML
<body>
	<video id="videoobj" controls width="480" height="270">
		<source src="videofile.mp4" type="video/mp4" />
		<source src="videofile.webm" type="video/webm" />
	</video>
	<canvas id="canvasobj" width="480" height="270"></canvas>
</body>

+) JavaScript
// Protanopia filter
function protanopia(pixels) {
	var d = pixels.data;
	
	for(var i=0; i<d.length; i+=4) {
		
		var r = d[i];
		var g = d[i+1];
		var b = d[i+2];
		
		//convert to an approximate protanopia value
		d[i] = 0.567*r + 0.433*g;
		d[i+1] = 0.558*r + 0.442*g;
		d[i+2] = 0.242*g + .758*b;
	}
	return pixels;
}

// event listeners
window.onload = function() {
	document.getElementById("videoobj").
	addEventListener("play", drawVideo, false);
}


// draw the video
function drawVideo() {
	
	var videoObj = document.getElementById("videoobj");
	
	// if not playing, quit
	if (videoObj.paused || videoObj.ended) {
		return false;
	}
	
	// create scratch canvas
	var canvasObj = document.getElementById("canvasobj");
	var bc = document.createElement("canvas");
	bc.width = 480;
	bc.height = 270;
	
	// get contexts for scratch and display canvases
	var ctx = canvasObj.getContext("2d");
	var ctx2 = bc.getContext("2d");
	
	// draw video on scratch and get its data
	ctx2.drawImage(videoObj, 0, 0, 480, 270);
	var pData = ctx2.getImageData(0, 0, 480, 270);
	
	// grayscale it and set to display canvas
	pData = protanopia(pData);
	ctx.putImageData(pData, 0, 0);
	setTimeout(drawVideo, 20);
}