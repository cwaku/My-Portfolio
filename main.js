const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLink = document.querySelectorAll('.nav-link');
const email = document.getElementById('email');
const userName = document.getElementById('name');
const message = document.getElementById('message');
const formSubmit = document.getElementById('contact');
const errorMessage = document.querySelector('.error');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

navLink.forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

function getFormInput() {
  const data = {
    name: userName.value,
    email: email.value,
    message: message.value,
  };
  localStorage.setItem('FormInput', JSON.stringify(data));
}

formSubmit.addEventListener('submit', (e) => {
  const emailFormat = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/;

  if (email.value.match(emailFormat)) {
    errorMessage.innerHTML = '';
    getFormInput();
  } else {
    e.preventDefault();
    errorMessage.innerHTML = 'Email is invalid, must be in this format example@xyz.com';
  }
});

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('FormInput') !== null) {
    let getforminfo = localStorage.getItem('FormInput');
    getforminfo = JSON.parse(getforminfo);
    userName.value = getforminfo.name;
    email.value = getforminfo.email;
    message.value = getforminfo.message;
  }
});
