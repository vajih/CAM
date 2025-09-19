// ClearCAM small JS
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
if (menuBtn && menu){
  menuBtn.addEventListener('click', () => {
    const open = menu.classList.toggle('show');
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el){
      e.preventDefault();
      el.scrollIntoView({behavior:'smooth'});
      if (menu.classList.contains('show')) menu.classList.remove('show');
    }
  });
});
