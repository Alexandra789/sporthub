let swiperHeader = null;

function initSwiper() {
    if (window.innerWidth <= 1023) {
        if (!swiperHeader) {
            swiperHeader = new Swiper(".header__slider", {
                slidesPerView: "auto",
                grabCursor: "true",
                spaceBetween: 10,
                grabCursor: true,
                freeMode: true,
                resistance: true,
                resistanceRatio: 0,
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
    } else {
        if (swiperHeader) {
            swiperHeader.destroy(true, true);
            swiperHeader = null;
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    initSwiper();
});

window.addEventListener('resize', function() {
    initSwiper();
});