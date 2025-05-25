<?php 
require_once('../db/conexion.php');

class ejercicioController {
    public static function ejercicios() {
       /* header('Content-Type: application/json');

    // Imprime para depurar
    echo json_encode([
        'post' => $_POST,
        'files' => $_FILES
    ]);
    exit; */
        $con = conectar();

        // Verifica que los datos requeridos estén presentes
        $nombre = $_POST['nombre_ejercicio'] ?? null;
        $descripcion = $_POST['descripcion_ejercicio'] ?? null;
        $series = $_POST['series'] ?? null;

        if (!$nombre || !$descripcion || !$series) {
            http_response_code(400);
            echo json_encode(['message' => 'Faltan campos obligatorios']);
            return;
        }

        // Verificar si la imagen fue subida correctamente
        if (!isset($_FILES['foto']) || $_FILES['foto']['error'] !== UPLOAD_ERR_OK) {
            http_response_code(400);
            echo json_encode(['message' => 'Error al subir la imagen']);
            return;
        }

        // Guardar la imagen
        $fotoNombre = basename($_FILES['foto']['name']);
        $fotoTmp = $_FILES['foto']['tmp_name'];
        $uploadDir = __DIR__ . '/../uploads/';
        $destino = $uploadDir . $fotoNombre;

        // Crear carpeta si no existe
        if (!is_dir($uploadDir)) {
            mkdir($uploadDir, 0777, true);
        }

        if (!move_uploaded_file($fotoTmp, $destino)) {
            http_response_code(500);
            echo json_encode(['message' => 'No se pudo guardar la imagen en el servidor']);
            return;
        }

        // Insertar en la base de datos
        $query = "INSERT INTO ejercicios (nombre_ejercicio, descripcion_ejercicio, series, foto) VALUES (?, ?, ?, ?)";
        $stmt = mysqli_prepare($con, $query);
        mysqli_stmt_bind_param($stmt, "ssss", $nombre, $descripcion, $series, $fotoNombre);

        if (mysqli_stmt_execute($stmt)) {
            http_response_code(201);
            echo json_encode(['message' => 'Ejercicio guardado correctamente']);
        } else {
            http_response_code(500);
            echo json_encode(['message' => 'Error al guardar en la base de datos']);
        }

    }
}
?>