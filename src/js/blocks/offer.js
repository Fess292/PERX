import Swiper from '../modules/swiper-bundle.min.js';

var catalogSlider = null;
var mediaQuerySize = 990;

function catalogSliderInit() {
    if (!catalogSlider) {
        catalogSlider = new Swiper('.offer__slider', {
            spaceBetween: 18,
            slidesPerView: "auto",
            // simulateTouch: false,
            // allowTouchMove: false,
            // slidesPerView: 1,
            // grabCursor: true,
            // initialSlide: 1,
            breakpoints: {
                768: {
                    spaceBetween: 100
                }
            },
            pagination: {
                el: ".offer-swiper-pagination",
                clickable: true,
            },
        });
    }
}

function catalogSliderDestroy() {
    if (catalogSlider) {
        catalogSlider.destroy();
        catalogSlider = null;
    }
}

window.addEventListener('load', resizeHandler);
window.addEventListener('resize', resizeHandler);

function resizeHandler() {
    // Get the current width of the viewport
    var windowWidth = window.innerWidth;

    // If the viewport width is less than or equal to mediaQuerySize
    if (windowWidth <= mediaQuerySize) {
        // Initialize the slider if it has not already been initialized
        catalogSliderInit();
    } else {
        // Destroy the slider if it has been initialized
        catalogSliderDestroy();
    }
}