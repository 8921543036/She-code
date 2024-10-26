document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("form").addEventListener("submit", function (event) {
    // Prevent the default form submission

    // Get form values

    const fname = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const number = document.getElementById("number").value;
    const message = document.getElementById("message").value;
    const emailerror = document.getElementById("emailerror");
    const numbererror = document.getElementById("numbererror");
    const fnameerror = document.getElementById("nameerror");
    const messageerror = document.getElementById("messageerror");

    // Clear previous error messages
    emailerror.innerHTML = "";
    numbererror.innerHTML = "";
    fnameerror.innerHTML = "";
    messageerror.innerHTML = "";

    let isValid = true;

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      emailerror.innerHTML = "Invalid email format";
      isValid = false;
    }

    if (number.length < 10) {
      numbererror.innerHTML = "Number must be contain atleast 10 number";
      isValid = false;
    }

    // Validate first name
    if (fname.length < 4) {
      fnameerror.innerHTML = "First Name must be at least 4 characters";
      isValid = false;
    }

    // Validate message
    if (message === "") {
      messageerror.innerHTML = "Enter a message";
      isValid = false;
    }

    // Submit the form if all validations pass
    if (isValid) {
      // Optionally show success message or handle further actions
      alert("Form successfully submitted!");

      // Submit the form programmatically
      event.submit();
    } else {
      event.preventDefault();
      // Optionally show an error message
      alert("Please check the form for errors.");
    }
  });
});
