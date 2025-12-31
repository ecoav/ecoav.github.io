const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll("nav a");

function showSection(id) {
  sections.forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    showSection(link.dataset.section);
  });
});

// Initial
showSection("home");

// Scroll animations
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

document.querySelectorAll(".section").forEach(el => {
  observer.observe(el);
});
