<?php 
session_start();
require_once("../db/conexion.php");
header("Content-Type: application/json");
class borrarusuarios{

    public static function eliminarusuarios() {
        $conn = conectar();
        $data = json_decode(file_get_contents("php://input"));

if (isset($data->id_usuario)) {
    $id = $data->id_usuario;
    $query = "DELETE FROM usuarios WHERE id_usuario = $id";
    
    if (mysqli_query($conn, $query)) {
        echo json_encode(["status" => "Success", "message" => "Usuario eliminado"]);
    } else {
        echo json_encode(["status" => "Error", "message" => "Error al eliminar"]);
    }
} else {
    echo json_encode(["status" => "Error", "message" => "ID no recibido"]);
}

    }

}

?>