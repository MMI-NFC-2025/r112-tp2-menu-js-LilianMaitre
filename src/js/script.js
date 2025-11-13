const toggle = document.querySelector('.menu-btn');
const nav = document.querySelector('nav.menu');


toggle.addEventListener('click', () => {
    const isOpen = toggle.ariaExpanded === "true";
    const isClosed = !isOpen;
    console.log("isOpen : ", isOpen, "isClosed : ", isClosed);
    nav.setAttribute('aria-hidden', isOpen);
    toggle.setAttribute('aria-expanded', isClosed);
}); 
