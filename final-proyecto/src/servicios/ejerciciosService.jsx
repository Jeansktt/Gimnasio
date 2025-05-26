const createEjercicio = async (nombre_ejercicio, descripcion_ejercicio, series, foto) => {
  console.log({
    nombre_ejercicio,
    descripcion_ejercicio,
    series,
    foto
  });

  try {
    const formData = new FormData();
    formData.append('nombre_ejercicio', nombre_ejercicio);
    formData.append('descripcion_ejercicio', descripcion_ejercicio);
    formData.append('series', series);
    formData.append('foto', foto); 

    const res = await fetch('http://localhost/linkia/Gym-Jean/back-proyecto/routes/ejercicios.php', {
      method: 'POST',
      body: formData, 
    });

    if (!res.ok) {
      const errorText = await res.text(); 
      console.error('Error del servidor:', errorText);
      throw new Error('Error al crear el ejercicio');
    }

    const body = await res.json();
    console.log('Ejercicio creado exitosamente:', body);
    return body;

  } catch (error) {
    console.error('Error de red o JS:', error);
    throw new Error(error.message || 'Error desconocido al crear el ejercicio');
  }
};


export default createEjercicio;