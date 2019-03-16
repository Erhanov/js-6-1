let input = document.getElementById('input');
	

console.log(input);

input.addEventListener('input', () => {
	for (let i = 0; i < input.value.length; i++) {
		let firstDigit = input.value.charCodeAt(i);
		console.log(firstDigit);
		if (firstDigit > 57 || firstDigit < 48) {
			input.value = '';
		}
	}
});

