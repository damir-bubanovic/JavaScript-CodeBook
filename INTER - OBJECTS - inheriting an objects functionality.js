/*

!!INTER - OBJECTS - INHERITING AN OBJECTS FUNCTIONALITY!!

> When creating a new object type, you want to inherit the functionality of an existing
JavaScript object

*.prototype - JavaScript objects inherit the properties and methods from their prototype
*Function.prototype.call() - 	calls a function with a given this value and arguments 
								provided individually
*.constructor - constructor property returns the constructor function for an object
*.getValues - get values
*instanceof - 	tests whether an object has in its prototype chain the prototype property 
				of a constructor

*/

/*
SOLUTION:
+) Use Object.create() to implement the inheritance
*/
+)
function origObject() {
	this.val1 = "a";
	this.val2 = "b";
}

origObject.prototype.returnVal1 = function() {
	return this.val1;
}

origObject.prototype.returnVal2 = function() {
	return this.val2;
}

function newObject() {
	this.val3 = "c";
	origObject.call(this);
}

newObject.prototype = Object.create(origObject.prototype);
newObject.prototype.constructor = newObject;
newObject.prototype.getValues = function() {
	return this.val1 + " " + this.val2 + " " + this.val3;
};

var obj = new newObject();

console.log(obj instanceof newObject); // true
console.log(obj instanceof origObject); // true

console.log(obj.getValues()); "a b c"


/*
EXAMPLE:
+) Demonstrating classical inheritance in JavaScript with Object.create
*/
+)
function Book(title, author) {
	
	this.getTitle = function() {
			return "Title: " + title;
	};
	
	this.getAuthor = function() {
		return "Author: " + author;
	};
}

function TechBook(title, author, category) {
	
	this.getCategory = function() {
		return "Technical Category: " + category;
	};
	
	this.getBook = function() {
		return this.getTitle() + " " + author + " " + this.getCategory();
	};
	
	Book.apply(this, arguments);
}

TechBook.prototype = Object.create(Book.prototype);
TechBook.prototype.constructor = TechBook;

// get all values
var newBook = new TechBook("The JavaScript Cookbook", "Shelley Powers", "Programming");
console.log(newBook.getBook());

// now, individually
console.log(newBook.getTitle());
console.log(newBook.getAuthor());
console.log(newBook.getCategory());

/*
"Title: The JavaScript Cookbook Shelley Powers Technical Category: Programming"
"Title: The JavaScript Cookbook"
"Author: Shelley Powers"
"Technical Category: Programming"
*/