<?php 
session_start();
require_once("../db/conexion.php");
header("Content-Type: application/json");

class ObtenerClases {
    public static function verClases() {
        $con = conectar();

        try {
            $classes = self::selectAllGymClasses($con); // Llamar a método estático correctamente

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

     private static function selectAllGymClasses($mysqli) {
        //"SELECT * FROM clases ORDER BY fecha ASC"
        $stmt = $mysqli->prepare("SELECT 
                                      c.id_clases,
                                      c.nombre_clase AS nombre_clase,
                                      c.fecha,
                                      c.descripcion,
                                      m.nombre AS nombre
                                  FROM 
                                      clases c
                                  JOIN 
                                      monitores m ON c.id_monitor = m.id_monitor
                                  ORDER BY 
                                      c.fecha ASC");

        if (!$stmt) {
            throw new Exception("Error en la consulta: " . $mysqli->error);
        }

        $stmt->execute();
        $result = $stmt->get_result();

        $clases = [];
        while ($row = $result->fetch_assoc()) {
            $clases[] = $row;
        }

        return $clases;
    }
}

?>
