let width = document.getElementById('width'),
	height = document.getElementById('height'),
	bg = document.getElementById('bg'),
	fontSize = document.getElementById('fontSize'),
	textAlign = document.getElementById('textAlign'),
	div = document.createElement('div'),
	btn = document.getElementById('btn');

class options {
	constructor(height = 200, width = 100, bg = 'red', fontSize = 14, textAlign = 'center') {	

		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
		console.log(this.height);
	}
	createDiv() {
		div.style.cssText = `height: ${this.height}px; width: ${this.width}px; background: ${this.bg}; font-size: ${this.fontSize}px; text-align: ${this.textAlign};`;
		div.textContent = 'Hello';
		document.body.appendChild(div);
	}
}

const Block = new options();
console.log(Block);
Block.createDiv();

btn.addEventListener('click', function() {
	let Blocked = new options(height.value, width.value, bg.value, fontSize.value, textAlign.value);
	Blocked.createDiv();
});