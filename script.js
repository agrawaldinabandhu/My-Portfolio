document.addEventListener("DOMContentLoaded", () => {
  // Dark mode toggle & persist preference
  const toggle = document.getElementById("darkModeToggle");
  const body = document.body;

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark");
    toggle.checked = true;
  }

  toggle.addEventListener("change", () => {
    if (toggle.checked) {
      body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  });

  // Project filter buttons
  const filterButtons = document.querySelectorAll(".project-filters button");
  const cards = document.querySelectorAll("#projects .card");

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Active class toggle
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter;
      cards.forEach((card) => {
        if (filter === "all" || card.dataset.category === filter) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // Scroll reveal (fade-in)
  const revealElements = document.querySelectorAll(".section, .hero-section, .card, footer");
  const revealOnScroll = () => {
    const windowBottom = window.innerHeight + window.scrollY;
    revealElements.forEach((el) => {
      if (windowBottom > el.offsetTop + 100) {
        el.style.opacity = 1;
        el.style.transform = "none";
      }
    });
  };

  revealElements.forEach((el) => {
    el.style.opacity = 0;
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
  });

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("service_6be6qda", "template_567vd3q", this)
    .then(() => {
      document.getElementById("form-message").innerText = "Message sent successfully!";
      this.reset();
    }, (error) => {
      document.getElementById("form-message").innerText = "Failed to send message.";
      console.error(error);
    });
});

const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  const windowBottom = window.innerHeight + window.scrollY;
  revealElements.forEach(el => {
    if (windowBottom > el.offsetTop + 100) {
      el.classList.add("visible");
    } else {
      el.classList.remove("visible");
    }
  });
};

// Initially add the class to elements you want animated, e.g., in HTML add class="section reveal"
