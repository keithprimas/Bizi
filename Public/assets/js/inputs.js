async function newFormHandler(event) {
  event.preventDefault();

  const user_name = document.querySelector('#user_name').value;
  const email_address = document.querySelector('#email_address').value;
  const phone = document.querySelector('#phone').value;
  const user_location = document.querySelector('#user_location').value;
  const personal = document.querySelector('#personal').value;
  const title = document.querySelector('#title').value;
  const company = document.querySelector('#company').value;

  const response = await fetch(`/api/inputs`, {
      method: 'POST',
      body: JSON.stringify({
          user_name,
          email_address,
          phone,
          user_location,
          personal,
          title,
          company,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
  });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to add info');
    }
}
    
document
  .querySelector('#inputs-section')
  .addEventListener('submit', newFormHandler);
