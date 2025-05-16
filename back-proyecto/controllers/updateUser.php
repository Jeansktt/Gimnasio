<?php
session_start();
require_once("../db/conexion.php");
header("Content-Type: application/json");

class actualizarusuario{
    public static function userupdate() {
        $conn = conectar();
         $data = json_decode(file_get_contents("php://input"));

if (!isset($data->id_usuario)) {
    echo json_encode(["status" => "Error", "message" => "ID no recibido"]);
    exit;
}

$id = intval($data->id_usuario);
$updates = [];

if (isset($data->nombre)) {
    $nombre = mysqli_real_escape_string($conn, $data->nombre);
    $updates[] = "nombre = '$nombre'";
}
if (isset($data->email)) {
    $email = mysqli_real_escape_string($conn, $data->email);
    $updates[] = "email = '$email'";
}
if (isset($data->username)) {
    $username = mysqli_real_escape_string($conn, $data->username);
    $updates[] = "username = '$username'";
}
if (isset($data->pass)) {
    $pass = mysqli_real_escape_string($conn, $data->pass);
    $updates[] = "pass = '$pass'";
}

if (count($updates) === 0) {
    echo json_encode(["status" => "Error", "message" => "No se enviaron campos para actualizar"]);
    exit;
}

$setClause = implode(", ", $updates);
$query = "UPDATE usuarios SET $setClause WHERE id_usuario = $id";

if (mysqli_query($conn, $query)) {
    echo json_encode(["status" => "Success", "message" => "Usuario actualizado"]);
} else {
    echo json_encode(["status" => "Error", "message" => "Error al actualizar: " . mysqli_error($conn)]);
}
    }
   
}


?>
