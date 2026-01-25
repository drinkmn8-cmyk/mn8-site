(() => {
  const sticky = document.getElementById("stickyCta");
  const hero = document.getElementById("hero");
  if (!sticky || !hero) return;

  const update = () => {
    const heroBottom = hero.getBoundingClientRect().bottom;
    const show = heroBottom <= 0; // only once hero is fully scrolled past
    sticky.classList.toggle("is-visible", show);
    sticky.setAttribute("aria-hidden", show ? "false" : "true");
  };

  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
})();

