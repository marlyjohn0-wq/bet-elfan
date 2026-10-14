const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  navLinks.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
}));

// missing-image fallback + lightbox
const lb = document.getElementById('lightbox'), lbImg = lb.querySelector('img');

document.querySelectorAll('.shot').forEach(f => {
  const img = f.querySelector('img');
  const miss = () => f.classList.add('missing');
  img.addEventListener('error', miss);
  if (img.complete && img.naturalWidth === 0) miss();
  f.addEventListener('click', () => {
    if (f.classList.contains('missing')) return;
    lbImg.src = img.src; lbImg.alt = img.alt; lb.classList.add('open');
  });
});

lb.addEventListener('click', () => lb.classList.remove('open'));
document.addEventListener('keydown', e => { if (e.key === 'Escape') lb.classList.remove('open'); });