const newFormHandler = async (event) => {
  event.preventDefault();

  const user_name = document.querySelector('#user_name').value;
  const email_address = document.querySelector('#email_address').value;
  const phone_number = document.querySelector('#phone_number').value;
  const user_location = document.querySelector('#user_location').value;
  const personal = document.querySelector('#personal').value;
  const title = document.querySelector('#title').value;
  const company = document.querySelector('#company').value;

  if(user_name && email_address && phone_number && user_location) {
    try {
      const response = await fetch(`/api/input`, {
        method: 'POST',
        body: JSON.stringify({
            user_name,
            email_address,
            phone_number,
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
        document.location.replace('/card');
        console.log(response);
      }
      else {
        alert('Failed to add info');
      }
    }
    catch (error) {
      console.log('Error: ' + error);
    }
  }
}
    
document
  .querySelector('#inputs-section')
  .addEventListener('submit', newFormHandler);
