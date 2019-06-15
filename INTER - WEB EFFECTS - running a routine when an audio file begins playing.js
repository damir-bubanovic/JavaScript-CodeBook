/*

!!INTER - WEB EFFECTS - RUNNING A ROUTINE WHEN AN AUDIO FILE BEGINS PLAYING!!

> You want to provide an audio file and then pop up a question or other information when
the audio file begins or ends playing

*/

/*
SOLUTION STEPS:

1) Use the HTML5 audio element

2) and capture either its play event (playback has begun) or ended event (playback has
finished)

3) then display the information:
*/
1)
<audio id="meadow" controls>
	<source src="meadow.mp3" type="audio/mpeg3"/>
	<source src="meadow.ogg" type="audio/ogg" />
	<source src="meadow.wav" type="audio/wav" />
	<p><a href="meadow.wav">Meadow sounds</a></p>
</audio>

2)
var meadow = document.getElementById("meadow");
meadow.addEventListener("ended", aboutAudio);

3)
function aboutAudio() {
	var info = 'This audio file is a recording from Shaw Nature Reserve';
	var txt = document.createTextNode(info);
	var div = document.createElement("div");
	div.appendChild(txt);
	document.body.appendChild(div);
}


/*
BROWSER SUPPORT:	

	• Firefox accepts either the WAV or Ogg Vorbis. It also accepts MP3, but uses the
	underlying operating system support to do so, rather than providing its own.
	• Opera supports WAV and Ogg Vorbis, but not MP3.
	• Chrome supports WAV, MP3, and Ogg Vorbis.
	• Safari supports MP3 and WAV.
	• IE supports the MP3.
	
*/