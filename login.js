document.addEventListener('DOMContentLoaded', function () {
    // Check if local storage is supported
    if (typeof Storage !== "undefined") {
        const signupForm = document.querySelector("#signup-section form");

        signupForm.addEventListener("submit", function (e) {
            e.preventDefault(); // Prevent the form from actually submitting

            // Get the values from the signup form
            const firstName = document.querySelector("#firstName").value;
            const lastName = document.querySelector("#lastName").value;
            const signupEmail = document.querySelector("#signup-email").value;
            const signupPassword = document.querySelector("#signupPassword").value;

            // Check if any of the fields are empty
            if (!firstName || !lastName || !signupEmail || !signupPassword) {
                alert("Please complete all fields.");
                return; // Prevent further execution
            }

            // Create a user object to store in local storage
            const userData = {
                firstName: firstName,
                lastName: lastName,
                email: signupEmail,
                password: signupPassword
            };

            // Save the user data to local storage
            localStorage.setItem('userData', JSON.stringify(userData));

            // You can add a success message here if needed
            alert("Sign Up successful!");
        });
    } else {
        // Local storage is not supported
        alert("Local storage is not supported in your browser.");
    }
});
