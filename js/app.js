const buttons = document.querySelectorAll("nav button");
const pages = document.querySelectorAll(".page");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.page;

    pages.forEach(p => {
      p.classList.remove("active");
      if (p.id === target) p.classList.add("active");
    });
  });
});
