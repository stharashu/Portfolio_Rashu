function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");

}

document.getElementById('dark-mode-checkbox').addEventListener('change', function() {
  const body = document.body;
  if (this.checked) {
      body.classList.add('dark-mode');
      document.getElementById('dark-mode-text').innerText = 'Light Mode';
  } else {
      body.classList.remove('dark-mode');
      document.getElementById('dark-mode-text').innerText = 'Dark Mode';
  }
});

