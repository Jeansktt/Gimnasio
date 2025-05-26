<?php 
session_start();
require_once("../db/conexion.php");
header("Content-Type: application/json");

class ObtenerEjercicios {
    public static function verEjercicios() {
        $con = conectar();

        try {
            $classes = self::selectEjercicios($con); // Llamar a método estático correctamente

            echo json_encode([
                'status' => 'Success',
                'data' => [
                    'classes' => $classes
                ]
            ]);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode([
                'status' => 'Error',
                'message' => 'Hubo un problema al obtener las clases: ' . $e->getMessage()
            ]);
        }
    }

     private static function selectEjercicios($mysqli) {
        //info de la tabla ejercicios
        $stmt = $mysqli->prepare("SELECT * FROM ejercicios");

        if (!$stmt) {
            throw new Exception("Error en la consulta: " . $mysqli->error);
        }

        $stmt->execute();
        $result = $stmt->get_result();

        $ejercicios = [];
        while ($row = $result->fetch_assoc()) {
            $ejercicios[] = $row;
        }

        return $ejercicios;
    }
}

?>
