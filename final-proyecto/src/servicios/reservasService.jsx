const reservarClase = async ({ id_usuario, id_clases }) => {
  try {
    const res = await fetch('http://localhost/linkia/Gym-Jean/back-proyecto/routes/Reservas.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id_usuario, id_clases }),
    });

    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error('Error al reservar la clase');
  }
};

export default reservarClase;
