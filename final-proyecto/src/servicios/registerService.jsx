const registerService = async (name, email,username, password) => {
    const res = await fetch('http://localhost/linkia/Gym-Jean/back-proyecto/routes/register.php', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nombre: name,
        email: email,
        username: username,
        pass: password,
      }),
    });
    const body = await res.json();
  
    if (!res.ok) {
      throw new Error(body.message);
    }
  };
  
  export default registerService;