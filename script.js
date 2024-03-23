function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");

}

// document.addEventListener("DOMContentLoaded", function() {
//     const darkModeToggle = document.getElementById("dark-mode-checkbox");
  
//     // Set initial theme based on user's preference (optional)
//     if (localStorage.getItem("theme") === "dark") {
//       document.body.classList.add("dark-mode");
//       darkModeToggle.checked = true;
//     }
  
//     // Event listener for dark mode toggle
//     darkModeToggle.addEventListener("change", function() {
//       if (darkModeToggle.checked) {
//         document.body.classList.add("dark-mode");
//         localStorage.setItem("theme", "dark"); // Save user's preference
//       } else {
//         document.body.classList.remove("dark-mode");
//         localStorage.setItem("theme", "light"); // Save user's preference
//       }
//     });
//   });
  
function toggleDarkMode() {
    const body = document.body;
    const icon = document.getElementById("dark-mode-icon");
  
    if (body.classList.contains("dark-mode")) {
      body.classList.remove("dark-mode");
      icon.src = "moon.png";
      localStorage.setItem("theme", "light"); // Save user's preference
    } else {
      body.classList.add("dark-mode");
      icon.src = "sun.png";
      localStorage.setItem("theme", "dark"); // Save user's preference
    }
  }
  