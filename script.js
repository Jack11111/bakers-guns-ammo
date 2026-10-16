
'use strict';

// Standalone site: no API keys or build system required.
const header = document.querySelector('#site-header');
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');
const updateHeader = () => header.classList.toggle('scrolled', window.scrollY > 12);
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  nav.classList.toggle('is-open', open);
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
}));
window.addEventListener('resize', () => {
  if (window.innerWidth > 920) {
    nav.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
  }
});

document.querySelector('#year').textContent = String(new Date().getFullYear());
const revealNodes = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px 65px 0px' });
  revealNodes.forEach(el => observer.observe(el));
} else {
  revealNodes.forEach(el => el.classList.add('is-visible'));
}

const photos = [
  { url: 'assets/showroom-wide.webp', caption: 'THE LONG-GUN WALL', alt: 'Wide-angle photo of the Baker’s showroom long-gun wall' },
  { url: 'assets/pegwall-display.webp', caption: 'THE SPORTING DISPLAY', alt: 'Baker’s sporting equipment display wall' },
  { url: 'assets/ammunition-shelves.webp', caption: 'THE AMMO SHELVES', alt: 'Shelves inside Baker’s showing ammunition packaging' },
  { url: 'assets/display-counter.webp', caption: 'AT THE COUNTER', alt: 'Baker’s glass display counter' },
  { url: 'assets/outdoor-accessories.webp', caption: 'THE ACCESSORIES', alt: 'Hunting and sporting accessories inside Baker’s' }
];
const photoDialog = document.querySelector('#photo-dialog');
const lightboxImage = document.querySelector('#lightbox-image');
const lightboxCaption = document.querySelector('#lightbox-caption');
const lightboxCount = document.querySelector('#lightbox-count');
let photoIndex = 0;
let opener = null;
function showPhoto(index) {
  photoIndex = (index + photos.length) % photos.length;
  const photo = photos[photoIndex];
  lightboxImage.src = photo.url;
  lightboxImage.alt = photo.alt;
  lightboxCaption.textContent = photo.caption;
  lightboxCount.textContent = `${String(photoIndex + 1).padStart(2, '0')} / ${String(photos.length).padStart(2, '0')}`;
}
document.querySelectorAll('[data-gallery]').forEach(tile => {
  tile.addEventListener('click', () => {
    opener = tile;
    showPhoto(Number(tile.dataset.gallery));
    photoDialog.showModal();
    document.body.classList.add('lightbox-open');
  });
});
function closeLightbox() { photoDialog.close(); }
document.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
document.querySelector('#lightbox-prev').addEventListener('click', () => showPhoto(photoIndex - 1));
document.querySelector('#lightbox-next').addEventListener('click', () => showPhoto(photoIndex + 1));
photoDialog.addEventListener('click', event => { if (event.target === photoDialog) closeLightbox(); });
photoDialog.addEventListener('close', () => {
  document.body.classList.remove('lightbox-open');
  opener?.focus();
});
document.addEventListener('keydown', event => {
  if (!photoDialog.open) return;
  if (event.key === 'ArrowLeft') showPhoto(photoIndex - 1);
  if (event.key === 'ArrowRight') showPhoto(photoIndex + 1);
});

