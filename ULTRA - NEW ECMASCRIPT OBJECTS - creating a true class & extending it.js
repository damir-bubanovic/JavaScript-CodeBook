/*

!!ULTRA - NEW ECMASCRIPT OBJECTS - CREATING A TRUE CLASS & EXTENDING IT!!

> JavaScript’s ability to emulate a class using functions and the prototype is all well and
good, but you want a more conventional class

*/

/*
SOLUTION:
> Use the ES 6 class
> The class is created with the class keyword, providing a constructor to instantiate the
object. You can then include additional functionality to suit your needs. To extend the
class, use the extends keyword, and in the subclass’s constructor, invoke the super class
constructor. You’ll need to do the same within any function that’s shared in both classes
*/
>)
class Book {
	
	constructor(title, author, pubdate) {
		this.title = title;
		this.author = author;
		this.pubdate = pubdate;
	}
	
	getBook() {
		return this.author + " published " + this.title + " in " + this.pubdate;
	}
}


class TypedBook extends Book {
	constructor(title, author, pubdate, type) {
		super.constructor(title, author, pubdate);
		this.type = type;
	}
	
	getBook() {
		return super.getBook() + " - category: " + this.type;
	}
	
	getType() {
		return this.type;
	}
}


var bookA = new TypedBook("Winning Small", "Sally Author", 2012, "history");
console.log(bookA.getBook());
// Sally Author published Winning Small in 2012 - category: history
console.log(bookA.getType()); // history


/*
EXAMPLE:
+) Using Traceur to emulate the ECMAScript 6 class
*/
+) HTML - script files
<script src="https://google.github.io/traceur-compiler/bin/traceur.js"></script>
<script src="https://google.github.io/traceur-compiler/src/bootstrap.js"></script>

+) JavaScript
class Book {
	
	constructor(title, author, pubdate) {
		this.title = title;
		this.author = author;
		this.pubdate = pubdate;
	}
	
	getBook() {
		return this.author + " published " + this.title + " in " + this.pubdate;
	}
}


class TypedBook extends Book {
	
	constructor(title, author, pubdate, type) {
		super.constructor(title, author, pubdate);
		this.type = type;
	}
	
	getBook() {
		return super.getBook() + " - category: " + this.type;
	}
	getType() {
		return this.type;
	}
}

var bookA = new TypedBook("Winning Small", "Sally Author", 2012, "history");
// Sally Author published Winning Small in 2012 - category: history
console.log(bookA.getBook());
// history
console.log(bookA.getType());