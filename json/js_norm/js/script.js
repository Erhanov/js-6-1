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

	let formOverlay = document.querySelector('.main-form'),
		formContact = document.querySelector('.contact-form'),
		input = document.getElementsByTagName('input'),
		statusMessage = document.createElement('div');

	statusMessage.classList.add('status');


	formOverlay.addEventListener('submit', function(event) {
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

		request.addEventListener('readystatechange', function() {
			if (request.readyState < 4) {
				statusMessage.innerHTML = message.loading;

			} else if (request.readyState == 4 && request.status == 200) {
				statusMessage.innerHTML = message.success;
			} else {
				statusMessage.innerHTML = message.failure;
				console.log(request.readyState);
				console.log(request.state);
			}
		});

		for (let i = 0; i < input.length; i++) {
			input[i].value = '';
		}
	});

	let modalInput = document.querySelector('.popup-form__input');

	console.log(modalInput);

	modalInput.addEventListener('input', function() {
		let firstDigit = modalInput.value.charCodeAt(0);
		if (firstDigit > 57 || firstDigit < 42) {
			modalInput.value = '';
		}
		let secondDigit = modalInput.value.charCodeAt(1); 
		if (secondDigit > 57 || secondDigit < 48) {
			modalInput.value = '+';
		}
		console.log(firstDigit); 
	});

	formContactaddEventListener('submit', function(event) {
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

		request.addEventListener('readystatechange', function() {
			if (request.readyState < 4) {
				statusMessage.innerHTML = message.loading;

			} else if (request.readyState == 4 && request.status == 200) {
				statusMessage.innerHTML = message.success;
			} else {
				statusMessage.innerHTML = message.failure;
				console.log(request.readyState);
				console.log(request.state);
			}
		});

		for (let i = 0; i < input.length; i++) {
			input[i].value = '';
		}
	});

	let modalInput = document.querySelector('.popup-form__input');

	console.log(modalInput);

	modalInput.addEventListener('input', function() {
		let firstDigit = modalInput.value.charCodeAt(0);
		if (firstDigit > 57 || firstDigit < 42) {
			modalInput.value = '';
		}
		let secondDigit = modalInput.value.charCodeAt(1); 
		if (secondDigit > 57 || secondDigit < 48) {
			modalInput.value = '+';
		}
		console.log(firstDigit); 
	});

});