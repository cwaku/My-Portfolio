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

//Take form input and save to localStorage
//let formData = [];

function getFormInput () {
  let data = {
    name: userName.value,
    email: email.value,
    message: message.value
  }

  //formData.push(data);

  localStorage.setItem('FormInput', JSON.stringify(data));
}

document.addEventListener('DOMContentLoaded', () => {
  
});

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('FormInput') !== null) {
    let getforminfo = localStorage.getItem('FormInput');
    getforminfo = JSON.parse(getforminfo);
    console.log(getforminfo);
    userName.value = getforminfo[0].name;
    email.value = getforminfo[0].email;
    message.value = getforminfo[0].message;
  }
});
