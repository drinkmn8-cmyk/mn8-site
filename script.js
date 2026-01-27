(() => {
  /* ---------- Reveal on scroll ---------- */
  const revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length) {
    const revealIO = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            revealIO.unobserve(e.target); // stop observing once revealed
          }
        }
      },
      { threshold: 0.14, rootMargin: "0px 0px -10% 0px" }
    );

    revealEls.forEach((el) => revealIO.observe(el));
  }

  /* ---------- Sticky CTA after hero ---------- */
  const sticky = document.getElementById("sticky");
  const hero = document.querySelector(".hero");

  if (sticky && hero) {
    const heroIO = new IntersectionObserver(
      (entries) => {
        const onHero = entries[0]?.isIntersecting ?? true;
        sticky.classList.toggle("is-on", !onHero);
        sticky.setAttribute("aria-hidden", String(onHero));
      },
      { threshold: 0.18 }
    );

    heroIO.observe(hero);
  }

  /* ---------- Mobile menu (dots) ---------- */
  const btn = document.querySelector(".menu-btn");
  const panel = document.getElementById("menuPanel");
  if (!btn || !panel) return;

  // Ensure consistent initial state
  const initOpen = btn.getAttribute("aria-expanded") === "true";
  panel.hidden = !initOpen;

  const lockScroll = (locked) => {
    document.documentElement.classList.toggle("no-scroll", locked);
    document.body.classList.toggle("no-scroll", locked);
  };

  const setOpen = (open) => {
    btn.setAttribute("aria-expanded", String(open));
    panel.hidden = !open;
    lockScroll(open);

    if (open) {
      // optional: focus first link for keyboard users
      const firstLink = panel.querySelector("a");
      firstLink?.focus?.();
    } else {
      btn.focus?.();
    }
  };

  btn.addEventListener("click", () => {
    const open = btn.getAttribute("aria-expanded") === "true";
    setOpen(!open);
  });

  // Close when clicking a link inside
  panel.addEventListener("click", (e) => {
    const a = e.target.closest("a");
    if (a) setOpen(false);
  });

  // Close when clicking outside
  document.addEventListener("click", (e) => {
    const open = btn.getAttribute("aria-expanded") === "true";
    if (!open) return;

    const clickedBtn = e.target.closest(".menu-btn");
    const clickedPanel = e.target.closest("#menuPanel");
    if (!clickedBtn && !clickedPanel) setOpen(false);
  });

  // Escape closes
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setOpen(false);
  });
})();
