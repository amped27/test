document.addEventListener('DOMContentLoaded', function() {

	const burger = document.querySelector('.header__burger');
	const nav = document.querySelector('.header__nav');
	const header = document.querySelector('.header');
	const html = document.querySelector('html');

	window.addEventListener('scroll', function() {
		if(this.scrollY > 100) {
			header.classList.add('fixed');
		} else {
			header.classList.remove('fixed');
		}
	});

	function toggleNav() {

		if(nav.classList.contains('show')) {
			nav.classList.replace('show', 'hide');
			header.classList.replace('show', 'hide');
			html.classList.remove('no-scroll');
		} else {
			nav.classList.replace('hide', 'show');
			header.classList.replace('hide', 'show');
			html.classList.add('no-scroll');
		}

	}

	burger.addEventListener('click', toggleNav);

});