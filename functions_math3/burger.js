$(document).ready(function () {
    var icon = $('.burgerIcon');
    var menu = $('.burgerMenuActive');

    icon.click(function () {
        menu.toggleClass('activeBurger');
    });
});
