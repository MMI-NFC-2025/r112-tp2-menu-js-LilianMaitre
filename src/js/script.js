const toggle = document.getElementById('.menu-btn');
const nav = document.querySelector('nav.menu');


toggle.addEventListener('click', () => {
    nav.setAttribute('aria-hidden', isOpen);
    toggle.setAttribute('aria-expanded', isClosed);
}); 