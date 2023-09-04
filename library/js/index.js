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
  if (!profileMenu.classList.contains('none')) {
    closeProfile();
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

carretLeft.addEventListener('click', leftClickCarret);
carretRight.addEventListener('click', rightClickCarret);
for (let i = 0; i < circleBtn.length; i++) {
  circleBtn[i].addEventListener('click', () => circleBtnClick(i));
};

window.addEventListener('resize', resize);

function leftClickCarret() {
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

function rightClickCarret() {
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

function resize() {
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

/* Profile button */
const profileBtn = document.querySelector('.js-profile-icon');
const profileMenu = document.querySelector('.js-profile');
const profileTitle = document.querySelector('.js-profile-title');

profileBtn.addEventListener('click', toggleProfile);

function toggleProfile() {
  if (burger.classList.contains('active')) {
    removeNav();
  }
  profileMenu.classList.toggle('none');
  overlay.classList.toggle('none');
}
/* /Profile button */

/* register buttons */
const registerBtn = document.querySelector('.js-register-btn');
const libSignupBtn = document.querySelector('.js-lib-signup-btn');
const loginRegisterBtn = document.querySelector('.js-login-register-btn');

registerBtn.addEventListener('click', openModalRegister);
libSignupBtn.addEventListener('click', openModalRegister);
loginRegisterBtn.addEventListener('click', () => {
  closeModalLogin();
  openModalRegister();
});

function openModalRegister() {
  closeProfile();
  modalRegister.classList.remove('none');
  overlay.classList.remove('none');
}
/* /register buttons */

/* login buttons */
const loginBtn = document.querySelector('.js-login-btn');
const libLoginBtn = document.querySelector('.js-lib-login-btn');
const regLoginBtn = document.querySelector('.js-register-login-btn');
const buyBtn = Array.from(document.querySelectorAll('.js-buy-btn'));

loginBtn.addEventListener('click', openModalLogin);
libLoginBtn.addEventListener('click', openModalLogin);
regLoginBtn.addEventListener('click', () => {
  closeModalRegister();
  openModalLogin();
});
buyBtn.forEach(elem => elem.addEventListener('click', () => {
  if (logStatus === 'logOut') {
    console.log('logStatus', logStatus);
    openModalLogin();
    return;
  } else if (logStatus === 'logIn' && !hasCard) {
    console.log('logStatus', logStatus, 'hasCard', hasCard);
    openModalBuyCard();
    return;
  } else {
    console.log('logStatus', logStatus, 'hasCard', hasCard);
  }
}));

function openModalLogin() {
  closeProfile();
  modalLogin.classList.remove('none');
  overlay.classList.remove('none');
}

function openModalBuyCard() {
  modalBuyCard.classList.remove('none');
  overlay.classList.remove('none');
}
/* /login buttons */

/* My profile button */
const myprofileBtn = document.querySelector('.js-myprofile-btn');

myprofileBtn.addEventListener('click', openModalMyProfile);

function openModalMyProfile() {
  closeProfile();
  modalMyProfile.classList.remove('none');
  overlay.classList.remove('none');
}
/* /My profile button */

/* Log Out button */
const logoutBtn = document.querySelector('.js-logout-btn');

logoutBtn.addEventListener('click', logOut);

function logOut() {
  logStatus = 'logOut';
  hasCard = false;
  console.log('log out');
  defaultProfileIcon();
  profileNoAuth();
  closeProfile();
}

function defaultProfileIcon() {
  profileBtn.classList.add('profile-icon-default');
  profileBtn.innerText = '';
  profileBtn.removeAttribute('title');
}

function profileNoAuth() {
  loginBtn.classList.remove('none');
  registerBtn.classList.remove('none');
  myprofileBtn.classList.add('none');
  logoutBtn.classList.add('none');
  profileTitle.innerText = 'Profile';
  profileTitle.style.fontSize = '15px';
}
/* /Log Out button */

overlay.addEventListener('click', closeProfile);

function closeProfile() {
  profileMenu.classList.add('none');
  overlay.classList.add('none');
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
const fnameRegisterInput = modalRegister.querySelector('.js-fname-input');
const fnameRegisterTooltip = modalRegister.querySelector('.js-tooltip-fname');
const lnameRegisterInput = modalRegister.querySelector('.js-lname-input');
const lnameRegisterTooltip = modalRegister.querySelector('.js-tooltip-lname');
const emailRegisterInput = modalRegister.querySelector('.js-email-input');
const emailRegisterTooltip = modalRegister.querySelector('.js-tooltip-email');
const pswRegisterInput = modalRegister.querySelector('.js-psw-input');
const pswRegisterTooltip = modalRegister.querySelector('.js-tooltip-psw');
const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

registerCloseBtn.addEventListener('click', closeModalRegister);
overlay.addEventListener('click', closeModalRegister);
registerForm.addEventListener('submit', event => registerCheck(event));
fnameRegisterInput.addEventListener('change', () => {
  removeTooltip(fnameRegisterTooltip)
});
lnameRegisterInput.addEventListener('change', () => {
  removeTooltip(lnameRegisterTooltip)
});
emailRegisterInput.addEventListener('change', () => {
  removeTooltip(emailRegisterTooltip)
});
pswRegisterInput.addEventListener('change', () => {
  removeTooltip(pswRegisterTooltip)
});

function closeModalRegister() {
  registerForm.reset(); //очистка формы
  modalRegister.classList.add('none');
  overlay.classList.add('none');
}

function registerCheck(event) {
  event.preventDefault();
  if ( !(fnameRegisterInput.value.trim()) ) {
    fnameRegisterInput.focus();
    fnameRegisterTooltip.classList.remove('none');
    return;
  } else if (!(lnameRegisterInput.value.trim())) {
    lnameRegisterInput.focus();
    lnameRegisterTooltip.classList.remove('none');
    return;
  } else if ( !( isEmailValid(emailRegisterInput.value) ) ) {
    emailRegisterInput.focus();
    emailRegisterTooltip.classList.remove('none');
    return;
  } else if ( !( isPswValid(pswRegisterInput.value) ) ) {
    pswRegisterInput.focus();
    pswRegisterTooltip.classList.remove('none');
    return;
  }
  createUser();
  changeProfileIcon(currentUser.fname, currentUser.lname);
  changeMyProfile(currentUser.fname, currentUser.lname, currentUser.cardNumber);
  logStatus = 'logIn';
  profileWithAuth();
  closeModalRegister();
}

function createUser() {
  console.log('First name', fnameRegisterInput.value);
  console.log('Last name', lnameRegisterInput.value);
  console.log('E-mail', emailRegisterInput.value);
  console.log('Password', pswRegisterInput.value);
  currentUser = { 
    fname : fnameRegisterInput.value.trim(),
    lname : lnameRegisterInput.value.trim(),
    email : emailRegisterInput.value.trim(),
    psw : pswRegisterInput.value.trim(),
  }
  currentUser.cardNumber = createCardNumber();
  currentUser.visitCounter = 1;
  users.push(currentUser);
  console.log('users', users);
  localStorage.setItem('library', JSON.stringify(users));
}

function isEmailValid(email) {
  return EMAIL_REGEXP.test(email);
}

function isPswValid(psw) {
  return (psw.trim().length > 7);
}

function removeTooltip(tooltip) {
  tooltip.classList.add('none');
}

function changeProfileIcon(first, last) {
  profileBtn.classList.remove('profile-icon-default');
  let firstLetter = first.charAt(0).toUpperCase();
  let secondLetter = last.charAt(0).toUpperCase();
  profileBtn.innerText = firstLetter + secondLetter;
  profileBtn.setAttribute('title', `${first} ${last}`);
}

function createCardNumber() {
  let hexNumber = '';
  for (let i = 0; i < 9; i++) {
    let num = getRandomInRange(0, 15);
    if (num === 10) {
      num = 'A';
    }
    if (num === 11) {
      num = 'B';
    }
    if (num === 12) {
      num = 'C';
    }
    if (num === 13) {
      num = 'D';
    }
    if (num === 14) {
      num = 'E';
    }
    if (num === 15) {
      num = 'F';
    }
    hexNumber += num;
  }
  return hexNumber;
}

function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min +1)) + min;
}

function profileWithAuth() {
  loginBtn.classList.add('none');
  registerBtn.classList.add('none');
  myprofileBtn.classList.remove('none');
  logoutBtn.classList.remove('none');
  profileTitle.innerText = currentUser.cardNumber;
  profileTitle.style.fontSize = '12px';
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
const emailLoginInput = modalLogin.querySelector('.js-email-input');
const emailLoginTooltip = modalLogin.querySelector('.js-tooltip-email');
const pswLoginInput = modalLogin.querySelector('.js-psw-input');
const pswLoginTooltip = modalLogin.querySelector('.js-tooltip-psw');

loginCloseBtn.addEventListener('click', closeModalLogin);
overlay.addEventListener('click', closeModalLogin);
loginForm.addEventListener('submit', event => loginCheck(event));
emailLoginInput.addEventListener('change', () => {
  removeTooltip(emailLoginTooltip)
});
pswLoginInput.addEventListener('change', () => {
  removeTooltip(pswLoginTooltip)
});

function closeModalLogin() {
  loginForm.reset(); //очистка формы
  modalLogin.classList.add('none');
  overlay.classList.add('none');
}

function loginCheck(event) {
  event.preventDefault();
  if ( !( isEmailValid(emailLoginInput.value) ) ) {
    emailLoginInput.focus();
    emailLoginTooltip.classList.remove('none');
    return;
  } else if ( !( isPswValid(pswLoginInput.value) ) ) {
    pswLoginInput.focus();
    pswLoginTooltip.classList.remove('none');
    return;
  }
  if (hasUserLogin()) {
    currentUser = hasUserLogin();
    currentUser.visitCounter++;
    localStorage.setItem('library', JSON.stringify(users));
    changeProfileIcon(currentUser.fname, currentUser.lname);
    changeMyProfile();
    logStatus = 'logIn';
    profileWithAuth();
    closeModalLogin();
  };
}

function hasUserLogin() {
  return users.find(function(item){
    return ((emailLoginInput.value === item.email) && (pswLoginInput.value === item.psw));
  });
}
/*********************
/LOGIN
*********************/


/*********************
MY PROFILE
*********************/
const modalMyProfile = document.querySelector('.js-modal-myprofile');
const mypofileCloseBtn = modalMyProfile.querySelector('.js-myprofile-close-btn');
const mypofileInitials = modalMyProfile.querySelector('.js-myprofile-initials');
const mypofileName = modalMyProfile.querySelector('.js-myprofile-name');
const mypofileVisits = modalMyProfile.querySelector('.js-myprofile-visits');
const mypofileCard = modalMyProfile.querySelector('.js-card');
const copyBtn = modalMyProfile.querySelector('.js-copy');

mypofileCloseBtn.addEventListener('click', closeModalMyProfile);
overlay.addEventListener('click', closeModalMyProfile);
copyBtn.addEventListener('click', copy);

function closeModalMyProfile() {
  modalMyProfile.classList.add('none');
  overlay.classList.add('none');
}

function changeMyProfile() {
  let firstLetter = currentUser.fname.charAt(0).toUpperCase();
  let secondLetter = currentUser.lname.charAt(0).toUpperCase();
  mypofileInitials.innerText = firstLetter + secondLetter;
  mypofileName.innerText = `${currentUser.fname} ${currentUser.lname}`;
  mypofileVisits.innerText = currentUser.visitCounter;
  mypofileCard.innerText = currentUser.cardNumber;
}
/*********************
/MY PROFILE
*********************/


/*********************
COPY TO CLIPBOARD
*********************/
function copy() {
  navigator.clipboard.writeText(currentUser.cardNumber);
}
/*********************
/COPY TO CLIPBOARD
*********************/


/*********************
CHECK THE CARD
*********************/
const findCardForm = document.querySelector('.js-find-card-form');
const checkCardNameInput = findCardForm.querySelector('.js-find-card-name');
const checkCardNumberInput = findCardForm.querySelector('.js-find-card-number');
const checkCardBtn = findCardForm.querySelector('.js-check-card-btn');
const cardStat = findCardForm.querySelector('.js-card-stat');

findCardForm.addEventListener('submit', event => checkCard(event));

function checkCard(event) {
  event.preventDefault();
  if (users.length === 0) {
    console.log('no registered users', users);
    return;
  } 
  if (hasUser()) {
    checkCardBtn.classList.add('none');
    cardStat.classList.remove('none');
    setTimeout(() => {
      cardStat.classList.add('none');
      checkCardBtn.classList.remove('none');
      findCardForm.reset();
    }, 1000);
  } else {
    console.log('no');
  }
}

function hasUser() {
  return users.find(function(item){
    return ((checkCardNameInput.value === item.fname) && (checkCardNumberInput.value === item.cardNumber));
  });
}
/*********************
/CHECK THE CARD
*********************/


/*********************
BUY A LIBRARY CARD
*********************/
const modalBuyCard = document.querySelector('.js-modal__buy-card');
const buyCardCloseBtn = modalBuyCard.querySelector('.js-buy-card-close-btn');

buyCardCloseBtn.addEventListener('click', closeModalBuyCard);
overlay.addEventListener('click', closeModalBuyCard);

function closeModalBuyCard() {
  modalBuyCard.classList.add('none');
  overlay.classList.add('none');
}

const buyCardForm = document.querySelector('.js-buy-card-form');
const buyCardBtn = document.querySelector('.js-buy-card-btn');

buyCardForm.addEventListener('submit', event => buyCard(event));

function buyCard(event) {
  event.preventDefault();
  if (hasCard === true) {
    console.log('already has a card');
    return;
  } 
  hasCard = true;
  closeModalBuyCard();
}

/*********************
/BUY A LIBRARY CARD
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
/* before registration */
let currentUser;
let logStatus = 'logOut';
let hasCard = false;
let visitCounter;
/*********************
/STATUS
*********************/


/*
осталось сделать
- отображается панель с информацией, вместо кнопки check the card на 10 секунд (у меня сделана 1 секунда)
- каждая авторизация будет влиять на счетчик визитов
- возможность купить абонемент, отображение информации в Digital Library Cards.
- Окно регистрации, логин, профиль и покупки абонемента центрировано, а область вокруг затемнена (надо затемнить кнопку профиля и кнопку бургер меню)
- В случае если имя и фамилия слишком длинные и не влазят в блок то должен произойти перенос фамилии на следующую строку
- Счетчик для Visits отображает, сколько раз пользователь проходил процесс авторизации, включая самый первый - регистрацию
- Счетчик для Books отображает, сколько у пользователя книг находятся в состоянии Own. Значение варьируется 0-16
- При нажатии на любую кнопку Buy, после покупки абонемента, меняет вид кнопки на неактивную Own, добавляя единицу к счетчику книг в профиле
- Кроме того после нажатия обновляется не только счетчик, но и название книги должно отобразится в разделе Rented Books. Название формируется по принципу <название книги>, <автор книги>. В случае если название книги слишком длинное или список стал слишком большой список книг в блоке Rented Books становится скроллируемым (по необходимости горизонтально/ вертикально или оба скролла сразу) Тайтл Rented Books скроллироваться не должен
- Модальное окно BUY A LIBRARY CARD

*/