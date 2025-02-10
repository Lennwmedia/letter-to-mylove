document.addEventListener('DOMContentLoaded', function() {
  const title = document.querySelector('.title');
  const closeButton = document.querySelector('.close');
  const container = document.querySelector('.container');

  // Al hacer clic en el título, añade la clase "open"
  title.addEventListener('click', function() {
    container.classList.add('open');
  });

  // Al hacer clic en el botón de cierre, elimina la clase "open"
  closeButton.addEventListener('click', function() {
    container.classList.remove('open');
  });
});
