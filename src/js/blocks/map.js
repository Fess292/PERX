
ymaps.ready(init);

function init() {
    // Контейнер для вашего балуна
    var balloonContainer = document.createElement('div');
    balloonContainer.classList.add('custom-balloon-container');
    document.body.appendChild(balloonContainer);

    var myMap = new ymaps.Map("map", {
        center: [55.76, 37.85], // Координаты центра карты
        zoom: 10,
        controls: ['zoomControl']
    });

    var points = [
        {coords: [55.76, 37.60], info: 'Описание первой точки'},
        {coords: [55.74, 37.70], info: 'Описание второй точки'},
        {coords: [55.78, 37.80], info: 'Описание третьей точки'},
        {coords: [55.84, 37.80], info: 'Описание четвертой точки'}
    ];

    // Функция для открытия балуна в нижней части карты
    function openBalloon(content) {
        balloonContainer.innerHTML = content;
        balloonContainer.style.display = 'block'; // Показываем контейнер
        // Адаптируйте стили так, чтобы балун появился там, где вам нужно
    }

    // Функция для закрытия балуна
    function closeBalloon() {
        balloonContainer.style.display = 'none'; // Прячем контейнер
        balloonContainer.innerHTML = ''; // Очищаем содержимое
    }

    // Создаем кастомные маркеры
    points.forEach(function (point) {
        var placemark = new ymaps.Placemark(point.coords, {
            balloonTitle: 'Информация', // Заголовок балуна
            balloonContent: point.info  // Контент балуна из вашего массива
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/ico-map.svg', // Путь к вашей иконке
            iconImageSize: [96, 96], // Размеры иконки
            //iconImageOffset: [-15, -42] // Смещение иконки
        });

        // Подписываемся на событие клика по маркеру
        placemark.events.add('click', function (e) {
            // Отменяем стандартное действие балуна
            e.preventDefault();
            // Отображаем балун в нижней части экрана
            var balloonContent = '<h3 class="custom-balloon-title">' +
                    placemark.properties.get('balloonTitle') + '</h3>' +
                '<p class="custom-balloon-content">' + 
                    placemark.properties.get('balloonContent') + '</p>';
            openBalloon(balloonContent);
        });

        myMap.geoObjects.add(placemark);
    });
    
    // Закрытие балуна при клике на карте
    myMap.events.add('click', function () {
        closeBalloon();
    });
}
