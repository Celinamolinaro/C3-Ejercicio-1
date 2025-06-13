document.addEventListener('DOMContentLoaded', function() {
  const frase = document.querySelector('.subtitulo-proyectos');
  if (!frase) return;

  function mostrarFraseSiVisible() {
    const rect = frase.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top < windowHeight * 0.85) {
      frase.classList.add('visible-scroll');
      window.removeEventListener('scroll', mostrarFraseSiVisible);
    }
  }

  window.addEventListener('scroll', mostrarFraseSiVisible);
  mostrarFraseSiVisible();
});
