const burgerMenu = document.querySelector('.burger-menu');
const navMenu = document.querySelector('.menu');
const body = document.body;

const overlay = document.createElement('div');
overlay.className = 'menu-overlay';
document.body.appendChild(overlay);

function toggleMenu() {
    const isActive = burgerMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
    overlay.classList.toggle('active');
    body.style.overflow = isActive ? 'hidden' : '';
    
    burgerMenu.setAttribute('aria-label', isActive ? 'Закрыть меню' : 'Открыть меню');
}

burgerMenu.addEventListener('click', toggleMenu);

overlay.addEventListener('click', toggleMenu);
navMenu.addEventListener('click', (e) => {
    if (e.target.classList.contains('menu__link')) {
        toggleMenu();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && burgerMenu.classList.contains('active')) {
        toggleMenu();
    }
});