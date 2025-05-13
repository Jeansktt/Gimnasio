<?php 
session_start();
require_once("../db/conexion.php");
header("Content-Type: application/json");
class ClasesController {
    public static function crearClase() {
        $con = conectar();

        // Leer datos del body en JSON
        $input = json_decode(file_get_contents("php://input"), true);

        // Asignar variables con fallback
        $nombre_clase = $input['nombre_clase'] ?? '';
        $descripcion = $input['descripcion'] ?? '';
        $id_monitor = $input['id_monitor'] ?? '';
        $fecha = $input['fecha'] ?? '';

        // Validación
        if (empty($nombre_clase) || empty($descripcion) || empty($id_monitor) || empty($fecha)) {
            echo json_encode(["success" => false, "message" => "Faltan campos por rellenar"]);
            exit;
        }

        // Inserción
        $query = $con->prepare("INSERT INTO clases (nombre_clase, descripcion, id_monitor, fecha) VALUES (?, ?, ?, ?)");
        $query->bind_param("ssis", $nombre_clase, $descripcion, $id_monitor, $fecha);

        if ($query->execute()) {
            echo json_encode(["success" => true, "message" => "Clase creada con éxito"]);
        } else {
            echo json_encode(["success" => false, "message" => "Error al crear clase: " . $query->error]);
        }
    }
}

?>