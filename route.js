// /route.js
(function () {
  // EDIT THESE ONCE. DONE.
  const ROUTES = {
    home: "/system",
    apply: "/apply",
    access: "/access",
    notAccepted: "/not-accepted",
    terms: "/terms",
    policies: "/policies",
    services: "/services",
    contact: "/contact",
    support: "/support",
  };

  function go(path) {
    if (!path) return;
    window.location.href = path;
  }

  // Buttons / links routing
  document.addEventListener("click", (e) => {
    const el = e.target.closest("[data-route],[data-apply],[data-access],[data-notaccepted]");
    if (!el) return;

    // Backward compatible: your existing data-apply
    if (el.hasAttribute("data-apply")) return go(ROUTES.apply);

    // Optional helpers if you want them
    if (el.hasAttribute("data-access")) return go(ROUTES.access);
    if (el.hasAttribute("data-notaccepted")) return go(ROUTES.notAccepted);

    // Generic routing
    const key = el.getAttribute("data-route");
    if (key && ROUTES[key]) return go(ROUTES[key]);
  });

  // Expose for scripts that need it (apply/access flows)
  window.MN8_ROUTES = ROUTES;
})();
