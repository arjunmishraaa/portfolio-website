function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const toggleButton = document.getElementById('dark-mode-toggle');
const moonIcon = document.getElementById('moon-icon');
const sunIcon = document.getElementById('sun-icon');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    moonIcon.style.display = document.body.classList.contains('dark-mode') ? 'none' : 'inline';
    sunIcon.style.display = document.body.classList.contains('dark-mode') ? 'inline' : 'none';
});
