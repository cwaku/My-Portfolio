const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLink = document.querySelectorAll('.nav-link');
const projectSection = document.querySelector('.container');
const email = document.getElementById('email');
const userName = document.getElementById('name');
const message = document.getElementById('message');
const form = document.getElementById('contact');
const errorMessage = document.querySelector('.error');



//Menu button
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  hamburger.classList.toggle('hamburger-fix');
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

form.addEventListener('input', () => {
    getFormInput();
});

form.addEventListener('submit', (e) => {
  const emailFormat = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/;
  if (email.value.match(emailFormat)) {
    errorMessage.innerHTML = '';
  } else {
    e.preventDefault();
    errorMessage.innerHTML = 'Email is incorrect, field should not be empty. <br/> should be in this format example@xyz.com';
  }
});

const projectInfo = [
  8,
  {
  title: 'Project name goes <span>here</span>',
  tech1: 'HTML/CSS',
  tech2: 'Ruby on Rails',
  tech3: 'JavaScript',
},
];


for (let i = 1; i <= projectInfo[0]; i++) {
  const projects = `<div id="item-${i}">
  <div class="card${i} fix-card full-width"></div>
  <div id="card${i}" class="cards-detail poppins dark-bg mobile-only">
    <p class="poppins">Project name goes <span>here</span></p>
    <button type="button">${projectInfo[1].tech1}</button>
    <button type="button">${projectInfo[1].tech2}</button>
    <button type="button">${projectInfo[1].tech3}</button>
    <div>
      <button type="button" class="go-to dark-bg transition-cta">
        See this project
        <i class="fas fa-arrow-right"></i>
      </button>
    </div>
  </div>
  </div>`;

  projectSection.innerHTML += projects;
}

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('FormInput') !== null) {
    let getforminfo = localStorage.getItem('FormInput');
    getforminfo = JSON.parse(getforminfo);
    userName.value = getforminfo.name;
    email.value = getforminfo.email;
    message.value = getforminfo.message;
  }

  //check window width add or remove classes from elements
  const cardDetails1 = document.getElementById('card1');
  const cardDetails2 = document.getElementById('card5');
  const card3 = document.getElementById('item-3');

  if (window.innerWidth > 992) {
    cardDetails1.classList.remove('mobile-only');
    cardDetails2.classList.remove('mobile-only');
    card3.classList.add('mobile-only');
  }
});
