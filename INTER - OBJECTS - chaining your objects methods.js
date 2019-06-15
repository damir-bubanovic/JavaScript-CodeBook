/*

!!INTER - OBJECTS - CHAINING YOUR OBJECTS METHODS!!

> You wish to define your object’s methods in such a way that more than one can be used
at the same time, similar to the following, which retrieves a reference to a page element
and sets the element’s style property

*/
>) 
document.getElementById("elem").setAttribute("class","buttondiv");

/*
SOLUTION:
+) The ability to directly call one function on the result of another in the same line of code
is known as method chaining
	>> npr. if you want to be able to chain the TechBook.changeAuthor() method in the following 
	code snippet, you must also return the object after you perform whatever other functionality 
	you need
*/
+)
function Book(title, author) {
	
	this.getTitle = function() {
		return "Title: " + title;
	};
	
	this.getAuthor = function() {
		return "Author: " + author;
	};
	
	this.replaceTitle = function(newTitle) {
		var oldTitle = title;
		title = newTitle;
	}
	
	this.replaceAuthor = function(newAuthor) {
		var oldAuthor = author;
		author = newAuthor
	};
}


function TechBook(title, author, category) {
	
	this.getCategory = function() {
		return "Technical Category: " + category;
	};
	
	Book.apply(this, arguments);
	
	this.replaceAuthor = function(newAuthor) {
		this.replaceAuthor(newAuthor);
		return this; // necessary to enable method chaining
	};
}



var newBook = new TechBook("I Know Things", "Smart Author", "tech");
console.log(newBook.changeAuthor("Book K. Reader").getAuthor());


/*
EXAMPLE:
> The key to making method chaining work is to return a reference to the object at the
end of the method, as shown in the changeAuthor() method in the solution

> Chaining is used extensively in JavaScript objects, and demonstrated throughout this
book when we see functionality such as
*/
>)
this.changeAuthor = function(newAuthor) {
	this.replaceAuthor(newAuthor);
	return this; // necessary to enable method chaining
};

>)
var result = str.replace(/</g,'&lt;').replace(/>/g,'&gt;');