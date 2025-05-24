<?php
require_once("../db/conexion.php");
require_once("../middlewares/auth.php");

class ValoracionController {

    public static function valoracion() {
        // Conectar a la base de datos
        $con = conectar();  // Usamos la función conectar() para obtener la conexión

        // Verificar token y obtener datos del usuario
        //verificarToken();  // Llamada a la función que verifica el token
        
        // Obtener los datos del cuerpo de la solicitud
        $data = json_decode(file_get_contents("php://input"), true);

        // Recibir los datos de la valoración
        $id_usuario = $data['id_usuario'] ?? ''; 
        $id_monitor = $data['id_monitor'] ?? '';  // El 'id_monitor' debe venir en el cuerpo de la solicitud
        $puntuacion = $data['puntuacion'] ?? '';
        //$fecha = $data['fecha_valoracion'] ?? '';  // La fecha de la valoración
        $comentario = $data['comentario'] ?? '';  // El comentario dejado por el usuario

        // Validar que todos los campos estén presentes
        if (empty($id_usuario) || empty($id_monitor) || empty($puntuacion) || empty($comentario)) {
            echo json_encode(['status' => 'error', 'mensaje' => 'Campos vacíos']);
            exit;
        }

        // Verificar si la conexión a la base de datos es exitosa
        if (!$con) {
            echo json_encode(['status' => 'error', 'mensaje' => 'Error de conexión a la base de datos']);
            exit();
        }

        // Preparar la consulta para insertar la valoración
        $stmt = $con->prepare("INSERT INTO valoraciones (id_usuario, id_monitor, puntuacion, comentario) 
                              VALUES (?, ?, ?, ?)");

        // Verificar si la preparación fue exitosa
        if ($stmt === false) {
            echo json_encode(['status' => 'error', 'mensaje' => 'Error al preparar la consulta']);
            exit();
        }

        // Usar bind_param para asignar los parámetros a la consulta
        $stmt->bind_param("iiis", $id_usuario, $id_monitor, $puntuacion, $comentario);

        // Ejecutar la consulta
        if ($stmt->execute()) {
            echo json_encode(['status' => 'ok', 'mensaje' => 'Valoración agregada']);
        } else {
            echo json_encode(['status' => 'error', 'mensaje' => 'Error al insertar la valoración']);
        }
    }
}
?>
