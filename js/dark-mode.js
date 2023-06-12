$(document).ready(function () {
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const body = document.body;
  
    // Comprueba si el usuario tiene establecido el modo oscuro en su preferencia
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  
    // Establece el modo oscuro si la preferencia del usuario es oscura
    if (prefersDarkMode) {
      body.classList.add("dark-mode");
      darkModeToggle.checked = true;
    }
  
    // Cambia entre los temas claro y oscuro al hacer clic en el interruptor
    darkModeToggle.addEventListener("change", function () {
      body.classList.toggle("dark-mode");
    });
  });
  