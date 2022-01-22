document.addEventListener('DOMContentLoaded', function() {

	const slides = document.querySelectorAll('.fpTestimony__slider__item');
	const nbSlides = slides.length;
	const before = document.querySelector('#btn-left');
	const after = document.querySelector('#btn-right');
	
	const second = 'fpTestimony__slider__item--second';
	const third = 'fpTestimony__slider__item--third';
	
	let count = 0;
	
	function nextSlide() {
	
		slides[count].classList.remove('fpTestimony__slider__item--first');
		document.querySelector('.' + second).classList.remove(second);
		document.querySelector('.' + third).classList.remove(third);
		
		gsap.fromTo(slides[count], { scale:1, y:0 }, { duration:1.3, y:-35, opacity:0 });
	
		if(count < nbSlides - 1) {
			count++;		
		} else {
			count = 0;
		}
	
		/**
		 * Set --first
		 */
		
		slides[count].classList.add('fpTestimony__slider__item--first');
		gsap.fromTo(slides[count], { scale:.9, y:50 }, { duration:1.3, scale:1, y:0 });
	
		/**
		 * Set --second
		 */
	
		if(count < nbSlides - 1) {
			slides[count + 1].classList.add(second);
			gsap.fromTo(slides[count + 1], { scale:.8, y:90, opacity:1 }, { duration:1.3, scale:.9, y:50 });
		} else {
			slides[0].classList.add(second);
			gsap.fromTo(slides[0], { scale:.8, y:90, opacity:1 }, { duration:1.3, scale:.9, y:50 });
		}
	
		/**
		 * Set --third
		 */
		
		if(count + 1 < nbSlides - 1) {
			slides[count + 2].classList.add(third);
			gsap.fromTo(slides[count + 2], { scale:.7, y:120 }, { duration:1.3, scale:.8, y:90, opacity:1 });
		} else if(count + 1 == nbSlides -1) {
			slides[0].classList.add(third);
			gsap.fromTo(slides[0], { scale:.7, y:120 }, { duration:1.3, scale:.8, y:90, opacity:1 });
		} else if(count + 1 > nbSlides -1) {
			slides[1].classList.add(third);
			gsap.fromTo(slides[1], { scale:.7, y:120 }, { duration:1.3, scale:.8, y:90, opacity:1 });
		}
	
	}
	
	function prevSlide() {

		gsap.fromTo(slides[count], { scale:1, y:0 }, { duration:1.3, scale:.9, y:50 });
		gsap.fromTo(document.querySelector('.' + third), { scale: .8, y:90, opacity:1 }, { duration:1.3, scale:.7, opacity:0, y:120 });
	
		slides[count].classList.remove('fpTestimony__slider__item--first');
		document.querySelector('.' + second).classList.remove(second);
		document.querySelector('.' + third).classList.remove(third);
	
		if(count > 0) {
			count--;
		} else {
			count = nbSlides - 1;
		}
		
		slides[count].classList.add('fpTestimony__slider__item--first');
		gsap.fromTo(slides[count], { scale:1.1, y:-50, opacity:0 }, { duration:1.3, scale:1, y:0, opacity:1 });
	
		if(count < nbSlides - 1) {
			slides[count + 1].classList.add(second);
			// gsap.fromTo(slides[count + 1], { scale:1, y:0 }, { duration:1, scale:.9, y:50 });
		} else {
			slides[0].classList.add(second);
			// gsap.fromTo(slides[0], { scale:1, y:0 }, { duration:1, scale:.9, y:50 });
		}
		
		if(count + 1 < nbSlides - 1) {
			slides[count + 2].classList.add(third);
			gsap.fromTo(slides[count + 2], { scale:.9, y:50, opacity:1 }, { duration:1.3, scale:.8, y:90, opacity:1 });
		} else if(count + 1 == nbSlides -1) {
			slides[0].classList.add(third);
			gsap.fromTo(slides[0], { scale:.9, y:50, opacity:1 }, { duration:1.3, scale:.8, y:90, opacity:1 });
		} else if(count + 1 > nbSlides -1) {
			slides[1].classList.add(third)
			gsap.fromTo(slides[1], { scale:.9, y:50, opacity:1 }, { duration:1.3, scale:.8, y:90, opacity:1 });
		}
	
	}
	
	after.addEventListener('click', nextSlide);
	before.addEventListener('click', prevSlide);

});