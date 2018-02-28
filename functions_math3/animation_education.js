// $( document ).ready(function() {

    $(document).scroll(function () {

        var what1 = $(".infoEducationWrap").offset().top,
            pos1 = $(window).height() + $(window).scrollTop();
        $(".studentWrap").addClass("animation1");
        $(".schoolWrap").addClass("animation2");
        $(".eachWrap").addClass("animation3");

        if($(window).width() <= 490){
            $(".studentWrap").removeClass("animation1");
            $(".schoolWrap").removeClass("animation2");
            $(".eachWrap").removeClass("animation3");
        }
    });

// });