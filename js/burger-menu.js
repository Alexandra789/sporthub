const burgerMenu = document.querySelector('.burger-menu');
const modal = document.getElementById('modal');
const modalClose = document.getElementById('modalClose');

function openModal() {
    modal.classList.add('active');
    burgerMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
    burgerMenu.setAttribute('aria-label', 'Закрыть меню');
}

function closeModal() {
    modal.classList.remove('active');
    burgerMenu.classList.remove('active');
    document.body.style.overflow = '';
    burgerMenu.setAttribute('aria-label', 'Открыть меню');
}

burgerMenu.addEventListener('click', function(e) {
    e.preventDefault();
    if (modal.classList.contains('active')) {
        closeModal();
    } else {
        openModal();
    }
});

if (modalClose) {
    modalClose.addEventListener('click', closeModal);
}

if (modal) {
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

window.openModal = openModal;
window.closeModal = closeModal;