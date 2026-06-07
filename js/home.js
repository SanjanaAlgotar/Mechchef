const hero = document.querySelector(".hero");

if (hero) {
  window.addEventListener("scroll", () => {
    const offset = Math.min(window.scrollY / 9, 42);
    hero.style.setProperty("--hero-offset", `${offset}px`);
  }, { passive: true });
}
