var elButton = document.querySelector('.haeder__burger');
var elNav = document.querySelector('.nav');

elButton.addEventListener('click', function () {
	elNav.classList.toggle('nav--open');
});
