<?php
session_start();
require_once("../db/conexion.php");
header("Content-Type: application/json");

class ObtenerReservas {
    public static function verReservas() {
        $con = conectar();

        try {
            $reservas = self::selectAllReservas($con);

            echo json_encode([
                'status' => 'Success',
                'data' => [
                    'reservas' => $reservas
                ]
            ]);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode([
                'status' => 'Error',
                'message' => 'Hubo un problema al obtener las reservas: ' . $e->getMessage()
            ]);
        }
    }

    public static function selectAllReservas($mysqli) {
        $stmt = $mysqli->prepare("SELECT r.*, c.nombre_clase, u.username
            FROM usuarios_clases r
            JOIN clases c ON r.id_clases = c.id_clases
            JOIN usuarios u ON r.id_usuario = u.id_usuario");

        

        if (!$stmt) {
            throw new Exception("Error en la consulta: " . $mysqli->error);
        }

        $stmt->execute();
        $result = $stmt->get_result();

        $reservas = [];
        while ($row = $result->fetch_assoc()) {
            $reservas[] = $row;
        }

        return $reservas;
    }
}
?>
