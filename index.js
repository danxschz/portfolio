// Navigation 
const scrollIntoElement = (e) => {
  e.preventDefault();
  const element = document.querySelector(`.${e.target.getAttribute('id')}`);
  element.scrollIntoView({ behavior: 'smooth' });
}

const landingBtn = document.querySelector('#landing');
landingBtn.addEventListener('click', scrollIntoElement);
landingBtn.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' || e.key === ' ') scrollIntoElement(e);
});

const projectsBtn = document.querySelector('#projects');
projectsBtn.addEventListener('click', scrollIntoElement);
projectsBtn.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' || e.key === ' ') scrollIntoElement(e);
});

const contactBtn = document.querySelector('#contact');
contactBtn.addEventListener('click', scrollIntoElement);
contactBtn.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' || e.key === ' ') scrollIntoElement(e);
});

// Check my work button
const checkBtn = document.querySelector('#check');
checkBtn.addEventListener('click', () => {
  const projects = document.querySelector('.projects');
  projects.scrollIntoView({ behavior: 'smooth' });
});
