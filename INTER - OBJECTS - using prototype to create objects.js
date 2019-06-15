/*

!!INTER - OBJECTS - USING PROTOTYPE TO CREATE OBJECTS!!

> You want to create a new object, but you don’t want to add all the properties and methods
into the constructor function

*/

/*
SOLUTION:
1)) Use the object’s prototype to add the new properties
	(Tune - object for creating songs -> in lessions before)
	
2) It’s through the prototype that we can add new methods to existing objects
*/
1)
Tune.prototype.addCategory = function(categoryName) {
	this.category = categoryName;
}

2)
var str = 'one';

String.prototype.exclaim = function() {
	if (this.length == 0) {
		return this;
	}
	return this + '!';
}

var str2 = 'two';

console.log(str.exclaim()); // one!
console.log(str2.exclaim()); // two!


/*
EXAMPLE:
1) Instantiating a new object, adding values, and extending the object

ADVANTAGE using Prototype:
>> increased efficiency, When you extend the object using prototype, the
method is created on the object itself, and then shared equally between 
all instances of the objects
DISADVANTAGE using Prototype:
>> If the concatTitleArtist() method was defined using prototype and then 
tried to access these data members, an error occurs

2) If you define the method using prototype directly in the constructor function, it is
created in the scope of the function and does have access to the private data, but the
data is overridden each time a new object instance is created
*/
1)
function Tune(title, artist) {
	this.concatTitleArtist = function() {
		return title + " " + artist;
	}
}

// create instance, print out values
var happySong = new Tune("Putting on the Ritz", "Ella Fitzgerald");

// extend the object
Tune.prototype.addCategory = function(categoryName) {
	this.category = categoryName;
}

// add category
happySong.addCategory("Swing");

// print song out to new paragraph
var song =  "Title and artist: " + happySong.concatTitleArtist() +
			" Category: " + happySong.category;
console.log(song);
// "Title and artist: Putting on the Ritz Ella Fitzgerald Category: Swing"

2)
function Tune(title, artist) {
	var title = title;
	var artist = artist;
	Tune.prototype.concatTitleArtist = function() {
		return title + " " + artist;
	}
}

var sad = new Tune("Sad Song", "Sad Sisters");
var happy = new Tune("Happy", "Happy Singer");

console.log(sad.concatTitleArtist()); // Happy Happy Singer