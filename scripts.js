// Smooth scrolling for navigation and scroll button
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const t = document.querySelector(a.getAttribute('href'));
    if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

const scrollBtn = document.querySelector('.scroll-btn');
if (scrollBtn) {
  scrollBtn.addEventListener('click', () => {
    const next = document.querySelector('#about');
    if (next) next.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

// highlight nav link on scroll
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

function onScroll() {
  const pos = window.scrollY + 200;
  let current = '';
  sections.forEach(s => {
    if (s.offsetTop <= pos) current = s.id;
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
  });
}

window.addEventListener('scroll', onScroll);
onScroll();
