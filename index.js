// Navigation 
const getElementPosition = (element) => {
  const rect = element.getBoundingClientRect();

  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY
  }
}

const scrollIntoElement = (e) => {
  e.preventDefault();
  const element = document.querySelector(`.${e.target.getAttribute('id')}`);
  const position = getElementPosition(element).top;
  const headerHeight = document.querySelector('header').clientHeight;

  // I'm using this method instead of element.scrollIntoView() to avoid covering the top of the element with the sticky nav
  window.scroll({
    top: position - headerHeight,
    behavior: 'smooth'
  });
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
  const position = getElementPosition(projects).top;
  const headerHeight = document.querySelector('header').clientHeight;

  window.scroll({
    top: position - headerHeight,
    behavior: 'smooth'
  });
});
