$(document).ready(function () {
    var icon = $('.burgerIcon');
    var menu = $('.menuBurgerActive');

    icon.click(function () {
       menu.toggleClass('activeBurger');
    });
});
