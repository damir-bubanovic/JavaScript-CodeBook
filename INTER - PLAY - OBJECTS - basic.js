/***
	!! INTER - PLAY - OBJECTS - basic.js !!
***/



/*Script*/
var customer = {
    name: 'Titus',
    speak: function() {
        return 'My name is ' + this.name;
    },
    address: {
        street: '123 Main Street',
        city: 'Pitsbourgh',
        state: 'PA'
    }
};

document.write(customer.speak() + '<br />')

document.write(customer.name + ' lives at ' + customer.address.street + '<br />');

customer.address.country = 'US';

document.write(customer.address.country + '<br />');



function Person(name, street) {
    this.name = name;
    this.street = street;

    this.info = function() {
        return 'My name is ' + this.name + ' and I live on ' + this.street;
    }
}

var bobSmith = new Person('Bob Smiths', '534 Round of Redemption');
document.write(bobSmith.info() + '<br />');

document.write('Bob is a Person ' + (bobSmith instanceof Person) + '<br />');



function changeName(person) {
    person.name = 'Sue Smith';
};

changeName(bobSmith);
document.write('Bob became ' + bobSmith.name + '<br />');