/* ES5
function User(name, id) {
	this.name = name;
	this.id = id;
	this.human = true;
	this.hello = function() {
		console.log('hello ' + this.name);
	}
}

User.prototype.exit = function(name) {
	console.log('Person ' + this.name + ' is exit');
}

let azat = new User('azat', 25),
	alex = new User('alex', 20);

console.log(azat);
console.log(alex);

azat.exit();
*/

/*Es6

class User {
	constructor(name, id) {
		this.name = name;
		this.id = id;
		this.human = true;

	}
}

*/

/*
function showThis(a, b) {
	console.log(this);
	function sum() {
		console.log(this);
		return a + b;
	}
	console.log(sum());
}

showThis(4, 5);
*/
// Вызов функций

/*
let obj = {
	a: 20,
	b: 15,
	sum: function() {
		console.log(this);
		function shout() {
			console.log(this);
		}
		shout();
	}
}

obj.sum();
*/
// Обьект - this = obj


let user = {
	name: 'John'
};

function sayName(surname) {
	console.log(this);
	console.log(this.name + ' ' + surname);
}

console.log(sayName.call(user, 'Smith'));
console.log(sayName.apply(user, ['Snow']));

function count(number) {
	return this * number;
}

let double = count.bind(2);

console.log(double(3));