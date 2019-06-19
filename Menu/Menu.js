
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
  menu.classList.toggle('menu--open');
  menuButton.classList.toggle('change');
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.header .menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu);

title = document.querySelector('.header h1');
//TweenLite.from(title, 2, {x: '+=300px', autoAlpha: 0});
TweenLite.from(title, 1, {x: '+=400px', ease:Power4.easeInOut, delay: 0.05});
TweenMax.from('.menu-button', 1, {opacity:0, scale:0, ease:Bounce.easeOut, delay:.7})