console.log('frontend200tb', 'library start');

/*********************
HEADER Burger menu
*********************/
const burger = document.querySelector('.js-burger');
const nav = document.querySelector('.js-nav');
const overlay = document.querySelector('.js-overlay');
const navItem = document.getElementsByClassName('js-nav-item');
const navItems = Array.from(navItem);

burger.addEventListener('click', toggleNav);
navItems.forEach( (elem) => {
  elem.addEventListener('click', removeNav);
});
overlay.addEventListener('click', removeNav);

function toggleNav() {
  if (!profile.classList.contains('none')) {
    removeProfile();
  }
  burger.classList.toggle('active');
  nav.classList.toggle('active');
  overlay.classList.toggle('none');
}

function removeNav() {
  burger.classList.remove('active');
  nav.classList.remove('active');
  overlay.classList.add('none');
}
/*********************
/HEADER Burger menu
*********************/


/*********************
ABOUT Carousel
*********************/
const slider = document.querySelector('.js-slider');
const carretLeft = document.getElementsByClassName('js-carret')[0];
const carretRight = document.getElementsByClassName('js-carret')[1];
const circleBtn = Array.from(document.querySelectorAll('.js-btn'));

const maxImg = 4;
const widthImg = 475;
let currentImg = 0;
let leftPosition = 0;
let currentBtn = circleBtn[0];

carretLeft.classList.add('carret-disable');
currentBtn.classList.add('btn-active');

carretLeft.addEventListener('click', leftClick);
carretRight.addEventListener('click', rightClick);
for (let i = 0; i < circleBtn.length; i++) {
  circleBtn[i].addEventListener('click', () => circleBtnClick(i));
};

window.addEventListener('resize', widthChange);

function leftClick() {
  if (carretLeft.classList.contains('carret-disable')) {
    return
  }
  carretRight.classList.remove('carret-disable');
  circleBtn[currentImg].classList.remove('btn-active');
  currentImg--;
  currentBtn = circleBtn[currentImg];
  currentBtn.classList.add('btn-active');
  leftPosition += widthImg; 
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
  circleBtn[currentImg].classList.remove('btn-active');
  currentImg++;
  currentBtn = circleBtn[currentImg];
  currentBtn.classList.add('btn-active');
  leftPosition -= widthImg; 
  slider.style.left = `${leftPosition}px`;
  if (currentImg === maxImg) {
    carretRight.classList.add('carret-disable');
  }
}

function circleBtnClick(i) {
  if ( !(getComputedStyle(circleBtn[4]).display === 'none') || (circleBtn[i] === currentBtn) ) {
    return
  }
  currentBtn.classList.remove('btn-active');
  currentBtn = circleBtn[i];
  currentBtn.classList.add('btn-active');
  leftPosition -= widthImg * ( i - currentImg );
  currentImg = i;
  slider.style.left = `${leftPosition}px`;
  if (currentImg === 0) {
    carretLeft.classList.add('carret-disable');
  } else {
    carretLeft.classList.remove('carret-disable');
  }
}

function widthChange() {
  console.log(currentImg);
  if ( (getComputedStyle(circleBtn[3]).display === 'none') && (currentImg === 3) ) {
    carretLeft.classList.remove('carret-disable');
    leftClick();
    return;
  }
  if ( (getComputedStyle(circleBtn[4]).display === 'none') && (currentImg === 4) ) {
    leftClick();
    return;
  }
}
/*********************
/ABOUT Carousel
*********************/


/*********************
FAVORITES Seasons
*********************/
const radio = document.getElementsByClassName('js-radio');
const season = document.getElementsByClassName('js-season');

const maxSeason = 3;
const heightSeason = 1150;
let topPosition = 0;
let currentSeason = season[0];

for (let i = 0; i < radio.length; i++) {
  radio[i].addEventListener('change', () => radioCheck(i))
}
function radioCheck(i) {
  currentSeason.classList.remove('delay');
  currentSeason.style.opacity = '0';
  currentSeason.style.zIndex = '0';
  season[i].classList.add('delay');
  season[i].style.zIndex = '1';
  season[i].style.opacity = '1';
  currentSeason = season[i];
}
/*********************
/FAVORITES Seasons
*********************/


/*********************
dropMenu PROFILE
*********************/
const profileBtn = document.querySelector('.js-profile-icon');
const profile = document.querySelector('.js-profile');

profileBtn.addEventListener('click', toggleProfile);
overlay.addEventListener('click', removeProfile);

function toggleProfile() {
  if (burger.classList.contains('active')) {
    removeNav();
  }
  profile.classList.toggle('none');
  overlay.classList.toggle('none');
}

function removeProfile() {
  profile.classList.add('none');
  overlay.classList.add('none');
}
/*********************
/dropMenu PROFILE
*********************/


/*********************
REGISTER
*********************/
const registerBtn = document.querySelector('.register__btn');

registerBtn.addEventListener('click', registerBtnClick);

function registerBtnClick() {
  
}
/*********************
/REGISTER
*********************/