// Activate only after DOM loads
document.addEventListener("DOMContentLoaded", function () {
    // Feature 5: Contact form alert
    const form = document.getElementById("contact-form");
    if (form) {
        form.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("📬 Thank you! Your message has been sent.");
        this.reset();
        });
    }

// Feature 8: Scroll nav highlight
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";
    const scrollY = window.pageYOffset;

    sections.forEach((section) => {
        let sectionTop = section.offsetTop;

        // Offset adjustment depending on section height
        if (section.id === "hero") {
        sectionTop -= 150; // Less offset for top section
        } else {
        sectionTop -= window.innerHeight / 2;
        }
        const sectionHeight = section.offsetHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
        }
    });
  });
});
