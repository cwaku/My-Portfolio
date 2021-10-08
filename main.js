const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLink = document.querySelectorAll('.nav-link');
const projectSection = document.querySelector('.container');

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


const projectInfo = {
  title: 'Project name goes <span>here</span>',
  tech1: 'HTML/CSS',
  tech2: 'css',
  tech3: 'Ruby on Rails',
};