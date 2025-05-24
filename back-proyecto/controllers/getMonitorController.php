<?php 
session_start();
require_once("../db/conexion.php");
header("Content-Type: application/json");

class ObtenerMonitores {
    public static function verMonitores() {
        $con = conectar();

        try {
            $monitores = self::selectAllMonitores($con); // Llamar al nuevo método

            echo json_encode([
                'status' => 'Success',
                'data' => [
                    'monitores' => $monitores
                ]
            ]);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode([
                'status' => 'Error',
                'message' => 'Hubo un problema al obtener los monitores: ' . $e->getMessage()
            ]);
        }
    }

    private static function selectAllMonitores($mysqli) {
        $stmt = $mysqli->prepare("SELECT * FROM monitores");

        if (!$stmt) {
            throw new Exception("Error en la consulta: " . $mysqli->error);
        }

        $stmt->execute();
        $result = $stmt->get_result();

        $monitores = [];
        while ($row = $result->fetch_assoc()) {
            $monitores[] = $row;
        }

        return $monitores;
    }
}


?>