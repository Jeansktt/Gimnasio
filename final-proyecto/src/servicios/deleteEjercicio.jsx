// src/Servicios/deleteEjercicio.js

const deleteEjercicio = async (id_ejercicio) => {
  try {
    const res = await fetch('http://localhost/linkia/Gym-Jean/back-proyecto/routes/borrarEjercicio.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id_ejercicio }),
    });

    const data = await res.json();

    if (data.status !== 'Success') {
      throw new Error(data.message || 'Error al eliminar el ejercicio');
    }

    return data;
  } catch (error) {
    console.error('Error eliminando ejercicio:', error.message);
    throw error;
  }
};

export default deleteEjercicio;
