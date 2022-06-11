var elButton = document.querySelector('.header__burger');
var elNav = document.querySelector('.nav');
var elMenu = document.querySelector('.nav__list');
var elBody = document.querySelector(".site-body")

elButton.addEventListener("click", function() {
	elMenu.classList.toggle("nav__list--open")
	elNav.classList.toggle("nav--open")
	elBody.classList.toggle("body--open")
})
elNav.addEventListener("click", function() {
	elMenu.classList.remove("nav__list--open")
	elNav.classList.remove("nav--open")
})
