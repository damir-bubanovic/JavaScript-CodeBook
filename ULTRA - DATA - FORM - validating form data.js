/*

!!ULTRA - DATA - VALIDATING FORM DATA!!

> Your web application gathers data from the users using HTML forms. Before you send
that data to the server, though, you want to make sure it’s well formed, complete, and
valid. But you’d really prefer not to have to write code to test the data yourself

+ Validate.js library is a nice, simple, easy-to-use library that provides validation for most
form types and in most circumstances

*/

/*
SOLUTION:
1) Form validation is a perfect opportunity to introduce an external library. For a given
form, such as the following
2) You can use a standalone library, such as Validate.js
3) Or use a jQuery dependent solution, such as the jQuery Validation Engine plugin
	3.1) Include the libraries and stylesheet
	3.2) And instantiate the validation engine
*/
1)
<form name="example" action="" method="post">
	<fieldset>
	
		<legend>Example</legend>
		
		<div>
			<label for="name">Name (required):</label>
			<input type="text" id="name" name="name" value="" />
		</div>
		
		<div>
			<label for="email">Email (required):</label>
			<input type="text" id="email" name="email" value="">
		</div>
		
		<div>
			<label>Website:</label>
			<input type="text" id="url" name="url" value="">
		</div>
		
		<div>
			<label>Credit Card:</label>
			<input type="text" id="cc-card" name="cc-card" value="">
		</div>
		
		<div>
			<label>Expires:</label>
			<input type="text" id="expires" name="expires" value="">
		</div>
		
		<div>
			<label>CVS:</label>
			<input type="text" id="cvs" name="cvs" value="">
		</div>
		
		<div>
			<input type="submit" value="Submit">
		</div>
	</fieldset>
</form>

2)
var validator = new FormValidator('example', [
	{
		name: 'name',
		display: 'Name',
		rules: 'required|min_length[10]'
	},
	
	{
		name: 'email',
		display: 'Email',
		rules: 'required|valid_email'
	},
	
	{
		name: 'url',
		display: 'Website URL',
		rules: 'valid_url'
	},
	
	{
		name: 'cc-card',
		display: 'Credit Card',
		rules: 'valid_credit_card'
		}], function (errors, event) {
		if (errors.length > 0) {
		alert(errors.length);
		var msg = "";
		errors.forEach(function(elem,indx,arry) {
			msg+=elem.message + '<br />';
		});
		document.getElementById("results").innerHTML=msg;
	}
});

3)
<form id="example" name="example" action="" method="post">
	<fieldset>
	
		<legend>Example</legend>
		
		<div class="fld">
			<label for="name">Name (required):</label>
			<input type="text" id="name" name="name"
				class="validate[required]"
				data-errormessage-value-missing="Name is required"
				value="" />
		</div>
		
		<div class="fld">
			<label for="email">Email (required):</label>
			<input type="text" id="email" name="email"
				class="validate[required,custom[email]]"
				data-errormessage-value-missing="Email is required"
				data-errormessage-custom-error="Format: name@service.com"
				value="" />
		</div>
		
		<div class="fld">
			<label>Website:</label>
			<input type="text" id="url" name="url"
				class="validate[custom[url]]"
				data-errormessage-custom-error="Web URL"
				value="">
		</div>
		
		<div class="fld">
			<label>Credit Card:</label>
			<input type="text" id="cc-card" name="cc-card"
				class="validate[creditCard]"
				data-errormessage-pattern-mismatch="CC format is incorrect"
				value="">
		</div>
		
		<div class="fld">
			<label>Expires:</label>
			<input type="text" id="expires" name="expires" value="">
		</div>
		
		<div class="fld">
			<label>CVS:</label>
			<input type="text" id="cvs" name="cvs" value="">
		</div>
		
		<div class="fld">
			<input type="submit" value="Submit">
		</div>
	</fieldset>
</form>

3.1)
<link rel="stylesheet" href="css/validationEngine.jquery.css" />
<script src="//code.jquery.com/jquery-2.1.1.js"></script>
<script src="js/languages/jquery.validationEngine-en.js"></script>
<script src="js/jquery.validationEngine.js"></script>

3.2)
$(document).ready(function(){
	$("#example").validationEngine();
});