<?php 
session_start();
require_once("../db/conexion.php");
header("Content-Type: application/json");

class ObtenerValoraciones {
    public static function verValoraciones() {
        $con = conectar();

        try {
            $valoraciones = self::selectAllValoraciones($con);

            echo json_encode([
                'status' => 'Success',
                'data' => [
                    'valoraciones' => $valoraciones
                ]
            ]);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode([
                'status' => 'Error',
                'message' => 'Hubo un problema al obtener las valoraciones: ' . $e->getMessage()
            ]);
        }
    }

    private static function selectAllValoraciones($mysqli) {
        $stmt = $mysqli->prepare("
        SELECT v.*, u.username 
        FROM valoraciones v
        JOIN usuarios u ON v.id_usuario = u.id_usuario
    ");

        if (!$stmt) {
            throw new Exception("Error en la consulta: " . $mysqli->error);
        }

        $stmt->execute();
        $result = $stmt->get_result();

        $valoraciones = [];
        while ($row = $result->fetch_assoc()) {
            $valoraciones[] = $row;
        }

        return $valoraciones;
    }
}
?>
