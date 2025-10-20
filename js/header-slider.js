let swiperHeader = null;

function initSwiper() {
    if (swiperHeader) {
        swiperHeader.destroy(true, true);
        swiperHeader = null;
    }

    if (window.innerWidth <= 1023) {
        swiperHeader = new Swiper(".header__slider", {
            slidesPerView: "auto",
            grabCursor: true,
            spaceBetween: 10,
            freeMode: {
                enabled: true,
                sticky: false
            },
            resistance: true,
            resistanceRatio: 0.85,
            watchSlidesProgress: true,
            touchStartPreventDefault: false,
            breakpoints: {
                320: {
                    slidesPerView: "auto",
                    spaceBetween: 8
                },
                768: {
                    slidesPerView: "auto", 
                    spaceBetween: 12
                }
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(initSwiper, 100);
});

window.addEventListener('resize', function() {
    initSwiper();
});