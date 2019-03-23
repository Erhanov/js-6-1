let drink = 0;

function shoot(arrow) {
	console.log('Вы сделали выстрел! ...');

	let promise = new Promise(function(resolve, reject) {
		setTimeout(function() {
			Math.random() > .5 ? resolve({}) : reject('Вы промахнулись');
		}, 3000);
	});
	
	return promise;
};

function win() {
	console.log('U win');
	(drink == 1) ? buyBeer() : giveMoney();
}

function buyBeer() {
	console.log('U bought beer! OH');
}

function giveMoney() {
	console.log('U have accepted money');
}

function loose() {
	console.log('U lose');
}

shoot({})
		.then(mark => console.log('Вы попали в цель!'))
		.then(win)
		.catch(loose);