
// Get the login button element and the login form by their IDs
const loginButton = document.getElementById('login-button');
const loginForm = document.getElementById('login-form');

// Add a click event listener to the login button
loginButton.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Get the entered email and password
    const enteredEmail = document.getElementById('login-email').value;
    const enteredPassword = document.getElementById('login-password').value;

    // Get the saved email and password from local storage
    const savedEmail = localStorage.getItem('email');
    const savedPassword = localStorage.getItem('password');

    // Check if the entered email and password match the saved values
    if (enteredEmail === savedEmail && enteredPassword === savedPassword) {
        console.log('Welcome!'); // **Need to change this to You're logged in!**
    } else {
        console.log('Login failed. Please check your email and password.');
    }
});


    // Function to set a cookie with an expiration date
    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }

    // Function to get a cookie by name
    function getCookie(name) {
        const decodedCookie = decodeURIComponent(document.cookie);
        const cookies = decodedCookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.startsWith(name + "=")) {
                return cookie.substring(name.length + 1);
            }
        }
        return null;
    }

    // Get the "Remember Me" checkbox and password input field by their IDs
    const rememberMeCheckbox = document.getElementById('rememberMe');
    const loginPassword = document.getElementById('login-password');

    // Check if there is a saved password in the cookie
    const savedPassword = getCookie('savedPassword');
    if (savedPassword) {
        loginPassword.value = savedPassword;
    }
    // **need to add a cookie to save user email**
    // Add a change event listener to the "Remember Me" checkbox
    rememberMeCheckbox.addEventListener('change', () => {
        if (rememberMeCheckbox.checked) {
            // Save the password as a cookie with a 30-day expiration
            setCookie('savedPassword', loginPassword.value, 30);
        } else {
            // Remove the saved password cookie
            document.cookie = 'savedPassword=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        } // ** need to add a cookie to save the user email as well ** 
    });

      // Get the "Forgot Password" button and the password reset dropdown by their IDs
      const forgotPasswordButton = document.querySelector('.btn-link');
      const passwordResetDropdown = document.getElementById('password-reset-dropdown');
  
      // Add a click event listener to the "Forgot Password" button
      forgotPasswordButton.addEventListener('click', () => {
          // Display the password reset dropdown
          passwordResetDropdown.style.display = 'block';
      });
  
      // Handle the password reset
      const resetPasswordButton = document.getElementById('reset-password-button');
      resetPasswordButton.addEventListener('click', () => {
          const resetEmail = document.getElementById('reset-email').value;
          const newPassword = document.getElementById('new-password').value;
  
          // Save the new password to local storage
          localStorage.setItem('password', newPassword);
  
          // You can add code here to handle the password reset process (e.g., send a confirmation email).
          // For this example, we'll log a message to the console.
          console.log('Password reset requested for email: ' + resetEmail);
  
          // Hide the password reset dropdown after handling the request
          passwordResetDropdown.style.display = 'none';
      });




    // Get the button and the popover elements by their IDs
    const signupButton = document.getElementById('signup-button');
    const signupPopover = document.getElementById('signup-popover');

    // Add a click event listener to the "Sign Up" button
    signupButton.addEventListener('click', () => {
        // Get the input values
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signupPassword').value;

        // Check if all fields are filled
        if (firstName && lastName && email && password) {
            // Save the data to local storage
            localStorage.setItem('firstName', firstName);
            localStorage.setItem('lastName', lastName);
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);

            // Change the popover content to "Thank you for signing up!"
            signupPopover.innerHTML = "Thank you for signing up!";

            // Display the popover
            signupPopover.style.display = 'block';
        }
    });


 



