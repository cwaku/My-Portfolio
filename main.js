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
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi <br><span class="space"></span><br> Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    projectName: 'Project name goes here',
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
      <button type="button" class="popup go-to dark-bg transition-cta">
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

  const cardDetails1 = document.getElementById('card1');
  const cardDetails2 = document.getElementById('card5');
  const card3 = document.getElementById('item-3');

  if (window.innerWidth > 992) {
    cardDetails1.classList.remove('mobile-only');
    cardDetails2.classList.remove('mobile-only');
    card3.classList.add('mobile-only');
  }
  
  var modal = document.getElementById("myModal");
  
  //Create modal
  const modalContent = `<div class="modal-content poppins">
  <span class="close poppins">&times;</span>
   <div class="title">
     <p class="poppins">${projectInfo[1].projectName}</p>
   </div>
   <div class="modal-buttons">
   <button type="button">${projectInfo[1].tech1}</button>
   <button type="button">${projectInfo[1].tech2}</button>
   <button type="button">${projectInfo[1].tech3}</button>
 </div>
 <div class="main-image"></div>
 <div class="modal-summary poppins">
 <p>${projectInfo[1].description}</p>
 </div>
 <div class="buttons">
 <button type="button" class="m-buttons">
   See live
   <i class="fas fa-external-link-alt"></i>
 </button>
 <button type="button" class="m-buttons">
   See source
   <i class="fab fa-github"></i>
 </button>
 </div>
 <div class="remove poppins">
 <a href="#"><i class="fas fa-arrow-left"></i> Previous project</a>
 <a href="#">Next project <i class="fas fa-arrow-right"></i></a>
 </div>
 </div>`;
 modal.innerHTML = modalContent;

 let popUp = document.querySelectorAll('.popup');

 let closePopup = document.querySelector('.close');

 popUp.forEach((n) => n.addEventListener('click', () => {
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
}));

closePopup.addEventListener('click', () => {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
  document.body.style.overflowX = "hidden";
});

window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}
});
