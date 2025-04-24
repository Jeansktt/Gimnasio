<?php 
require_once("conexion.php");
$con= conectar();

$input = json_decode(file_get_contents("php://input"), true);

$user= $input['user'] ?? '';
$pass= $input['pass'] ?? '';

if (empty($user) || empty($pass)) {
	echo json_encode(['status'=>'error', 'mensaje'=>'faltan campos por rellenar']);
	exit;
} else {
	// Consulta segura usando bind_param()
	$consulta = $con->prepare("SELECT * FROM monitores WHERE nombre = ? AND pass = ?");
	$consulta->bind_param("ss", $user, $pass);
	$consulta->execute();

	// Obtiene el resultado
	$resultado = $consulta->get_result();

	if ($resultado->num_rows === 1) {
		echo json_encode(['status'=>'ok', 'mensaje'=>'logueado correctamente']);

	} else {
		echo json_encode(['status'=>'error', 'mensaje'=>'usuario o contraseña incorrectos']);
	
	}

}

?>