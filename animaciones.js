document.addEventListener('DOMContentLoaded', function() {
const frase = document.querySelector('.subtitulo-proyectos');
  if (frase) {
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
  }

  const video = document.querySelector('.img-proyectos');
  if (video) {
    function mostrarVideoSiVisible() {
      const rect = video.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      if (rect.top < windowHeight * 0.85) {
        video.classList.add('video-visible');
        window.removeEventListener('scroll', mostrarVideoSiVisible);
      }
    }
    window.addEventListener('scroll', mostrarVideoSiVisible);
    mostrarVideoSiVisible();
  }
});
