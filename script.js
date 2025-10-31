// Highlight the current navigation link
const currentPage = window.location.pathname.split("/").pop();
document.querySelectorAll("nav a").forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

// Smooth fade-in animation for hero and cards
window.addEventListener("scroll", () => {
  const elements = document.querySelectorAll(".card, .hero-text, .biodata-card");
  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    if (position < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
});
