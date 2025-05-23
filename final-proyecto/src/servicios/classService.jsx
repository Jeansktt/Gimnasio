const createClassService = async (id_clases,nombre_clase, descripcion, id_monitor, fecha) => {
  console.log({
    id_clases,
  nombre_clase,
  descripcion,
  id_monitor,
  fecha
});
  try {
    const res = await fetch('http://localhost/linkia/Gym-Jean/back-proyecto/routes/clases.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id_clases: id_clases,
        nombre_clase: nombre_clase,
        descripcion: descripcion,
        id_monitor: id_monitor,
        fecha: fecha,
      }),
    });

    // Verifica si la respuesta es exitosa
    if (!res.ok) {
      // Si la respuesta no es exitosa, lanza un error con el mensaje de la respuesta
      const errorBody = await res.json(); // Intentar analizar el cuerpo de la respuesta
      throw new Error(errorBody.message || 'Error al crear la clase.');
    }

    // Si la respuesta es exitosa, puedes hacer lo que necesites con la respuesta
    const body = await res.json();
    console.log('Clase creada exitosamente:', body);

    return body; // Puedes devolver la respuesta si es necesario

  } catch (error) {
    // Si hay un error durante la solicitud o al procesar la respuesta, muestra un error
    throw new Error(error.message || 'Error desconocido al crear la clase');
  }
};

export default createClassService;

