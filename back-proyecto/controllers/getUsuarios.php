<?php
require_once("../db/conexion.php");
require_once("../vendor/autoload.php");

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

// === Función para verificar el token JWT ===
function verificarToken() {
    $headers = getallheaders();
    $authHeader = $headers['Authorization'] ?? '';

    if (!$authHeader || !str_starts_with($authHeader, 'Bearer ')) {
        http_response_code(401);
        echo json_encode(['status' => 'error', 'mensaje' => 'Token no proporcionado']);
        exit();
    }

    $token = str_replace('Bearer ', '', $authHeader);

    try {
        $clave_secreta = 'gym'; // La misma clave que usaste en login
        $decoded = JWT::decode($token, new Key($clave_secreta, 'HS256'));
        return $decoded;
    } catch (Exception $e) {
        http_response_code(401);
        echo json_encode(['status' => 'error', 'mensaje' => 'Token inválido: ' . $e->getMessage()]);
        exit();
    }
}

// === Verificar el token ===
verificarToken();

// === Conectar a la base de datos ===
$con = conectar();

// === Obtener todas las clases ===
$query = $con->prepare("SELECT * FROM usuarios");
$query->execute();
$resultado = $query->get_result();

$clases = [];
while ($fila = $resultado->fetch_assoc()) {
    $clases[] = $fila;
}

echo json_encode([
    'status' => 'ok',
    'clases' => $clases
]);
?>