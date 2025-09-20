document.querySelector(".menu-toggle").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("show");
});

// Contact form validation
const form = document.getElementById("contactForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const feedback = document.getElementById("formMessage");

    feedback.textContent = "Thank you!";
      feedback.style.color = "green";
      form.reset();

  });
