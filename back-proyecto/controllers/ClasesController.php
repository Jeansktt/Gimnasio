<?php 
session_start();
require_once("../db/conexion.php");
require_once("../middlewares/auth.php");
class ClasesController{
    public static function clases(){
          $con= conectar();
          verificarSesion();

$input = json_decode(file_get_contents("php://input"), true);

$nombre_clase= $input['nombre_clase'] ?? '';
$descripcion= $input['descripcion'] ?? '';
$id_monitor=$input['id_monitor'] ?? '';
$fecha=$input['fecha'] ?? '';
if (empty($nombre_clase) || empty($descripcion)|| empty($id_monitor)|| empty($fecha)) {
	echo json_encode(['status'=>'error', 'mensaje'=>'faltan campos por rellenar']);
	exit;
} else {

    $query= $con->prepare("insert into clases(nombre_clase,descripcion,id_monitor, fecha)values (?,?,?,?)");
    $query->bind_param("ssis", $nombre_clase, $descripcion, $id_monitor,$fecha);
    

	if ($query->execute()) {
		echo json_encode(['status'=>'ok', 'mensaje'=>'clase guardada correctamente']);

	} else {
		echo json_encode(['status'=>'error', 'mensaje'=>'error al crear la clase']);
	
	}

}
    }
      
 
}


?>