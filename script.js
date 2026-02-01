document.addEventListener("DOMContentLoaded", () => {
  // Mobile nav toggle
  const toggleBtn = document.querySelector(".nav-toggle");
  const navMenu = document.getElementById("nav-menu");

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("open");
      toggleBtn.setAttribute("aria-expanded", String(isOpen));
    });

    // close menu after click (mobile)
    navMenu.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        navMenu.classList.remove("open");
        toggleBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Form status message (better than alert)
  const form = document.getElementById("contact-form");
  const statusEl = document.getElementById("form-status");

  if (form && statusEl) {
    form.addEventListener("submit", () => {
      statusEl.textContent = "✅ Danke! Nachricht wurde gesendet. Ich melde mich innerhalb von 24 Stunden.";
    });
  }

  // Active nav link with IntersectionObserver
  const navLinks = document.querySelectorAll(".nav a[href^='#']");
  const sections = document.querySelectorAll("main section[id]");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = entry.target.getAttribute("id");
      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
      });
    });
  }, { threshold: 0.45 });

  sections.forEach((section) => observer.observe(section));
});
