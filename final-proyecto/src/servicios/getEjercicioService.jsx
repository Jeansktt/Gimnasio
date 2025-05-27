const getEjercicios = async () => {
  try {
    const response = await fetch('http://localhost/linkia/Gym-Jean/back-proyecto/routes/ver_ejercicios.php');

    if (!response.ok) {
      throw new Error('Error al obtener los ejercicios');
    }

    const data = await response.json();

    if (data.status !== 'Success') {
      throw new Error(data.message || 'No se pudo obtener la lista de ejercicios');
    }

    return data.data.ejercicio; 
  } catch (error) {
    console.error('Error en getEjercicios:', error.message);
    throw error;
  }
};

export default getEjercicios;
