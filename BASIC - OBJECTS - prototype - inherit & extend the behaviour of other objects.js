/*

!!BASIC - OBJECTS - PROTOTYPE - INHERIT & EXTEND THE BEHAVIOUR OF OTHER OBJECTS!!

> JavaScript doesn’t have a classical object-oriented model
> JavaScript doesn’t have classes at all
> In JavaScript, objects inherit behavior from other objects, which we call prototypal 
inheritance, or inheritance based on prototypes

*/

/*
> JavaScript uses what is known as prototypal inheritance, and the object you’re inheriting 
behavior from is called the prototype
> We can always override properties and methods by supplying them in the object instance
*/

/*
Dog Prototype STEPS:
1) This is the constructor to create an instance of a dog
2) set up our dog prototype. 
	>> We want it to have the species property and the bark, run and wag methods
3) Testing
4*) Override the prototype
*/
1)
function Dog(name, breed, weight) {
	this.name = name;
	this.breed = breed;
	this.weight = weight;
}

2)
Dog.prototype.species = "Canine";

Dog.prototype.bark = 	function() {
							if (this.weight > 25) {
								console.log(this.name + " says Woof!");
							} else {
								console.log(this.name + " says Yip!");
							}
						};

Dog.prototype.run = 	 function() {
							console.log("Run!");
						};
						
Dog.prototype.wag = 	 function() {
							console.log("Wag!");
						};
						
3)
var fido = new Dog("Fido", "Mixed", 38);
var fluffy = new Dog("Fluffy", "Poodle", 30);
var spot = new Dog("Spot", "Chihuahua", 10);

fido.bark();
fido.run();
fido.wag();

fluffy.bark();
fluffy.run();
fluffy.wag();

spot.bark();
spot.run();
spot.wag();

4*)
....
var spot = new Dog("Spot", "Chihuahua", 10);

spot.bark = 	function() {
					console.log(this.name + " says WOOF!");
				};

// calls to fido and fluffy are the same
spot.bark();
spot.run();
spot.wag();


/*
> Now that we have a prototype, if we add any methods to that prototype, even after
we’ve already created dog objects, all dogs inheriting from the prototype immediately
and automatically get this new behavior
1) add a method to the prototype for sitting
*/
1)
var barnaby = new Dog("Barnaby", "Basset Hound", 55);

Dog.prototype.sit = 	function() {
							console.log(this.name + " is now sitting");
						}

barnaby.sit();


/*
> Let’s make the sit method a little more interesting: dogs will start in a state of not
sitting (in other words, standing up). So, when sit is called, if a dog isn’t sitting, we’ll
make him sit. Otherwise, we’ll let the user know he’s already sitting
*/
Dog.prototype.sitting = false;

Dog.prototype.sit = 	function() {
							if(this.sitting) {
								console.log(this.name + " is already sitting");
							} else {
								this.sitting = true;
								console.log(this.name + " is now sitting");
							}
						};

						
						
/*
CHAIN OF PROTOTYPES
> Rather than having an instance that inherits properties from just one prototype, there might 
be a chain of one or more prototypes your instance can inherit from

EXAMPLE:
1) To create an object that inherits from the dog prototype, we just use new with the 
Dog constructor
	>> this code creates an object that inherits from the dog prototype
2) Create ShowDog constructor
3) Now that we have a constructor, we can set its prototype property to a new dog instance
4) All The CODE -> dog prototype set up -> some properties and methods that are specific to show 
dogs we can add
5) Show dog instance. It inherits from the show dog prototype, which inherits from the dog prototype
6) final peace of code
*/
1)
var aDog = new Dog();

2)
function ShowDog(name, breed, weight, handler) {
	this.name = name;
	this.breed = breed;
	this.weight = weight;
	this.handler = handler;
}

3)
ShowDog.prototype = new Dog();


4) 
/*Early explained*/
function ShowDog(name, breed, weight, handler) {
	this.name = name;
	this.breed = breed;
	this.weight = weight;
	this.handler = handler;
}
ShowDog.prototype = new Dog();
ShowDog.prototype.constructor = ShowDog; // 6) final peace of code

/*All our show dogs are in the Webville league, so we'll add this property to the prototype*/
Showdog.prototype.league = "Webville";

/*We’re adding all these properties to the show dog prototype so all show dogs inherit them*/
ShowDog.prototype.stack = 	function() {
								console.log("Stack");
							};

ShowDog.prototype.bait = 	function() {
								console.log("Bait");
							};
							
ShowDog.prototype.gait = 	function(kind) {
								console.log(kind + "ing");
							};
							
ShowDog.prototype.groom = 	function() {
								console.log("Groom");
							};

5) /*code to create the instance*/
var fido = new Dog("Fido", "Mixed", 38);

if (fido instanceof Dog) {
	console.log("Fido is a Dog");
}
if (fido instanceof ShowDog) {
	console.log("Fido is a ShowDog");
}

var scotty = new ShowDog("Scotty", "Scottish Terrier", 15, "Cookie");

if (scotty instanceof Dog) {
	console.log("Scotty is a Dog");
}
if (scotty instanceof ShowDog) {
	console.log("Scotty is a ShowDog");
}

console.log("Fido constructor is " + fido.constructor);
console.log("Scotty constructor is " + scotty.constructor);


/*FINAL CODE - GREAT*/
function ShowDog(name, breed, weight, handler) {
	Dog.call(this, name, breed, weight);
	this.handler = handler;
}

ShowDog.prototype = new Dog();
ShowDog.prototype.constructor = ShowDog;

ShowDog.prototype.league = "Webville";

ShowDog.prototype.stack = 	function() {
								console.log("Stack");
							};
ShowDog.prototype.bait = 	function() {
								console.log("Bait");
							};
ShowDog.prototype.gait = 	function(kind) {
								console.log(kind + "ing");
							};
ShowDog.prototype.groom = 	function() {
								console.log("Groom");
							};
							
var fido = new Dog("Fido", "Mixed", 38);
var fluffy = new Dog("Fluffy", "Poodle", 30);
var spot = new Dog("Spot", "Chihuahua", 10);
var scotty = new ShowDog("Scotty", "Scottish Terrier", 15, "Cookie");
var beatrice = new ShowDog("Beatrice", "Pomeranian", 5, "Hamilton");

fido.bark();
fluffy.bark();
spot.bark();
scotty.bark();
beatrice.bark();
scotty.gait("Walk");
beatrice.groom();
