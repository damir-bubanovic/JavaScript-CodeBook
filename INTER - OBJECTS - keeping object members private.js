/*

!!INTER - OBJECTS - KEEPING OBJECT MEMBERS PRIVATE!!

> You want to keep one or more object properties private, so they can’t be accessed outside
the object instance

*.concat() - used to join two or more arrays

*/

/*
SOLUTION:
+) When creating the private data members, do not use the this keyword with the member
*/
+)
function Tune(song, artist) {
	var title = song;
	this.concat = function() {
		return title + " " + artist;
	}
}

var happySongs = [];
happySongs[0] = new Tune("Putting on the Ritz", "Ella Fitzgerald");

// undefined
console.log(happySongs[0].title);

// prints out correct title and artist
console.log(happySongs[0].concat());


/*
EXAMPLE:
1) Be aware, though, that the privacy of the variable is somewhat illusory. One can easily
assign a value to that property outside the constructor function, and overwrite the private
data
2) Developers also typically use a naming convention where private data members begin with 
an underscore, to highlight that they aren’t meant to be accessed or set directly
*/
1)
happySongs[0].title = 'testing';
console.log(happySongs[0].title); // testing

2)
function Tune(song,artist) {
	var _title = song;
	this.concat = function() {
		return _title + " " + artist;
	}
}
