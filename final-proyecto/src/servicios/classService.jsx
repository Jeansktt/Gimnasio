const createClass = async (nombre_clase, descripcion, id_monitor, fecha) => {
  console.log({
    
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
        nombre_clase: nombre_clase,
        descripcion: descripcion,
        id_monitor: id_monitor,
        fecha: fecha,
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

export default createClass;

