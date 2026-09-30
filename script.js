const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.main-nav');

if (menuButton && menu) {
  menuButton.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const sections = document.querySelectorAll('.section-reveal');

if (reduceMotion || !('IntersectionObserver' in window)) {
  sections.forEach((section) => section.classList.add('is-visible'));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  sections.forEach((section) => observer.observe(section));
}

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
