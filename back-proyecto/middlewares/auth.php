<?php 
require_once('../vendor/autoload.php');
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

function verificarToken($rolesPermitidos = []) {
    // Obtener headers de la solicitud
    $headers = getallheaders();
    $authHeader = $headers['Authorization'] ?? '';

    // Verificar si el token está presente
    if (!$authHeader || !str_starts_with($authHeader, 'Bearer ')) {
        http_response_code(401);
        echo json_encode(['status' => 'error', 'mensaje' => 'Token no proporcionado']);
        exit();
    }

    $token = str_replace('Bearer ', '', $authHeader);

    try {
        // Clave secreta para la validación del token
        $clave_secreta = 'gym';
        $decoded = JWT::decode($token, new Key($clave_secreta, 'HS256'));

        // Verificar si el rol está permitido, si se especifican roles
        if (!empty($rolesPermitidos)) {
            $rol = $decoded->rol ?? null;
            if (!in_array($rol, $rolesPermitidos)) {
                http_response_code(403);
                echo json_encode(['status' => 'error', 'mensaje' => 'No tienes permisos suficientes para acceder a este recurso']);
                exit();
            }
        }

        // Retornar los datos decodificados (usuario_id y demás datos)
        return $decoded;

    } catch (Exception $e) {
        http_response_code(401);
        echo json_encode(['status' => 'error', 'mensaje' => 'Token inválido: ' . $e->getMessage()]);
        exit();
    }
}
?>

