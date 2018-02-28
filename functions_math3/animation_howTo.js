$(document).scroll(function () {

    var what1 = $(".howToWrap").offset().top;
    var pos1 = $(window).height() + $(window).scrollTop();
    $(".everyInfoWrap").addClass("animationHowTo");
});