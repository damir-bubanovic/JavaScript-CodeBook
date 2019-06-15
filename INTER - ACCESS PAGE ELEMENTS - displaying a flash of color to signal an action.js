/*

!!INTER - ACCESS PAGE ELEMENTS - DISPLAYING A FLASH OF COLOR TO SIGNAL AN ACTION!!

> Based on some action, you want to display a visual cue to signify the success of the
action

*/

/*
SOLUTION
+) Use a flash to signal the success or failure of an action. While a red flash is standard for
signaling either a successful deletion or an error, a yellow flash is typically used to signal
a successful update or action:
*/
+)
var fadingObject = {
	yellowColor: function (val) {
		var r="ff"; 
		var g="ff";
		var b=val.toString(16);
		var newval = "#"+r+g+b;
		return newval;
	},
	
	fade : function (id,start,finish) {
		this.count = this.start = start;
		this.finish = finish;
		this.id = id;
		this.countDown = function() {
		this.count += 30;
		
		if(this.count >= this.finish) {
			document.getElementById(this.id).style.background = "transparent";
			this.countDown=null;
			return;
		}
		
		document.getElementById(this.id).style.backgroundColor = this.yellowColor(this.count);
		setTimeout(this.countDown.bind(this),100);
		}
	}
};
...

// fade page element identified as "one"
fadingObject.fade("one", 0, 300);
fadingObject.countDown();


/*
EXAMPLE:
+) A flash can also be used with an alert message. In the following code snippet, I created
an alert that displayed a solid color until removed from the page. I could also have used
a red flash to highlight the message, and left the background a pale pink at the end
*/
+)
function generateAlert(txt) {
	// create new text and div elements and set
	// Aria and class values and id
	var txtNd = document.createTextNode(txt);
	msg = document.createElement("div");
	msg.setAttribute("role","alert");
	msg.setAttribute("id","msg");
	
	// fade
	obj.fade("msg", 0, 127);
	obj.redFlash();
	msg.setAttribute("class","alert");
	
	// append text to div, div to document
	msg.appendChild(txtNd);
	document.body.appendChild(msg);
}