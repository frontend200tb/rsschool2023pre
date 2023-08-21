console.log('frontend200tb', 'library start');

/*********************
Burger menu
*********************/
const burger = document.getElementsByClassName('js-burger')[0];
const nav = document.getElementsByClassName('js-nav')[0];
const navItem = document.getElementsByClassName('js-nav-item');
const overlay = document.getElementsByClassName('js-burger-overlay')[0];

function toggleNav() {
  burger.classList.toggle('active');
  nav.classList.toggle('active');
  overlay.classList.toggle('none');
}
function removeNav() {
  burger.classList.remove('active');
  nav.classList.remove('active');
  overlay.classList.add('none');
}

burger.addEventListener('click', toggleNav);
const navItems = Array.from(navItem);
navItems.forEach( (elem) => {
  elem.addEventListener('click', removeNav);
});
overlay.addEventListener('click', removeNav);
/*********************
/Burger menu
*********************/


/*********************
Carousel
*********************/
const slider = document.querySelector('.js-slider');
const carretLeft = document.getElementsByClassName('js-carret')[0];
const carretRight = document.getElementsByClassName('js-carret')[1];

let currentImg = 0;
const maxImg = 4;
let leftPosition = 0;

carretLeft.classList.add('carret-disable');

carretLeft.addEventListener('click', leftClick);
carretRight.addEventListener('click', rightClick);

function leftClick() {
  if (carretLeft.classList.contains('carret-disable')) {
    return
  }
  carretRight.classList.remove('carret-disable');
  currentImg--;
  leftPosition += 475; 
  slider.style.left = `${leftPosition}px`;
  if (currentImg === 0) {
    carretLeft.classList.add('carret-disable');
  }
}

function rightClick() {
  if (carretRight.classList.contains('carret-disable')) {
    return
  }
  carretLeft.classList.remove('carret-disable');
  currentImg++;
  leftPosition -= 475; 
  slider.style.left = `${leftPosition}px`;
  if (currentImg === 4) {
    carretRight.classList.add('carret-disable');
  }
}

/*********************
/Carousel
*********************/

