$(function() {

    // Обработка разворачивания/сворачивания spoiler
    $('.spoilerTitle').click( function() {
        // Установка переменных:
        var spoilerTitle = $(this); // Запомним заголовок (по которому кликнули)
        var spoilerTitleArrowDown = spoilerTitle.children().first(); // Запомним стрелку Down в заголовке
        var spoilerTitleArrowUp = spoilerTitle.children().first().next(); // Запомним стрелку Up в заголовке
        var spoilerContentBox = $(this).next(); // Запомнить блок содержащий: контент и сворачивающую закладку
        // Если выполняется разворачивание контента, то сперва изменить класс заголовка
        // Позволяет избежать запоздалого изменения стиля заголовка при разворачивании
        // Обратное изменение класс выполнится в самой ф-ии анимации (так данную смену класса
        // заголовку необходимо выполнить в самом конце анимации).
        if ( spoilerTitle.hasClass('spoilerTitle-closed') ) {
            spoilerTitle.removeClass('spoilerTitle-closed');
            spoilerTitle.addClass('spoilerTitle-open');
            spoilerTitleArrowDown.hide(); // скрыть стрелку
            spoilerTitleArrowUp.show(); // отобразить стрелку
        }
        // Запуск анимации отображения/скрытия контента и вспомог. элементов
        spoilerContentBox.toggle(500, function() {
            if (spoilerContentBox.is(':hidden')) { // Если блок с контентом скрыт (необходимо развернуть)
                // Смена класса заголовку
                spoilerTitle.removeClass('spoilerTitle-open');
                spoilerTitle.addClass('spoilerTitle-closed');
                // Установить видимость стрелкам
                spoilerTitleArrowDown.show();
                spoilerTitleArrowUp.hide();
            }
        });
    });

    // Обработка сворачивания spoiler по клику на блоке - сворачивающая закладка
    // Данный блок становится доступен после разворачивания контента.
    $('.spoilerCloseBox').click( function() {
        // Установка переменных:
        var spoilerCloseBox = $(this); // Запомнить блок - сворачивающая закладку (по которому кликнули)
        var spoilerContentBox = spoilerCloseBox.parent(); // Запомнить блок содержащий: контент и сворачивающую закладку
        var spoilerTitle = spoilerContentBox.prev(); // Запомним заголовок
        var spoilerTitleArrowDown = spoilerTitle.children().first(); // Запомним стрелку Down в заголовке
        var spoilerTitleArrowUp = spoilerTitle.children().first().next(); // Запомним стрелку Up в заголовке
        // Анимационное сворачивание контента
        spoilerContentBox.hide(500, function() {
            // Смена класса заголовку
            spoilerTitle.removeClass('spoilerTitle-open');
            spoilerTitle.addClass('spoilerTitle-closed');
            // Установить видимость стрелкам
            spoilerTitleArrowDown.show();
            spoilerTitleArrowUp.hide();
        });
    });

});