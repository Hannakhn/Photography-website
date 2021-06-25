$(function () {
    $(".carousel").carousel({ interval: 2000, pause: "false" });
    $("#carouselButton").click(function () {
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause");
        }
    });
});

$('.nav-tabs').on('shown.bs.tab', 'a', function (e) {
    if (e.currentTarget) {
        $(e.currentTarget).removeClass('active');
    }
});