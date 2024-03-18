import mobileNav from './modules/mobile-nav.js';
import Swiper from './modules/swiper-bundle.min.js';
mobileNav();

// var swiper = new Swiper(".promo-slider", {
//     pagination: {
//         el: ".swiper-pagination",
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
// });
var swiper = new Swiper(".promo-slider", {
    spaceBetween: 30,
    hashNavigation: {
        watchState: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
// var catalogSlider = null;
// var mediaQuerySize = 990;

// function catalogSliderInit() {
//     if (!catalogSlider) {
//         catalogSlider = new Swiper('.users__slider', {
//             effect: "coverflow",
//             slidesPerView: 1,
//             grabCursor: true,
//             initialSlide: 1,
//             coverflowEffect: {
//                 rotate: 50,
//                 stretch: 0,
//                 depth: 100,
//                 modifier: 1,
//                 slideShadows: false,
//             },
//             breakpoints: {
//                 768: {
//                     spaceBetween: 100
//                 }
//             },
//             pagination: {
//                 el: ".swiper-pagination",
//                 clickable: true,
//             },
//             navigation: {
//                 nextEl: ".swiper-button-next",
//                 prevEl: ".swiper-button-prev",
//             },
//         });
//     }
// }

// function catalogSliderDestroy() {
//     if (catalogSlider) {
//         catalogSlider.destroy();
//         catalogSlider = null;
//     }
// }

// $(window).on('load resize', function () {
//     var windowWidth = $(this).innerWidth();
//     if (windowWidth <= mediaQuerySize) {
//         catalogSliderInit()
//     } else {
//         catalogSliderDestroy()
//     }
// });

