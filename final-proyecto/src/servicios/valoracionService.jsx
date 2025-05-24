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

    // Verifica si la respuesta es exitosa
    if (!res.ok) {
      // Si la respuesta no es exitosa, lanza un error con el mensaje de la respuesta
      const errorBody = await res.json(); // Intentar analizar el cuerpo de la respuesta
      throw new Error(errorBody.message || 'Error al crear la valoracion.');
    }

    // Si la respuesta es exitosa, puedes hacer lo que necesites con la respuesta
    const body = await res.json();
    console.log('Valoracion creada exitosamente:', body);

    return body; // Puedes devolver la respuesta si es necesario

  } catch (error) {
    // Si hay un error durante la solicitud o al procesar la respuesta, muestra un error
    throw new Error(error.message || 'Error desconocido al crear la valoracion');
  }
};

export default valoracionService;

