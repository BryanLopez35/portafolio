$(document).ready(function () {
    var navbar = $(".navbar");

    // Inicializar Smooth Scroll
    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 800 // Velocidad de desplazamiento (ajusta el valor según tus necesidades)
    });

    $(window).scroll(function () {
        var scrollPosition = $(window).scrollTop();

        if (scrollPosition >= 100) {
            navbar.addClass("navbar-fixed");
        } else {
            navbar.removeClass("navbar-fixed");
        }
    });
});