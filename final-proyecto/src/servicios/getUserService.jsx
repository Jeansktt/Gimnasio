const userService = async (nombre, email, username, pass) => {
  
  try {
    const res = await fetch('http://localhost/linkia/Gym-Jean/back-proyecto/routes/clases.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nombre: nombre,
        email: email,
        username: username,
        pass: pass,
      }),
    });

    if (!res.ok) {
      const errorBody = await res.json(); 
      throw new Error(errorBody.message || 'Error al crear la clase.');
    }

    const body = await res.json();
    console.log('Clase creada exitosamente:', body);

    return body;

  } catch (error) {
    throw new Error(error.message || 'Error desconocido al crear la clase');
  }
};

export default userService;