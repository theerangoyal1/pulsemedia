/* ---------------------------------------------
   MOBILE NAV TOGGLE
--------------------------------------------- */
const navToggle = document.querySelector(".nav-toggle");
const mobileNav = document.querySelector(".nav-mobile");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", !expanded);
    mobileNav.setAttribute("aria-hidden", expanded);
    mobileNav.classList.toggle("open");
  });
}

/* ---------------------------------------------
   SCROLL REVEAL ANIMATIONS
--------------------------------------------- */
const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  revealElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      el.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/* ---------------------------------------------
   CONTACT FORM (WEB3FORMS INTEGRATION)
--------------------------------------------- */
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm) {
  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    formStatus.textContent = "Sending...";
    formStatus.style.color = "#444";

    const formData = new FormData(contactForm);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const result = await response.json();

      if (result.success) {
        formStatus.textContent = "Thank you! Your sample request has been sent.";
        formStatus.style.color = "#2a7f4f";
        contactForm.reset();
      } else {
        formStatus.textContent = "Something went wrong. Please try again.";
        formStatus.style.color = "#b82e2e";
      }
    } catch (error) {
      formStatus.textContent = "Network error — try again later.";
      formStatus.style.color = "#b82e2e";
    }
  });
}

/* ---------------------------------------------
   FOOTER YEAR AUTO-UPDATE
--------------------------------------------- */
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
