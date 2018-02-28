$(document).ready(function () {
    $("#nameClick").click(function () {
        $(".educationWrap").slideToggle("normal");
        $("#nameClick").toggleClass("active");
    });
});
