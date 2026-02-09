const buttons = document.querySelectorAll('.details-btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const details = button.nextElementSibling;
        details.classList.toggle('hidden');
    });
});

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    console.log("Hamburger clicked!");
    navLinks.classList.toggle("open");
  });
}