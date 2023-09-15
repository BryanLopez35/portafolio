$(document).ready(function () {

  var navbar = $(".navbar");
  var navbarCollapse = $(".navbar-collapse");

  $(document).click(function (event) {
    var target = $(event.target);

    if (!target.closest(navbarCollapse).length && navbarCollapse.hasClass("show")) {
      navbarCollapse.removeClass("show");
    }
  });

  navbarCollapse.on("click", "a", function () {
    navbarCollapse.removeClass("show");
  });
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

// Texto que se va a escribir
const welcomeText = "¡Hola! Soy Bryan López";
const descriptionText = "Desarrollador Web";

// Obtener los elementos span
const typedText = document.getElementById("typed-text");
const typedText2 = document.getElementById("typed-text2");

// Variables para el índice del carácter actual
let charIndex = 0;
let charIndex2 = 0;

// Función para escribir el texto de manera automática
function typeText() {
  if (charIndex < welcomeText.length) {
    typedText.textContent += welcomeText.charAt(charIndex);
    charIndex++;
    setTimeout(typeText, 50); // Tiempo de espera entre caracteres (ajusta el valor según tus necesidades)
  }
}

function typeText2() {
  if (charIndex2 < descriptionText.length) {
    typedText2.textContent += descriptionText.charAt(charIndex2);
    charIndex2++;
    setTimeout(typeText2, 50); // Tiempo de espera entre caracteres (ajusta el valor según tus necesidades)
  }
}

// Iniciar la función cuando se cargue la página
window.addEventListener("DOMContentLoaded", function () {
  typeText();
  setTimeout(typeText2, 1500); // Retardo para empezar a escribir la descripción
});

