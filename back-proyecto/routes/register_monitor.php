<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");
header('Content-Type: application/json');

// Incluir el controlador de Login
require_once("../controllers/RegisterMonitorController.php");

// Llamar a la función del controlador para procesar el login
RegisterMonitorController::registermonitor();
?>
