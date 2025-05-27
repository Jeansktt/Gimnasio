const userMonitor= async (id_monitor,nombre, username) => {
  
  try {
    const res = await fetch('http://localhost/linkia/Gym-Jean/back-proyecto/routes/monitores.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id_monitor:id_monitor,
        nombre: nombre,
        username: username,
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

export default userMonitor;