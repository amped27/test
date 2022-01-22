// const { default: VanillaTilt } = require("vanilla-tilt");

document.addEventListener('DOMContentLoaded', function() {

	let parallax = new Rellax('.parallax');

	VanillaTilt.init(document.querySelector('#tilt'), {
		reverse: true
	});

});