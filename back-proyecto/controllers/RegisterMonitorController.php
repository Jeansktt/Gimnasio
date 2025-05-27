<?php 
session_start();
require_once("../db/conexion.php");


class RegisterMonitorController{
    public static function registermonitor(){
        $con= conectar();
        

        $input = json_decode(file_get_contents("php://input"), true);
        
        $nombre=$input['nombre']?? '';
        $email=$input['email'] ?? '';
        $username= $input['username'] ?? '';
        $pass= $input['pass'] ?? '';
        
        
        if(empty($nombre) || empty($email) || empty($username)|| empty($pass)){
            echo "Rellene todos los campos";
        }else{
            $query= $con->prepare("insert into monitores(nombre,email,username, pass)values (?,?,?,?)");
            $query->bind_param("ssss", $nombre, $email, $username, $pass);
        
            if ($query->execute()) {
               echo json_encode(["succes"=> true, "message"=> "Se ha registrado correctamente"]);
            } else {
                echo json_encode(["succes"=> false, "message"=> "No se ha registrado correctamente". $query->error]);
            }
        }

    }
}


?>

