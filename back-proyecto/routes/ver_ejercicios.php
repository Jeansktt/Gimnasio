<?php 
require_once("../controllers/getEjercicio.php");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");
header('Content-Type: application/json');

ObtenerEjercicios::verEjercicios();
?>