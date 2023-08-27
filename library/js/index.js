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
const loginBtn = document.querySelector('.js-login-btn');
const registerBtn = document.querySelector('.js-register-btn');
const myprofileBtn = document.querySelector('.js-myprofile-btn');
const logoutBtn = document.querySelector('.js-logout-btn');
const libSignupBtn = document.querySelector('.js-lib-signup-btn');

profileBtn.addEventListener('click', toggleProfile);
overlay.addEventListener('click', removeProfile);
loginBtn.addEventListener('click', loginBtnClick);
registerBtn.addEventListener('click', registerBtnClick);
libSignupBtn.addEventListener('click', registerBtnClick);

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

function loginBtnClick() {
  removeProfile();
  modalLogin.classList.remove('none');
  overlay.classList.remove('none');
}

function registerBtnClick() {
  removeProfile();
  modalRegister.classList.remove('none');
  overlay.classList.remove('none');
}

/*********************
/dropMenu PROFILE
*********************/


/*********************
REGISTER
*********************/
const modalRegister = document.querySelector('.js-modal-register');
const registerCloseBtn = modalRegister.querySelector('.js-register-close-btn');
const registerForm = modalRegister.querySelector('.js-register-form');
const fnameInput = modalRegister.querySelector('.js-fname-input');
const fnameTooltip = modalRegister.querySelector('.tooltip-fname');
const lnameInput = modalRegister.querySelector('.js-lname-input');
const lnameTooltip = modalRegister.querySelector('.tooltip-lname');
const emailInput = modalRegister.querySelector('.js-email-input');
const emailTooltip = modalRegister.querySelector('.tooltip-email');
const pswInput = modalRegister.querySelector('.js-psw-input');
const pswTooltip = modalRegister.querySelector('.tooltip-psw');
const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
let currentUser;

registerCloseBtn.addEventListener('click', modalRegisterClose);
overlay.addEventListener('click', modalRegisterClose);
registerForm.addEventListener('submit', event => registerCheck(event));
fnameInput.addEventListener('input', fnameChange);
lnameInput.addEventListener('input', lnameChange);
emailInput.addEventListener('input', emailChange);
pswInput.addEventListener('input', pswChange);

function modalRegisterClose() {
  modalRegister.classList.add('none');
  overlay.classList.add('none');
}

function registerCheck(event) {
  event.preventDefault();
  if ( !(fnameInput.value.trim()) ) {
    fnameInput.focus();
    fnameTooltip.classList.remove('none');
    return;
  } else if (!(lnameInput.value.trim())) {
    lnameInput.focus();
    lnameTooltip.classList.remove('none');
    return;
  } else if ( !( isEmailValid() ) ) {
    emailInput.focus();
    emailTooltip.classList.remove('none');
    return;
  } else if ( !( isPswValid() ) ) {
    console.log(pswInput.value);
    pswInput.focus();
    pswTooltip.classList.remove('none');
    return;
  }
  createUser();
  logStatus = 'logIn';
  profileWithAuth();
  modalRegisterClose();
}

function createUser() {
  console.log('First name', fnameInput.value);
  console.log('Last name', lnameInput.value);
  console.log('E-mail', emailInput.value);
  console.log('Password', pswInput.value);
  currentUser = { 
    fname : fnameInput.value.trim(),
    lname : lnameInput.value.trim(),
    email : emailInput.value.trim(),
    psw : pswInput.value.trim(),
  }
  currentUser.cardNumber = createCardNumber();
  users.push(currentUser);
  console.log('users', users);
  localStorage.setItem('library', JSON.stringify(users));
  changeProfileIcon(currentUser.fname, currentUser.lname);
}

function isEmailValid() {
  return EMAIL_REGEXP.test(emailInput.value);
}

function isPswValid() {
  return (pswInput.value.trim().length > 7);
}

function fnameChange() {
  fnameTooltip.classList.add('none');
}

function lnameChange() {
  lnameTooltip.classList.add('none');
}

function emailChange() {
  emailTooltip.classList.add('none');
}

function pswChange() {
  pswTooltip.classList.add('none');
}

function changeProfileIcon(first, last) {
  profileBtn.classList.remove('profile-icon-default');
  let firstLetter = first.charAt(0).toUpperCase();
  let secondLetter = last.charAt(0).toUpperCase();
  profileBtn.innerText = firstLetter + secondLetter;
}

function createCardNumber() {
  let hexNumber = 123456789;
  return hexNumber;
}

function profileWithAuth() {
  loginBtn.classList.add('none');
  registerBtn.classList.add('none');
  myprofileBtn.classList.remove('none');
  logoutBtn.classList.remove('none');
}
/*********************
/REGISTER
*********************/


/*********************
LOGIN
*********************/
const modalLogin = document.querySelector('.js-modal-login');
const loginCloseBtn = modalLogin.querySelector('.js-login-close-btn');
const loginForm = modalLogin.querySelector('.js-login-form');

loginCloseBtn.addEventListener('click', modalLoginClose);
overlay.addEventListener('click', modalLoginClose);
loginForm.addEventListener('submit', event => loginCheck(event));

function modalLoginClose() {
  modalLogin.classList.add('none');
  overlay.classList.add('none');
}

function loginCheck(event) {
  event.preventDefault();
  if ( !( isEmailValid() ) ) {
    emailInput.focus();
    emailTooltip.classList.remove('none');
    return;
  } else if ( !( isPswValid() ) ) {
    console.log(pswInput.value);
    pswInput.focus();
    pswTooltip.classList.remove('none');
    return;
  }
  createUser();
}

/*********************
/LOGIN
*********************/


/*********************
LOCAL STORAGE
*********************/
let users = JSON.parse(localStorage.getItem('library'));
if (!users) {
  users = [];
}
console.log('localStorage', users);

/*********************
/LOCAL STORAGE
*********************/


/*********************
STATUS
*********************/
let logStatus = 'logOut';
/*********************
/STATUS
*********************/