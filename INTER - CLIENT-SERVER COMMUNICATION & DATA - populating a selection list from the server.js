/*

!!INTER - CLIENT-SERVER COMMUNICATION & DATA - POPULATING A SELECTION LIST FROM THE SERVER!!

> Based on a user’s actions with another form element, you want to populate a selection
list with values

*/

/*
SOLUTION STEPS:
1) Capture the change event for the form element

2) In the event handler function, make an Ajax call with the form data

3) In the Ajax result function, populate the selection list
*/
1)
document.getElementById("nicething").onchange = populateSelect;

2)
var url = "nicething.php?nicething=" + value;
xmlhttp.open('GET', url, true);
xmlhttp.onreadystatechange = getThings;
xmlhttp.send(null);

3)
if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	var select = document.getElementById("nicestuff");
	select.length = 0;
	var nicethings = xmlhttp.responseText.split(",");
	
	for(var i = 0; i < nicethings.length; i++) {
		select.options[select.length] = new Option(nicethings[i], nicethings[i]);
	}
	select.style.display="block";
} else if (xmlhttp.readyState == 4 && xmlhttp.status != 200) {
	document.getElementById('nicestuff').innerHTML = 'Error: Search Failed!';
}


/*
EXAMPLE:
+) Creating an on-demand select Ajax application
*/
+) HTML
<form action="backuppage.php" method="get">
	<p>Select one:</p>
	
	<fieldset id="nicething">
		<input type="radio" name="nicethings" value="bird" />
		<label for="bird">Birds</label><br />
		<input type="radio" name="nicethings" value="flower" />
		<label for="flower">Flowers</label><br />
		<input type="radio" name="nicethings" value="sweets" />
		<label for="sweets">Sweets</label><br />
		<input type="radio" name="nicethings" value="cuddles" />
		<label for="cuddles">Cute Critters</label>
	</fieldset>
	
	<input type="submit" id="submitbutton" value="get nice things" />
	<select id="nicestuff"></select>
</form>

+) CSS
#nicestuff {
	display: none;
	margin: 10px 0;
}

#nicething {
	width: 400px;
}

+) JavaScript
var xmlhttp;

function populateSelect() {
	var value;
	var inputs = this.getElementsByTagName('input');
	
	for(var i = 0; i < inputs.length; i++) {
		if(inputs[i].checked) {
			value = inputs[i].value;
			break;
		}
	}
	
	// prepare request
	if (!xmlhttp) {
		xmlhttp = new XMLHttpRequest();
	}
	
	var url = "nicething.php?nicething=" + value;
	xmlhttp.open('GET', url, true);
	xmlhttp.onreadystatechange = getThings;
	xmlhttp.send(null);
}

// process return
function getThings() {
	if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
		var select = document.getElementById("nicestuff");
		select.length = 0;
		var nicethings = xmlhttp.responseText.split(",");
		
		for(var i = 0; i < nicethings.length; i++) {
			select.options[select.length] = new Option(nicethings[i], nicethings[i]);
		}
		select.style.display = "block";
		
	} else if (xmlhttp.readyState == 4 && xmlhttp.status != 200) {
		alert("No items returned for request");
	}
}

document.getElementById("submitbutton").style.display="none";
document.getElementById("nicething").onclick=populateSelect;


/*
EXAMPLE:
+) The example uses a PHP application to populate the selection list. It could also be a
Node application if you want to use JavaScript in both the client and server
*/
+)
//If no search string is passed, then we can't search (PHP)
if(empty($_REQUEST['nicething'])) {
	echo "No State Sent";
} else {
	//Remove whitespace from beginning & end of passed search.
	$search = trim($_REQUEST['nicething']);
	
	switch($search) {
		case "cuddles" :
			$result = "puppies,kittens,gerbils";
			break;
		case "sweets" :
			$result = "licorice,cake,cookies,custard";
			break;
		case "bird" :
			$result = "robin,mockingbird,finch,dove";
			break;
		case "flower" :
			$result = "roses,lilys,daffodils,pansies";
			break;
		default :
			$result = "No Nice Things Found";
			break;
	}
	echo $result;
}