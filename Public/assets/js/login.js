// Need to check on this keep getting alert when trying to sign up- Alejandro
const loginFormHandler = async (event) => {
  event.preventDefault();
  const email = document.querySelector('#login-email').value.trim();
  const password = document.querySelector('#login-password').value.trim();
  if (email && password) {
    try {
      // need to find the right api - Alejandro
      const response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        // Process the API response, if needed
        // Example: const data = await response.json();

      } else {
        alert('Failed to log in.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();
  const firstName = document.querySelector('#firstName').value.trim();
  const lastName = document.querySelector('#lastName').value.trim();
  const email = document.querySelector('#signup-email').value.trim();
  const password = document.querySelector('#signup-password').value.trim();
  if (firstName && lastName && email && password) {
    try {
      // need to fix this get to fetch main api
      const response = await fetch('/', {
        method: 'POST',
        body: JSON.stringify({ firstName, lastName, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        // Process the API response, if needed
        // Example: const data = await response.json();

        // Perform client-side redirection after a successful response
        window.location.href = '/';
      } else {
        alert('Failed to sign up.');
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
