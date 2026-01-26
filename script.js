(() => {
  // ===== Apple-like reveal =====
  const els = document.querySelectorAll(".reveal");

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("is-in");
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
  );

  els.forEach((el) => io.observe(el));

  // ===== Sticky CTA after hero =====
  const sticky = document.getElementById("stickyCta");
  const hero = document.getElementById("hero");

  if (!sticky || !hero) return;

  const heroIO = new IntersectionObserver(
    (entries) => {
      const onHero = entries[0]?.isIntersecting;
      if (onHero) {
        sticky.classList.remove("is-visible");
        sticky.setAttribute("aria-hidden", "true");
      } else {
        sticky.classList.add("is-visible");
        sticky.setAttribute("aria-hidden", "false");
      }
    },
    { threshold: 0.15 }
  );

  heroIO.observe(hero);
})();
