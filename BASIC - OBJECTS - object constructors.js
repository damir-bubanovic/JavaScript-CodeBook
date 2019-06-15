/*

!!BASIC - OBJECTS - OBJECT CONSTRUCTORS!!

> Think of a constructor like a little factory that can
create an endless number of similar objects

> The only thing you don’t want to do is return a value (other than this.)

*/

/*
EXAMPLE:
1) instead of object literal
2) use object constructor
	2.1) first we define a constructor
		(Capital leter for the name of the function -> object constructor)
	2.2) then we use it to create objects
*/
1)
/*simple dog object*/
var dog = {
	name: "Fido",
	breed: "Mixed",
	weight: 38
};

2)
/*create any dog with same properties*/
2.1)
function Dog(name, breed, weight) {
	this.name = name;
	this.breed = breed;
	this.weight = weight;
}
2.2)
var fluffy = new Dog("Fluffy", "Poodle", 30);
var spot = new Dog("Spot", "Chihuahua", 10);

3) /*Usage*/
function Dog(name, breed, weight) {
	this.name = name;
	this.breed = breed;
	this.weight = weight;
}


var fido = new Dog("Fido", "Mixed", 38);
var fluffy = new Dog("Fluffy", "Poodle", 30);
var spot = new Dog("Spot", "Chihuahua", 10);


var dogs = [fido, fluffy, spot];

for(var i = 0; i < dogs.length; i++) {
	var size = "small";

	if (dogs[i].weight > 10) {
		size = "large";
	}
	
	console.log("Dog: " + dogs[i].name + " is a " + size + " " + dogs[i].breed);
}

4) /*EXAMPLE*/
function widget(partNo, size) {
	this.partNo = partNo;
	this.size = size;
}

function FormFactor(material, widget) {
	this.material = material;
	this.widget = widget;
}

var widgetA = new widget(100, "large");
var widgetB = new widget(101, "small");

var formFactorA = new FormFactor("plastic", widgetA);
var formFactorB = new ForumFactor("metal", widgetB);


/*
EXAMPLE:
> put methods into constructors
*/
function Dog(name, breed, weight) {
	this.name = name;
	this.breed = breed;
	this.weight = weight;
	this.bark = function() {
					if(this.weight > 25) {
						alert(this.name + " says Woof!");
					} else {
						alert(this.name + " says Yip!");
					}
				};
}



/*
MAKING CODE MORE REUSABLE
1) Rewiring the arguments as an object literal
2) Object Instances
	> each time you call a constructor using the new operator, you are creating 
	a new instance of an object
	> object is an instance of some constructor
		>> inspect the constructor that made an object with the instanceof operator
*/
var cadiParams = {
	make: "GM",
	model: "Cadillac",
	year: 1955,
	color: "tan",
	passengers: 5,
	convertible: false,
	mileage: 12892
};

var cadi = new Car(cadiParams);


function Car(params) {
	this.make = params.make;
	this.model = params.model;
	this.year = params.year;
	this.color = params.color;
	this.passengers = params.passengers;
	this.convertible = params.convertible;
	this.mileage = params.mileage;
	this.started = false;
	
	this.start = function() {
		this.started = true;
	};

	this.stop = function() {
		this.started = false;
	};
	
	this.drive = function() {
		if(this.started) {
			alert("Zoom zoom!");
		} else {
			alert("You need to start the engine first.");
		}
	};
	
}


var limoParams = {
	make: "Webville Motors",
	model: "limo",
	year: 1983,
	color: "black",
	passengers: 12,
	convertible: true,
	mileage: 21120
};

var limo = new Car(limoParams);
var limoDog = new Dog("Rhapsody In Blue", "Poodle", 40);

console.log(limo.make + " " + limo.model + " is a " + typeof limo);
console.log(limoDog.name + " is a " + typeof limoDog);

2)
var cadiParams = {
	make: "GM",
	model: "Cadillac", 
	year: 1955, 
	color: "tan",
	passengers: 5, 
	convertible: false, 
	mileage: 12892
};

var cadi = new Car(cadiParams);
if (cadi instanceof Car) {
	console.log("Congrats, it's a Car!");
};


/*
EXAMPLE:
> Even constructed objects can have their own independent properties
> So if I change a dog object after I create it, it is still a dog
*/
1) /*Delete property*/
var fido = new Dog("Fido", "Mixed", 38);
fido.owner = "Bob";
delete fido.weight;

2) /*Add new methods*/
fido.trust = 	function(person) {
					return (person === "Bob");
				};

3) /*Add a method to fido, only fido has that method*/
var notBite = fido.trust("Bob");

var spot = new Dog("Spot", "Chihuahua", 10);
notBite = spot.trust("Bob");
