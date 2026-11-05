'use strict';
const filterButtons = document.querySelectorAll('[data-filter]');
const cards = document.querySelectorAll('.project-card');
filterButtons.forEach(button => button.addEventListener('click', () => {
  const selected = button.dataset.filter;
  filterButtons.forEach(item => { const isActive = item === button; item.classList.toggle('active', isActive); item.setAttribute('aria-pressed', String(isActive)); });
  cards.forEach(card => { card.hidden = selected !== 'all' && card.dataset.category !== selected; });
}));
const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.mobile-nav');
function closeMenu() { menu.hidden = true; menuButton.setAttribute('aria-expanded','false'); menuButton.setAttribute('aria-label','Apri menu'); }
menuButton.addEventListener('click', () => { const willOpen = menu.hidden; menu.hidden = !willOpen; menuButton.setAttribute('aria-expanded', String(willOpen)); menuButton.setAttribute('aria-label',willOpen?'Chiudi menu':'Apri menu'); });
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && !menu.hidden) closeMenu(); });
const dialog = document.getElementById('lightbox');
const dialogImage = dialog.querySelector('img');
const dialogCaption = dialog.querySelector('.lightbox-caption');
let lastTrigger = null;
document.querySelectorAll('.gallery-item').forEach(button => button.addEventListener('click', () => {
  lastTrigger = button;
  dialogImage.src = button.dataset.full;
  dialogImage.alt = button.dataset.alt || button.querySelector('img').alt;
  dialogCaption.textContent = dialogImage.alt;
  if (typeof dialog.showModal === 'function') dialog.showModal(); else dialog.setAttribute('open','');
  document.body.classList.add('no-scroll');
}));
function closeLightbox(){if (dialog.open && typeof dialog.close === 'function') dialog.close(); else dialog.removeAttribute('open');document.body.classList.remove('no-scroll');dialogImage.removeAttribute('src');if(lastTrigger)lastTrigger.focus();}
dialog.querySelector('.lightbox-close').addEventListener('click',closeLightbox);
dialog.addEventListener('click',event=>{if(event.target===dialog)closeLightbox();});
dialog.addEventListener('close',()=>{document.body.classList.remove('no-scroll');dialogImage.removeAttribute('src');if(lastTrigger)lastTrigger.focus();});
document.getElementById('year').textContent=String(new Date().getFullYear());
if('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
  const revealObserver = new IntersectionObserver(entries => { entries.forEach(entry => { if(entry.isIntersecting){entry.target.classList.add('visible');revealObserver.unobserve(entry.target);} }); },{threshold:0.08,rootMargin:'0px 0px 45px 0px'});
  document.querySelectorAll('.reveal').forEach(element => revealObserver.observe(element));
  document.documentElement.classList.add('js-ready');
} else document.querySelectorAll('.reveal').forEach(element => element.classList.add('visible'));
