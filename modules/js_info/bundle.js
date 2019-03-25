(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let myModule = require('./script');

let myModuleTest = new myModule();

myModuleTest.hello();
myModuleTest.goodbye();
},{"./script":2}],2:[function(require,module,exports){

	
// function User (name, age) {
// 	this.name = name;
// 	userAge = age;

// 	this.getAge = function() {
// 		return userAge;
// 	}

// 	this.setAge = function(age) {
// 		if (typeof age === 'number' && age > 0 && age < 110) {
// 			userAge = age;
// 		} else {
// 			console.log('Error');
// 		}
// 	}

// 	this.say = function() {
// 		console.log(`User is ${this.name}, age is ${userAge}`);
// 	}
// }

// let user = new User('I', 25);
// console.log(user.name);
// console.log(user.userAge);
// user.say();
// console.log(user.getAge());

// user.setAge(30);
// console.log(user.getAge());

// let number = 1;

// (function() {
// 	let number = 2;
// 	console.log(number);

// 	return console.log(number + 3);
// }());

// console.log(number);

// let user = (function() {
// 	let private = function() {
// 		console.log('I am private');
// 	};
// 	let sayHello = function() {
// 		console.log('HellO');
// 	};
// 	return {
// 		sayHello: sayHello	
// 	};
// }());

// console.log(user);
// console.log(user.sayHello());

function myModule() {
	this.hello = function() {
		return 'hello';
	};
	this.goodbye = function() {
		return 'goodbye';
	};
}

module.exports = myModule;
},{}]},{},[1]);
