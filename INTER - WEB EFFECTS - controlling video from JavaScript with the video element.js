/*

!!INTER - WEB EFFECTS - CONTROLLING VIDEO FROM JAVASCRIPT WITH THE VIDEO ELEMENT!!

> You want to embed video in your web page, without using Flash. You also want a consistent
look for the video control, regardless of browser and operating system

*/

/*
SOLUTION:
+) Use the HTML5 video element
*/
+)
<video id="meadow" poster="purples.jpg" >
	<source src="meadow.m4v" type="video/mp4"/>
	<source src="meadow.ogv" type="video/ogg" />
</video>


/*
EXAMPLE:
+) Providing a custom control for the HTML5 video element
*/
+) HTML
<body>
<video id="meadow" poster="purples.jpg" >
	<source src="meadow.m4v" type="video/mp4"/>
	<source src="meadow.ogv" type="video/ogg" />
</video>
<div id="feedback"></div>
<div id="controls">
<button id="start">Play</button>
<button id="stop">Stop</button>
<button id="pause">Pause</button>
</controls>
</body>

+) CSS
video {
	border: 1px solid black;
}

+) JavaScript
window.onload=function() {
	
	// events for buttons
	document.getElementById("start").addEventListener("click", startPlayback);
	document.getElementById("stop").addEventListener("click", stopPlayback);
	document.getElementById("pause").addEventListener("click", pausePlayback);
	
	// setup for video playback
	var meadow = document.getElementById("meadow");
	meadow.addEventListener("timeupdate", reportProgress);
	
	// video fallback
	var detect = document.createElement("video");
	if(!detect.canPlayType) {
		document.getElementById("controls").style.display="none";
	}
}

// start video, enable stop and pause
// disable play
function startPlayback() {
	var meadow = document.getElementById("meadow");
	meadow.play();
	document.getElementById("pause").disabled=false;
	document.getElementById("stop").disabled=false;
	this.disabled=true;
}

// pause video, enable start, disable stop
// disable pause
function pausePlayback() {
	document.getElementById("meadow").pause();
	this.disabled=true;
	document.getElementById("start").disabled=false;
	document.getElementById("stop").disabled=true;
}

// stop video, return to zero time
// enable play, disable pause and stop
function stopPlayback() {
	var meadow = document.getElementById("meadow");
	meadow.pause();
	meadow.currentTime=0;
	document.getElementById("start").disabled=false;
	document.getElementById("pause").disabled=true;
	this.disabled=true;
}

// for every time divisible by 5, output feedback
function reportProgress() {
	var time = Math.round(this.currentTime);
	var div = document.getElementById("feedback");
	div.innerHTML = time + " seconds";
}


/*
The media elements support the following methods:

	• play: Starts playing the video
	• pause: Pauses the video
	• load: Preloads the video without starting play
	• canPlayType: Tests if the user agent supports the video type
	
*/