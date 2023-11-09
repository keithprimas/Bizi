const logout = async () => {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
    });
  
    if (response.ok) {
      document.user_location.replace('/login');
    }
  };
  
  document.querySelector('#logout')
  
  