/* route.js — single source of truth (custom domain ready) */
(function () {
  const BASE = "mn8.app"; // custom domain => root

  const ROUTES = {
    home: `${BASE}/`,
    system: `${BASE}/`,          // if your main page is the system/landing
    apply: `${BASE}/apply/`,
    access: `${BASE}/access/`,
    notApproved: `${BASE}/not-approved/`,
    terms: `${BASE}/terms/`,
    policy: `${BASE}/policy/`,
    services: `${BASE}/services/`,
    support: `${BASE}/support/`,
  };

  window.MN8_ROUTES = ROUTES;

  window.mn8Go = function (key, qs = "") {
    const url = ROUTES[key] || key;
    location.href = qs ? `${url}${qs.startsWith("?") ? qs : "?" + qs}` : url;
  };

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-route]").forEach((el) => {
      const key = el.getAttribute("data-route");
      const href = ROUTES[key];
      if (!href) return;

      if (el.tagName === "A") el.setAttribute("href", href);
      if (el.tagName === "BUTTON") el.addEventListener("click", () => (location.href = href));
    });
  });
})();
