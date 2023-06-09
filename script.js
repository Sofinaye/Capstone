const menuIcon = document.querySelector('#menu-icon');
const menuToggle = document.querySelector('#menu-toggle');
const menuSection = document.querySelector('#menu-section');

menuIcon.addEventListener('click', () => {
  menuSection.classList.add('menu-section-active');
});

menuToggle.addEventListener('click', () => {
  menuSection.classList.remove('menu-section-active');
});

document.querySelectorAll('.menu-item a').forEach((item) => {
  item.addEventListener('click', () => {
    menuSection.classList.remove('menu-section-active');
  });
});