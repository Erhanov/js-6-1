window.addEventListener('DOMContentLoaded', () => {

	'use strict';
	let tab = document.querySelectorAll('.info-header-tab'),
		info = document.querySelector('.info-header'),
		tabContent = document.querySelectorAll('.info-tabcontent');

	let hideTabContent = (a) => {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}

	hideTabContent(1);

	let showTabContent = (a) => {
		if (tabContent[a].classList.contains('hide')) {
			tabContent[a].classList.remove('hide');
			tabContent[a].classList.add('show');
		}
	}

	info.addEventListener('click', (event) => {
		let target = event.target;
		if (target && target.classList.contains('info-header-tab')) {
			for (let i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					hideTabContent(0);
					showTabContent(i);
					break;
				}
			}
		}
	});

	// Timer 
	const deadline = '2019-03-10';

	let getTimeRemain = (endTime) => {
		let zeroPlus = (date) => {
			if (date < 10 && date >= 0) date = '0' + date;
			return date; 
		}

		let t = Date.parse(endTime) - Date.parse(new Date()),
			seconds = zeroPlus(Math.floor((t / 1000) % 60)),
			minutes = zeroPlus(Math.floor((t / 1000 / 60) % 60)),
			hours = zeroPlus(Math.floor(t / (1000 * 60 * 60)));


		if (seconds < 0) {
			return {
				'total' : t,
				'hours' : '00',
				'minutes' : '00',
				'seconds' : '00'
			}
		} else {
			return {
				'total' : t,
				'hours' : hours,
				'minutes' : minutes,
				'seconds' : seconds
			}
		}
	}

	let setClock = (id, endTime) => {
		let timer = document.getElementById(id),
			hours = document.querySelector('.hours'),
			minutes = document.querySelector('.minutes'),
			seconds = document.querySelector('.seconds'),
			timeInterval = setInterval(updateClock, 1000);

		console.log(getTimeRemain())

		function updateClock() {
			let t = getTimeRemain(endTime);

			hours.textContent = t.hours;
			minutes.textContent = t.minutes;
			seconds.textContent = t.seconds;

			if (t.total < 0) {
				clearInterval(timeInterval);
			}
		}
	}

	setClock('timer', deadline);


	// Modal

	let more = document.querySelector('.more'),
		descr_btn = document.querySelectorAll('.description-btn'),
		overlay = document.querySelector('.overlay'),
		close = document.querySelector('.popup-close');

	let showModal = () => {
		overlay.style.display = 'block';
		overlay.classList.add('.more-splash');
		document.body.style.overflow = 'hidden';
	}

	more.addEventListener('click', () => {
		showModal();
	});

	close.addEventListener('click', () => {
		overlay.style.display = 'none';
		more.classList.remove('.more-splash');
		document.body.style.overflow = '';
	});

	descr_btn.forEach(function(item, i, arr) {
		item.addEventListener('click', () => {
			showModal();
		});
	});

	//form

	let message = {
		loading: 'Loading',
		success: 'Everything is Fine',
		failure: 'Smth got wrong' 
	}

	let form = document.querySelector('.main-form'),
		input = document.getElementsByTagName('input'),
		statusMessage = document.createElement('div');

	statusMessage.classList.add('status');

	let SendForm = (event, form) => {
		event.preventDefault();
		form.appendChild(statusMessage);

		let request = new XMLHttpRequest();

		request.open('POST', 'server.php');
		request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

		let formData = new FormData(form);

		let obj = {};

		formData.forEach(function(value, key) {
			obj[key] = value;
		});

		let json = JSON.stringify(obj);

		request.send(json);

		let promise = new Promise(function(resolve, reject) {
			request.addEventListener('readystatechange', function() {
				if (request.readyState < 4) {
					resolve();
				} else if (request.readyState == 4 && request.status == 200) {
					resolve()
				} else {
					reject();
				}
			});
		});

		return promise;
	}

	let clearInput = () => {
		for (let i = 0; i < input.length; i++) {
			input[i].value = '';
		}
	}

	let inputControl = (input) => {
		let firstDigit = input.value.charCodeAt(0);
		if (firstDigit > 57 || firstDigit < 42) {
			input.value = '';
		}
		let secondDigit = input.value.charCodeAt(1); 
		if (secondDigit > 57 || secondDigit < 48) {
			input.value = '+';
		}
		console.log(firstDigit);
	}

	form.addEventListener('submit', function(event) {
		SendForm(event, form).then(() => statusMessage.innerHTML = message.loading)
						.then(() => statusMessage.innerHTML = message.success)
						.catch(() => statusMessage.innerHTML = message.failure)
						.then(clearInput());
	});

	let modalInput = document.querySelector('.popup-form__input');

	console.log(modalInput);

	modalInput.addEventListener('input', function() {
		inputControl(modalInput); 
	});

	let contactForm = document.querySelector('.formContact');

	contactForm.addEventListener('submit', function(event) {
		SendForm(event, contactForm).then(() => statusMessage.innerHTML = message.loading)
						.then(() => statusMessage.innerHTML = message.success)
						.catch(() => statusMessage.innerHTML = message.failure)
						.then(clearInput());
	});

	let contactInput = document.querySelector('.contact-input');

	console.log(contactInput);

	contactInput.addEventListener('input', function() {
		inputControl(contactInput); 
	});


	let slideIndex = 1,
		slides = document.querySelectorAll('.slider-item'),
		prev = document.querySelector('.prev'),
		next = document.querySelector('.next'),
		dotsWrap = document.querySelector('.slider-dots'),
		dots = document.querySelectorAll('.dot');

	let showSlides = (n) => {
		if (n > slides.length) {
			slideIndex = 1;
		}

		if (n < 1) {
			slideIndex = slides.length;
		}

		slides.forEach((item) => item.style.display = 'none');

		dots.forEach((item) => item.classList.remove('dot-active'));

		slides[slideIndex - 1].style.display = 'block';
		dots[slideIndex - 1].classList.add('dot-active'); 
	}

	let plusSlides = (n) => {
		showSlides(slideIndex += n);
	}

	let currentSlide = (n) => {
		showSlides(slideIndex = n);
	}

	prev.addEventListener('click', () => {
		plusSlides(-1);
	});

	next.addEventListener('click', () => {
		plusSlides(1);
	});

	dotsWrap.addEventListener('click', (event) => {
		for (let i = 0; i < dots.length + 1; i++) {
			if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
				currentSlide(i);
			}
		}
	})

	showSlides(slideIndex);

	//calc

	let persons = document.querySelectorAll('.counter-block-input')[0],
		restDays = document.querySelectorAll('.counter-block-input')[1],
		place = document.getElementById('select'),
		totalValue = document.getElementById('total'),
		personsSum = 0,
		daysSum = 0,
		total = 0;

	totalValue.innerHTML = 0;

	persons.addEventListener('input', function() {
		console.log(persons.value.charCodeAt(0));
		if (isNaN(restDays.value.charCodeAt(0))) {
			restDays.value = '';
		}
	});

	restDays.addEventListener('input', function() {
		console.log(restDays);
		console.log(restDays.value.charCodeAt(0));
		if (isNaN(restDays.value.charCodeAt(0))) {
			restDays.value = '';
		}
	});

	persons.addEventListener('change', function() {
		personsSum = +this.value;
		total = (daysSum + personsSum) * 4000;

		if (restDays.value == '' || persons.value == '') {
			totalValue.innerHTML = 0;
		} else {
			totalValue.innerHTML = total;
		}
	});

	restDays.addEventListener('change', function() {
		daysSum = +this.value;
		total = (daysSum + personsSum) * 4000;

		if (restDays.value == '' || persons.value == '') {
			totalValue.innerHTML = 0;
		} else {
			totalValue.innerHTML = total;
		}
	});

	place.addEventListener('change', function() {
		if (restDays.value == '' || persons.value == '') {
			totalValue.innerHTML = 0;
		} else {
			let a = total;
			totalValue.innerHTML = a * this.options[this.selectedIndex].value;
		}
	});

});





	