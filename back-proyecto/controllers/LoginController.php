<?php 
session_start();
require_once("../db/conexion.php");
require_once("../vendor/autoload.php");

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

class LoginController {
    public static function login() {
        $con = conectar();
        $input = json_decode(file_get_contents("php://input"), true);

        
		$user = $input['user'] ?? '';
        $pass = $input['pass'] ?? '';

        if (empty($user) || empty($pass)) {
            echo json_encode(['status' => 'error', 'mensaje' => 'faltan campos por rellenar']);
            exit;
        }

        $rol = null;
        $usuario = null;

        // Buscar primero en la tabla de usuarios
        $consulta = $con->prepare("SELECT * FROM usuarios WHERE username = ? AND pass = ?");
        $consulta->bind_param("ss", $user, $pass);
        $consulta->execute();
        $resultado = $consulta->get_result();

        if ($resultado->num_rows === 1) {
            $usuario = $resultado->fetch_assoc();
            $rol = 'usuario';
        } else {
            // Si no es usuario, probar con monitores
            $consulta = $con->prepare("SELECT * FROM monitores WHERE username = ? AND pass = ?");
            $consulta->bind_param("ss", $user, $pass);
            $consulta->execute();
            $resultado = $consulta->get_result();

            if ($resultado->num_rows === 1) {
                $usuario = $resultado->fetch_assoc();
                $rol = 'monitor';
            }
        }

        if ($usuario && $rol) {
             // Definir el campo ID de acuerdo con el rol
    if ($rol === 'usuario') {
        $user_data = [
            'id_usuario' => $usuario['id_usuario'],  // Campo 'id_usuario' para el rol 'usuario'
            'nombre' => $usuario['nombre'],
            'email' => $usuario['email'],
            'username' => $usuario['username'],
            'rol' => $rol
        ];
    } elseif ($rol === 'monitor') {
        $user_data = [
            'id_monitor' => $usuario['id_monitor'],  // Campo 'id_monitor' para el rol 'monitor'
            'nombre' => $usuario['nombre'],
            'email' => $usuario['email'],
            'username' => $usuario['username'],
            'rol' => $rol
        ];
    }

    $clave_secreta = 'gym';
    $expiracion = time() + 3600;

    $payload = [
        'data' => $user_data,
        'exp' => $expiracion
    ];

            $token = JWT::encode($payload, $clave_secreta, 'HS256');

            echo json_encode([
                'status' => 'ok',
                'mensaje' => "logueado correctamente como $rol",
				'info'=>$user_data,
                'token' => $token
            ]);
        } else {
            echo json_encode(['status' => 'error', 'mensaje' => 'usuario o contraseña incorrectos']);
        }
    }
}
?>
