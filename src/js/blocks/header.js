import mobileNav from '../modules/mobile-nav.js';
mobileNav();

var header = document.querySelector('.header');

// Устанавливаем начальную позицию скролла
var lastScrollPosition = 0;

// Функция, которая будет вызываться при прокрутке страницы
function handleScroll() {
    var currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    // Проверяем, прокрутили мы страницу вверх или вниз
    if (currentScrollPosition > lastScrollPosition) {
        // Прокрутка вниз - скрываем header
        header.style.top = '-100%'; // Предполагается, что высота header не превышает 100%
    } else {
        // Прокрутка вверх - показываем header
        header.style.top = '0';
    }

    // Обновляем позицию скролла для следующего события 
    lastScrollPosition = currentScrollPosition;
}

// Подписываемся на событие прокрутки
window.addEventListener('scroll', handleScroll);