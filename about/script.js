const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px' });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

const numberFormatter = new Intl.NumberFormat('en-US');
const counters = document.querySelectorAll('.count-up');

const setCounterValue = (counter, value) => {
  const prefix = counter.dataset.prefix || '';
  const suffix = counter.dataset.suffix || '';
  counter.textContent = `${prefix}${numberFormatter.format(value)}${suffix}`;
};

const animateCounter = (counter) => {
  if (counter.dataset.animated === 'true') return;
  counter.dataset.animated = 'true';
  const target = Number(counter.dataset.target || 0);
  const duration = 3600;
  const startedAt = performance.now();

  const tick = (now) => {
    const progress = Math.min((now - startedAt) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    setCounterValue(counter, Math.round(target * eased));
    if (progress < 1) requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);
};

if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  counters.forEach((counter) => setCounterValue(counter, Number(counter.dataset.target || 0)));
} else {
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.count-up').forEach(animateCounter);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.35 });

  const facts = document.querySelector('.facts');
  if (facts) counterObserver.observe(facts);
}

const certificateTrack = document.querySelector('.certificate-track');
const certificatePrev = document.querySelector('.certificate-prev');
const certificateNext = document.querySelector('.certificate-next');

const scrollCertificates = (direction) => {
  if (!certificateTrack) return;
  const card = certificateTrack.querySelector('.certificate-card');
  const amount = card ? card.getBoundingClientRect().width + 24 : certificateTrack.clientWidth * 0.75;
  certificateTrack.scrollBy({ left: direction * amount, behavior: 'smooth' });
};

certificatePrev?.addEventListener('click', () => scrollCertificates(-1));
certificateNext?.addEventListener('click', () => scrollCertificates(1));
