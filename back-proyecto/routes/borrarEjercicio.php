<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Incluir el controlador de Login
require_once("../controllers/deleteEjercicio.php");

// Llamar a la función del controlador para procesar
borrarEjercicio::eliminarejercicio();
?>
