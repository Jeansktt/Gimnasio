<?php 
session_start();
require_once("../db/conexion.php");
require_once("../vendor/autoload.php");

use Firebase\JWT\JWT;
use Firebase\JWT\Key;


class LoginMonitorController{
    public static function loginmonitor(){
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

		// Usuario encontrado, generar el token
		$usuario = $resultado->fetch_assoc();
		$user_data = [
			//'id' => $usuario['id'],  // Asumiendo que tienes un campo id en la tabla
			'nombre' => $usuario['nombre'],
			'email' => $usuario['email']
		];

		// Definir la clave secreta y la expiración del token
		$clave_secreta = 'gym';
		$expiracion = time() + 3600; // 1 hora de duración

		// Crear el payload del token
		$payload = [
			'data' => $user_data,
			'exp' => $expiracion
		];

		// Generar el token
		$token = JWT::encode($payload, $clave_secreta, 'HS256');


		echo json_encode(['status'=>'ok', 'mensaje'=>'logueado correctamente', 'token'=>$token]);

	} else {
		echo json_encode(['status'=>'error', 'mensaje'=>'usuario o contraseña incorrectos']);
	
	}

}
    }
}


?>
