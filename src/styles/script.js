// Detecta todos os elementos com fade-in
const fadeElements = document.querySelectorAll('.fade-in');

// Utiliza IntersectionObserver para eficiência
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  {
    threshold: 0.3, // quando 30% do elemento for visível
  }
);

// Observa cada elemento
fadeElements.forEach((el) => {
  observer.observe(el);
});
<script src="script.js"></script>
