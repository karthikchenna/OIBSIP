let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');

window.addEventListener('scroll', () => {
	let value = window.scrollY;

	text.style.marginTop = value * 1 + 'px';
	leaf.style.top = value * -1.5 + 'px';
	leaf.style.left = value * 1 + 'px';
	hill5.style.left = value * 1 + 'px';
	hill4.style.left = value * -1 + 'px';
	hill1.style.top = value * 0.2 + 'px';

});


// let menuList = docume.getElementById("menu-list")
// menuList.style.left="-100";

// function togleMenu(){
// 	if(menuList.style.left="-100"){
// 		menuList.style.left="0";
// 	}
// 	else{
// 		menuList.style.left="-100";
// 	}
// }


// document.querySelector('.menu').addEventListener('click', toggleMenu);
// function toggleMenu() {
// 	const nav = document.querySelector('nav');
// 	nav.classList.toggle('menu--active');
// }
