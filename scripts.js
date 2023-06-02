// script.js
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
  
    // Display the entered information
    var alertMessage = "Name: " + name + "\nEmail: " + email + "\nMessage: " + message;
    alert(alertMessage);
  
    // Reset the form
    document.getElementById("contact-form").reset();
  });
  