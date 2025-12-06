// Simple interactive features: mobile menu, scroll effect, active link highlight
document.addEventListener("DOMContentLoaded", function () {
  const mobileBtn = document.getElementById("mobileBtn");
  const navLinks = document.getElementById("navLinks");
  const navbar = document.getElementById("navbar");
  const links = document.querySelectorAll(".nav-link");
  const sections = [...document.querySelectorAll("section")];

  // Toggle mobile menu
  mobileBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    mobileBtn.classList.toggle("open");
  });

  // Add scrolled class to navbar
  function onScroll() {
    if (window.scrollY > 20) navbar.classList.add("scrolled");
    else navbar.classList.remove("scrolled");

    // highlight active nav link
    let fromTop = window.scrollY + 120;
    links.forEach((link) => {
      const section = document.querySelector(link.hash);
      if (!section) return;
      if (
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Close mobile menu on link click
  document.querySelectorAll(".nav-link").forEach((a) =>
    a.addEventListener("click", () => {
      if (navLinks.classList.contains("open")) {
        navLinks.classList.remove("open");
        mobileBtn.classList.remove("open");
      }
    })
  );

  // Footer year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
