/*

!!OBJECTS - BASIC!!

EXTRA:
> Variables don’t actually hold objects.
	>> Instead they hold a reference to an object.
		>>> The reference is like a pointer or an address to the actual object
		npr. car.color
		
> A method is just a function that’s been assigned to a property name in an object
	>> You call functions using the function name, while you call methods using the 
	object dot notation and the name of the property. 
	>> You can also use the keyword this in a method to refer to the object whose 
	method was called
	
> When using the function keyword within an object we don’t give the function an 
explicit name
	>> We use the property name in the object rather than explicitly naming the 
	function

*/

/*
BASIC CODE:

> property name and property value (inside object)
> no two properties in an object can have the same name
*/
var chevy = {
	make: "Chevy",
	model: "Bel Air",
	year: 1957,
	color: "red",
	passengers: 2,
	convertible: false,
	mileage: 1021
};

/*
> Object with no properties
*/
var myAnimal = { };


/*
> Access & use a property
*/
var miles = chevy.mileage;

if (miles < 2000) {
	buyIt();
}


/*
> Change a property
*/
chevy.mileage = 500;
/*OR*/
chevy["mileage"] = 500;


/*
> Add a new property
*/
chevy.oldSchool = true;


/*
> Compute with properties
*/
if (chevy.year < 1965) {
	classic = true;
}
for (var i = 0; i < chevy.passengers; i++) {
	addPersonToCar();
}


/*
> Delete a property
	>> If you try to use chevy.year after deleting it, it will evaluate to undefined
*/
delete chevy.year;


/*
> Use console.log to display an object in the console
*/
console.log(fiat);
// Object {make: "Fiat", model: "500", year: 1957, color: "Medium Blue", passengers: 2…}



/*
Functions in objects
> We don’t supply a name in the function definition, we just use the function keyword 
followed by the body. The name of the function is the name of the property
> We typically refer to functions inside an object as methods
*/
var fiat = {
	make: "Fiat",
	model: "500",
	year: 1957,
	color: "Medium Blue",
	passengers: 2,
	convertible: false,
	mileage: 88000,
	started: false,
	fuel: 0,
	
	start: function() {
		this.started = true;
	},
	
	stop: function() {
		this.started = false;
	},
	
	drive: function() {
		if (this.started) {
			alert("Zoom zoom!");
		} else {
			alert("You need to start the engine first.");
		}
	}
	
	/*Fuel is an object property, so we need the this keyword, but amount is a 
	function parameter, so we don’t need this to use it	*/
	addFuel: function(amount) {
		this.fuel = this.fuel + amount;
	}

};


/*
> Access function from object
*/
fiat.drive();

/*
Access object varible indide function (method)
*/
this.started = true;



/*
> Iterate through an object’s properties (find what are objects properties)
*/
for(var prop in chevy) {
	console.log(prop + ": " + chevy[prop]);
}



/*
EXAMPLE:
*/
var song = {
	name: "Walk This Way",
	artist: "Run-D.M.C.",
	minutes: 4,
	seconds: 3,
	genre: "80s",
	playing: false,
	
	play: function() {
		if(!this.playing) {
			this.playing = true;
			console.log("Playing " + this.name + " by " + this.artist);
		}
	},
	
	pause: function() {
		if(this.playing) {
			this.playing = false;
		}
	}
};

song.play();
song.pause();
