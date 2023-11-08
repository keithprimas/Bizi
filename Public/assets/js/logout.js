const logout = async () => {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
    });
  
    if (response.ok) {
      document.location.replace('/login');
    }
  };
  
  document.querySelector('#logout')
  
  