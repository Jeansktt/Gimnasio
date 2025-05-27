const valoracionService = async (id_usuario, id_monitor,puntuacion, comentario) => {
  
  console.log({
  id_usuario,
  id_monitor,
  puntuacion,
  comentario
});
  try {
    const token = localStorage.getItem('token');
    console.log('token: ',token);
    const res = await fetch('http://localhost/linkia/Gym-Jean/back-proyecto/routes/valoracion.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        id_usuario: id_usuario,
        id_monitor: id_monitor,
        puntuacion: puntuacion,
        comentario: comentario
      }),
    });

    if (!res.ok) {
      const errorBody = await res.json(); 
      throw new Error(errorBody.message || 'Error al crear la valoracion.');
    }

    
    const body = await res.json();
    console.log('Valoracion creada exitosamente:', body);

    return body; 

  } catch (error) {
    
    throw new Error(error.message || 'Error desconocido al crear la valoracion');
  }
};

export default valoracionService;

