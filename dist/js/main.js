"use strict";document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector(".header__burger"),s=document.querySelector(".header__nav"),t=document.querySelector(".header"),c=document.querySelector("html");window.addEventListener("scroll",function(){100<this.scrollY?t.classList.add("fixed"):t.classList.remove("fixed")}),e.addEventListener("click",function(){s.classList.contains("show")?(s.classList.replace("show","hide"),t.classList.replace("show","hide"),c.classList.remove("no-scroll")):(s.classList.replace("hide","show"),t.classList.replace("hide","show"),c.classList.add("no-scroll"))})});
"use strict";document.addEventListener("DOMContentLoaded",function(){var s=document.querySelectorAll(".fpTestimony__slider__item"),e=s.length,a=document.querySelector("#btn-left"),t=document.querySelector("#btn-right"),o="fpTestimony__slider__item--second",c="fpTestimony__slider__item--third",i=0;t.addEventListener("click",function(){s[i].classList.remove("fpTestimony__slider__item--first"),document.querySelector("."+o).classList.remove(o),document.querySelector("."+c).classList.remove(c),gsap.fromTo(s[i],{scale:1,y:0},{duration:1.3,y:-35,opacity:0}),i<e-1?i++:i=0,s[i].classList.add("fpTestimony__slider__item--first"),gsap.fromTo(s[i],{scale:.9,y:50},{duration:1.3,scale:1,y:0}),i<e-1?(s[i+1].classList.add(o),gsap.fromTo(s[i+1],{scale:.8,y:90,opacity:1},{duration:1.3,scale:.9,y:50})):(s[0].classList.add(o),gsap.fromTo(s[0],{scale:.8,y:90,opacity:1},{duration:1.3,scale:.9,y:50})),i+1<e-1?(s[i+2].classList.add(c),gsap.fromTo(s[i+2],{scale:.7,y:120},{duration:1.3,scale:.8,y:90,opacity:1})):i+1==e-1?(s[0].classList.add(c),gsap.fromTo(s[0],{scale:.7,y:120},{duration:1.3,scale:.8,y:90,opacity:1})):e-1<i+1&&(s[1].classList.add(c),gsap.fromTo(s[1],{scale:.7,y:120},{duration:1.3,scale:.8,y:90,opacity:1}))}),a.addEventListener("click",function(){gsap.fromTo(s[i],{scale:1,y:0},{duration:1.3,scale:.9,y:50}),gsap.fromTo(document.querySelector("."+c),{scale:.8,y:90,opacity:1},{duration:1.3,scale:.7,opacity:0,y:120}),s[i].classList.remove("fpTestimony__slider__item--first"),document.querySelector("."+o).classList.remove(o),document.querySelector("."+c).classList.remove(c),0<i?i--:i=e-1,s[i].classList.add("fpTestimony__slider__item--first"),gsap.fromTo(s[i],{scale:1.1,y:-50,opacity:0},{duration:1.3,scale:1,y:0,opacity:1}),i<e-1?s[i+1].classList.add(o):s[0].classList.add(o),i+1<e-1?(s[i+2].classList.add(c),gsap.fromTo(s[i+2],{scale:.9,y:50,opacity:1},{duration:1.3,scale:.8,y:90,opacity:1})):i+1==e-1?(s[0].classList.add(c),gsap.fromTo(s[0],{scale:.9,y:50,opacity:1},{duration:1.3,scale:.8,y:90,opacity:1})):e-1<i+1&&(s[1].classList.add(c),gsap.fromTo(s[1],{scale:.9,y:50,opacity:1},{duration:1.3,scale:.8,y:90,opacity:1}))})});
"use strict";document.addEventListener("DOMContentLoaded",function(){new Rellax(".parallax");VanillaTilt.init(document.querySelector("#tilt"),{reverse:!0})});
//# sourceMappingURL=main.js.map