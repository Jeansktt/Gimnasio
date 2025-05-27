<?php
session_start();
require_once("../db/conexion.php");

class RerservasController{
    public static function reservar(){
        $con= conectar();
    

        $input = json_decode(file_get_contents("php://input"), true);

        $id_usuario=$input['id_usuario']?? '';
        $id_clases=$input['id_clases'] ?? '';


        if(empty($id_usuario) || empty($id_clases)){
            echo "Rellene todos los campos";
        }else{
            $query= $con->prepare("INSERT INTO usuarios_clases (id_usuario, id_clases) VALUES (?, ?)");
            $query->bind_param("ii", $id_usuario, $id_clases);
        
            if ($query->execute()) {
               echo json_encode(["succes"=> true, "message"=> "Se ha registrado correctamente"]);
            } else {
                echo json_encode(["succes"=> false, "message"=> "No se ha registrado correctamente". $query->error]);
            }
        }
    }
}


