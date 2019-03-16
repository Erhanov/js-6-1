let age = document.getElementById('age');

age.addEventListener('input', function() {
	function showUser(surname, name) {
		this.surname = surname;
		this.name = name;
		this.value = age.value;
		console.log("Пользователь " + this.surname + " " + this.name + ", его возраст " + this.value);
	}

	let azat = new showUser('Erzhanov', 'Azat');
});


