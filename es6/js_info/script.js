let name = 'azat',
	age = 30,
	mail = 'ex@gmail.com';

document.write(`User ${name} ${age}  лет. Mail is ${mail}`);

function makeArray() {
	let items = [];

	for (let i = 0; i < 10; i++) {
		let item = function() {
			console.log(i);
		};
		items.push(item);
	}

	return items;
}

let arr = makeArray();

arr[1]();
arr[3]();
arr[7]();

let fun = () => {
	console.log(this);
}

fun();

let obj = {
	number : 5,
	sayNumber : function() {
		let say = () => {
			console.log(this);
		}
		say();
	}
}

obj.sayNumber();

function calcOrDouble(number, basis = 2) {
	//basis = basis || 2; // ES5

	console.log(number * basis);
}

calcOrDouble(3, 5);
calcOrDouble(6);

class Rectangle {
	constructor(height, width = 20) {
		this.height = height;
		this.width = width;
	}
	calcArea() {
		return this.height * this.width;
	}
}

const square = new Rectangle(10);

console.log(square.calcArea());

let video = ['youtube', 'vimeo', 'rutube'],
	blogs = ['wordpress', 'livejournal', 'blogger'],
	internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log(a, b, c) {
	console.log(a);
	console.log(b);
	console.log(c);
}

let numbers = [2, 5, 8];

log(...numbers);