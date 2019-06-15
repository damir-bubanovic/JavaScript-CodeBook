/*

!!ULTRA - GRAPHICS - CONVERTING GRAPHICS TO TEXT (Ocrad.js)!!

> You want to convert graphical text into plain text

*/

/*
SOLUTION:
> Optical Character Recognition (OCR) JavaScript support is somewhat limited, but there
are options in both the client and on the server
1) In the client, you can use Ocrad.js to convert image data to text
2) In Node, you can use the Tesseract OCR via a module
*/
1)
var img = new Image();
img.addEventListener("load", function() {
	
	var context = document.createElement('canvas').getContext('2d');
	context.drawImage(img, 0, 0);
	
	var imgdata = context.getImageData(0, 0, this.width, this.height);
	
	try {
		var text = OCRAD(imgdata);
		document.getElementById("result").innerHTML = text;
	} catch(err) {
		console.log(err);
	}
}, false);

img.src = 'ocrtest.png';

2)
var tesseract = require('node-tesseract');
var fs = require('fs');

var myArgs = process.argv.slice(2);

tesseract.process(__dirname + '/' + myArgs[0], function(err, text) {
	if(err) {
		console.log(err);
	} else {
		fs.writeFile(myArgs[1], text, function(err) {
			if(err) {
				console.log(err);
			} else {
				console.log('Converted text stored in ' + myArgs[1]);
			}
		});
	}
});