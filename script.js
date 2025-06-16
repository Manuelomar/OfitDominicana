// Aquí puedes animar contenido con IntersectionObserver o animaciones de scroll
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("animate__fadeIn");
      }
    });
  });

  document.querySelectorAll("#main-content p").forEach(el => observer.observe(el));
});
