<?php 
session_start();
require_once("../db/conexion.php");
header("Content-Type: application/json");
class borrarEjercicio{

    public static function eliminarejercicio() {
        $conn = conectar();
        $data = json_decode(file_get_contents("php://input"));

if (isset($data->id_ejercicio)) {
    $id = $data->id_ejercicio;
    $query = "DELETE FROM ejercicios WHERE id_ejercicio = $id";
    
    if (mysqli_query($conn, $query)) {
        echo json_encode(["status" => "Success", "message" => "Ejercicio eliminado"]);
    } else {
        echo json_encode(["status" => "Error", "message" => "Error al eliminar"]);
    }
} else {
    echo json_encode(["status" => "Error", "message" => "ID no recibido"]);
}

    }

}

?>