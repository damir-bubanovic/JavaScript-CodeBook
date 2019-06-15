/*

!!INTER - ACCESS PAGE ELEMENTS - CREATING HOVER-BASED POP-UP INFO WINDOWS!!

> You like the Netflix website’s pop-up window that displays when the mouse cursor is
over a movie thumbnail, and you want to incorporate this functionality into your own
application

*/

/*
SOLUTION STEPS:
1) First, you need to capture the mouseover and mouseout events for each image thumbnail,
in order to display or remove the pop-up window, respectively
	>> the cross-browser event handlers are attached to all images in the page
	
2) Second, you need to access something about the item you’re hovering over in order to
know what to use to populate the pop-up bubble. The information can be in the page,
or you can use web server communication to get the information

3) Third, you need to either show the pop-up window, if it already exists and is not displayed,
or create the window. In the following code, the pop-up window is created just
below the object, and just to the right when the web server call returns with the information
about the item. The getBoundingClientRect() method is used to determine
the location where the pop up should be placed, and createElement() and create
TextNode() are used to create the pop up

4) Lastly, when the mouseover event fires, you need to either hide the pop-up window or
remove it—whichever makes sense in your setup. Since the application created a new
pop-up window in the mouseover event, it removes the pop-up in the mouseout event
handler
*/
1)
window.onload=function() {
	var imgs = document.getElementsByTagName("img");
	for(var i = 0; i < imgs.length; i++) {
		imgs[i].addEventListener("mouseover", getInfo, false);
		imgs[i].addEventListener("mouseout", removeWindow, false);
	}
}

2)
function getInfo() {
	// prepare request
	if(!xmlhttp) {
		xmlhttp = new XMLHttpRequest();
	}
	var value = this.getAttribute("id");
	var url = "photos.php?photo=" + value;
	
	xmlhttp.open('GET', url, true);
	xmlhttp.onreadystatechange = showWindow;
	xmlhttp.send(null);
	
	return false;
}

3)
// compute position for pop up
function compPos(obj) {
	var rect = obj.getBoundingClientRect();
	var height;
	
	if(rect.height) {
		height = rect.height;
	} else {
		height = rect.bottom - rect.top;
	}
	
	var top = rect.top + height + 10;
	return [rect.left, top];
}

// process return
function showWindow() {
	if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
		var response = xmlhttp.responseText.split("#");
		var img = document.getElementById(response[0]);
		
		if(!img) {
			return;
		}
		
		// derive location for pop up
		var loc = compPos(img);
		var left = loc[0] + "px";
		var top = loc[1] + "px";
		
		// create pop up
		var div = document.createElement("popup");
		div.id = "popup";
		var txt = document.createTextNode(response[1]);
		div.appendChild(txt);
		
		// style pop up
		div.setAttribute("class","popup");
		div.setAttribute("style","left: " + left + "; top: " + top);
		document.body.appendChild(div);
	}
}

4)
function removeWindow() {
	var popup = document.getElementById("popup");
	
	if(popup) {
		popup.parentNode.removeChild(popup);
	}	
	return false;
}
