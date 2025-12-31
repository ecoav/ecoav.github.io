// ===============================
// GLOBAL STATE
// ===============================
const sections = document.querySelectorAll(".section");
const buttons = document.querySelectorAll(".navbar button");
let currentSection = "home";

// ===============================
// PAGE NAVIGATION
// ===============================
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.section;
    changeSection(target);
  });
});

function changeSection(id) {
  sections.forEach(sec => {
    if (sec.id === id) {
      sec.classList.add("active");
    } else {
      sec.classList.remove("active");
    }
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ===============================
// SMOOTH SCROLL ON LOAD
// ===============================
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// ===============================
// PARALLAX EFFECT
// ===============================
window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero");
  if (!hero) return;
  const scroll = window.scrollY;
  hero.style.backgroundPositionY = `${scroll * 0.3}px`;
});

// ===============================
// SIMPLE ANIMATION ON VIEW
// ===============================
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".section, .card, .track").forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(30px)";
  observer.observe(el);
});

// ===============================
// MUSIC CONTROLS
// ===============================
const audio = document.querySelector("audio");
if (audio) {
  let playing = false;

  document.addEventListener("keydown", e => {
    if (e.code === "Space") {
      e.preventDefault();
      if (audio.paused) {
        audio.play();
        playing = true;
      } else {
        audio.pause();
        playing = false;
      }
    }
  });
}

// ===============================
// DEBUG
// ===============================
console.log("App loaded successfully");
