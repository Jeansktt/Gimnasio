<?php
header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Headers: Authorization, Content-Type");
header("Access-Control-Allow-Methods: POST,OPTIONS");
header('Content-Type: application/json');
require_once("../controllers/getValoracion.php");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

ObtenerValoraciones::verValoraciones();
?>