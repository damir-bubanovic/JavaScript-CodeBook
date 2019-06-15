/***
	!! INTER - PLAY - OBJECTS - advanced.js !!
***/

/**
 * Prototypes
 *  -extensions of object function
 */
function Mammal(name) {
    this.name = name;
    this.getInfo = function() {
        return 'This mammals name is ' + this.name;
    }
}

Mammal.prototype.sound = 'Grrr';
Mammal.prototype.makeSoung = function() {
    return this.name + ' says ' + this.sound;
};

var grover = new Mammal('Grover');

document.write(grover.makeSoung() + '<br />');


for(var prop in grover) {
    document.write(prop + ' : ' + grover[prop] + '<br />');
}


document.write('name Property of Grover: ' + grover.hasOwnProperty('name') + '<br />');
document.write('sound Property of Grover: ' + grover.hasOwnProperty('sound') + '<br />');



Array.prototype.inArray = function inArray(value) {
    for (var i = 0; i < this.length; i++) {
        if(this[i] === value) {
            return true;
        } else {
            return false;
        }
    }
}

var sampleArray = [1,2,3,4];
document.write('3 in array ' + sampleArray.inArray(3) + '<br />');



/**
 * Getters & Setters
 */
var address = {
    street: 'No street',
    city: 'No city',
    state: 'No state',

    get getAddress() {
        return this.street + ', ' + this.city + ', ' + this.state;
    },

    set setAddress(theAddress) {
        var parts = theAddress.toString().split(', ');
        this.street = parts[0] || '';
        this.city = parts[1] || '';
        this.state = parts[2] || '';
    }
}


address.setAddress = '123 main street, Pittsbourgh, PA';

document.write('Address is: ' + address.getAddress + '<br />');

document.write('City: ', address.city + '<br />');




function Point() {
    this.xPos = 0,
    this.yPos = 0
}

Object.defineProperty(Point.prototype, 'pointPos', {
    get: function() {
        return 'X: ' + this.xPos + ' Y: ' + this.yPos;
    },
    set: function() {
        var parts = thePoint.toString().split(', ');
        this.xPos = parts[0] || '';
        this.yPos = parts[1] || '';
    }
});


var aPoint = new Point();
aPoint.pointPos = '100, 200';
document.write('Point position: ' + aPoint.pointPos + '<br />')




/**
 * Inheritance
 */
function Animal() {
    this.name = 'Animal';
    this.toString = function(){
        return 'My name is ' + this.name;
    };
}

function Canine() {
    this.name = 'Canine';
}

function Wolf() {
    this.name = 'Wolf';
}

Canine.prototype = new Animal();
Wolf.prototype = new Canine();

Canine.prototype.constructor = Canine;
Wolf.prototype.constructor = Wolf;

var arcticWolf = new Wolf();

document.write(arcticWolf.toString() + '<br />');
document.write('Wolf instance of animal: ' + (arcticWolf instanceof Animal) + '<br />');


Animal.prototype.sound = 'Grrrr';
Animal.prototype.getSound = function() {
    return this.name + ' says ' + this.sound;
}

Canine.prototype.sound = 'Woof';
Wolf.prototype.sound = 'Grrr Woof';

document.write(arcticWolf.getSound() + '<br />');



function Rodent() {
    this.name = 'Rodent';
}

function Rat() {
    this.name = 'Rat'
}


Rodent.prototype = new Animal();

Rat.prototype = Rodent.prototype;
Rodent.prototype.constructor = Rodent;
Rat.prototype.constructor = Rat;

var caneRat = new Rat();

document.write(caneRat.toString() + '<br />');



function extend(Child, Parent) {
    var Temp = function() {};

    Temp.prototype = Parent.prototype;

    Child.prototype = new Temp();

    Child.prototype.constructor = Child;
}


function Deer() {
    this.name = 'Deer';
    this.sound = 'Snort';
}

extend(Deer, Animal);

var elk = new Deer();

document.write(elk.getSound() + '<br />');




/**
 * Parent Methods
 */
function Vehicle(name) {
    this.name = 'Vehicle';
}

Vehicle.prototype = {
    drive: function() {
        return this.name + ' drives forward';
    },
    stop: function() {
        return this.name + ' stops';
    }
}

function Truck(name) {
    this.name = name;
}

Truck.prototype = new Vehicle();
Truck.prototype.constructor = Truck;

Truck.prototype.drive = function() {
    var driveMsg = Vehicle.prototype.drive.apply(this);

    return driveMsg += ' through field';
}

var jeep = new Truck('Jeep');

document.write(jeep.drive() + '<br />');
document.write(jeep.stop() + '<br />');




/**
 * Classes
 */
class Point {
    constructor(xPos, yPos) {
        this.xPos = xPos;
        this.yPos = yPos;
    }

    getPos() {
        return 'X: ' + this.xPos + ', Y: ' + this.yPos;
    }
}


var point = new Point(100, 234);
document.write('Point Positions: ' + point.getPos() + '<br />');