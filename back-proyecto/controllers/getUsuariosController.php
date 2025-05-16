<?php 
session_start();
require_once("../db/conexion.php");
header("Content-Type: application/json");

class ObtenerUsuarios {
    public static function verUsuarios() {
        $con = conectar();

        try {
            $usuarios = self::selectAllUsers($con); // Llamar al nuevo método

            echo json_encode([
                'status' => 'Success',
                'data' => [
                    'usuarios' => $usuarios
                ]
            ]);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode([
                'status' => 'Error',
                'message' => 'Hubo un problema al obtener los usuarios: ' . $e->getMessage()
            ]);
        }
    }

    private static function selectAllUsers($mysqli) {
        $stmt = $mysqli->prepare("SELECT * FROM usuarios");

        if (!$stmt) {
            throw new Exception("Error en la consulta: " . $mysqli->error);
        }

        $stmt->execute();
        $result = $stmt->get_result();

        $usuarios = [];
        while ($row = $result->fetch_assoc()) {
            $usuarios[] = $row;
        }

        return $usuarios;
    }
}


?>
