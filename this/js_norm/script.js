let age = document.getElementById('age');
 
function showUser(surname, name) {
	this.surname = surname;
	this.name = name;
	this.value = age.value;
	alert("Пользователь " + this.surname + " " + this.name + ", его возраст " + this.value);
}

let azat = new showUser('Erzhanov', 'Azat');
