// Need to check on this keep getting alert when trying to sign up- Alejandro
const loginFormHandler = async (event) => {
  event.preventDefault();
  const email = document.querySelector('#login-email').value.trim();
  const password = document.querySelector('#login-password').value.trim();
  if (email && password) {
    try {
      // need to find the right api - Alejandro  
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        window.location.href = '/';
        // Process the API response, if needed
        // Example: const data = await response.json();

      } else {
        console.log('Failed to log in');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();
  const firstname = document.querySelector('#firstName').value.trim();
  const lastname = document.querySelector('#lastName').value.trim();
  const email = document.querySelector('#signup-email').value.trim();
  const password = document.querySelector('#signup-password').value.trim();
  if (firstname && lastname && email && password) {
    try {
      // need to fix this get to fetch main api -Alejandro 
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ firstname, lastname, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        // Process the API response, if needed
        // Example: const data = await response.json();

        // Perform client-side redirection after a successful response
        window.location.href = '/';
      } else {
        console.log('Failed to sign up.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
};

document
  .querySelector('#login-section')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('#signup-section')
  .addEventListener('submit', signupFormHandler);
