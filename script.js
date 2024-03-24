function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");

}


// // function SendMail(){
// //   let params = {
// //     name : document.getElementById("name").value,
// //     email: document.getElementById("email").value,
// //     // phone : document.getElementById("phone").value,
// //     message : document.getElementById("message").value,
// //   }
// //   console.log("test");
// //   emailjs.send("service_6kx0pff","template_wz6omm7",params).then(function(res){
// //     alert("Email Sent!!"+res.status);
// //   })
// // }

// // function SendMail() {
// //   let params = {
// //     name: document.getElementById("name").value,
// //     email: document.getElementById("email").value,
// //     message: document.getElementById("message").value,
// //   }

// //   console.log("Sending email with params:", params);

// //   emailjs.send("service_6kx0pff", "template_wz6omm7", params)
// //     .then(function(res) {
// //       console.log("Email sent successfully:", res);
// //       alert("Email Sent!!" + res.status);
// //     })
// //     .catch(function(err) {
// //       console.error("Error sending email:", err);
// //       alert("Failed to send email. Please try again later.");
// //     });
// // }


// // Initialize EmailJS with your user ID
// emailjs.init('service_6kx0pff');

// function SendMail() {
//     // Get form input values
//     let name = document.getElementById("name").value;
//     let email = document.getElementById("email").value;
//     let message = document.getElementById("message").value;

//     // Check if any field is empty
//     if (!name || !email || !message) {
//         alert("Please fill in all fields.");
//         return;
//     }

//     // Prepare parameters object
//     let params = {
//         name: name,
//         email: email,
//         message: message
//     };

//     // Send the email
//     emailjs.send("service_6kx0pff", "template_wz6omm7", params)
//         .then(function(response) {
//             console.log("Email sent successfully:", response);
//             alert("Email Sent!!");
//         })
//         .catch(function(error) {
//             console.error("Error sending email:", error);
//             alert("Failed to send email. Please try again later.");
//         });
// }



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
