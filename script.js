(() => {
  // Reveal on scroll (Apple-like)
  const els = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("is-in");
      });
    },
    { threshold: 0.14, rootMargin: "0px 0px -10% 0px" }
  );
  els.forEach((el) => io.observe(el));

  // Sticky CTA after hero
  const sticky = document.getElementById("sticky");
  const hero = document.querySelector(".hero");
  if (!sticky || !hero) return;

  const heroIO = new IntersectionObserver(
    (entries) => {
      const onHero = entries[0]?.isIntersecting;
      sticky.classList.toggle("is-on", !onHero);
    },
    { threshold: 0.18 }
  );
  heroIO.observe(hero);
})();
