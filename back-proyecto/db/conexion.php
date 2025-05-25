<?php
//datos para conectarnos a la bbdd
$host="localhost";
$user="root";
$pass="";
$db_name="gimnasio2";

//funcion para conectarnos a la bbdd donde llamamos a las credenciales para acceder a la bbdd
function conectar(){
	$con = mysqli_connect($GLOBALS["host"], $GLOBALS["user"], $GLOBALS["pass"])or die("Error al conectar con la base de datos");
	crear_bdd($con);
	mysqli_select_db($con, $GLOBALS["db_name"]);
	crear_tabla_usuarios($con);
	crear_tabla_monitores($con);
	crear_tabla_clases($con);
	crear_tabla_valoraciones($con);
	crear_tabla_usuarios_clases($con);
	tabla_ejercicios($con);

	
	return $con;

}
//creamos la bbdd
function crear_bdd($con){
	mysqli_query($con, "create database if not exists gimnasio;");
}

//tabla de usuarios
function crear_tabla_usuarios($con){
	mysqli_query($con, "CREATE TABLE IF NOT EXISTS usuarios(id_usuario int primary key auto_increment, nombre varchar(100),email varchar(100), username varchar(100), pass varchar(100));");
	
}
//tabla monitor
function crear_tabla_monitores($con){
	mysqli_query($con, "CREATE TABLE IF NOT EXISTS monitores(id_monitor int primary key auto_increment, nombre varchar(100),email varchar(100), username varchar(100), pass varchar(100));");
	
}
//tabla clases
function crear_tabla_clases($con){
	mysqli_query($con, "CREATE TABLE IF NOT EXISTS clases(id_clases int primary key auto_increment, nombre_clase varchar(100), descripcion TEXT, id_monitor int,foreign key(id_monitor)references monitores(id_monitor),fecha DATE);");
	
}
//tabla valoraciones
function crear_tabla_valoraciones($con){
	mysqli_query($con, "CREATE TABLE IF NOT EXISTS valoraciones(id_valoracion int primary key auto_increment, id_usuario int, id_monitor int,puntuacion int check(puntuacion between 1 and 5),
	fecha_valoracion DATETIME DEFAULT CURRENT_TIMESTAMP,comentario TEXT, foreign key (id_usuario) references usuarios(id_usuario), foreign key (id_monitor)references monitores(id_monitor));");
	
}

// tabla intermedia: usuarios_clases
function crear_tabla_usuarios_clases($con) {
	mysqli_query($con, "CREATE TABLE IF NOT EXISTS usuarios_clases (
			id_usuario INT,
			id_clases INT,
			fecha_inscripcion DATETIME DEFAULT CURRENT_TIMESTAMP,
			PRIMARY KEY(id_usuario, id_clases),
			FOREIGN KEY(id_usuario) REFERENCES usuarios(id_usuario),
			FOREIGN KEY(id_clases) REFERENCES clases(id_clases)
		);
	");
}


// tabla ejercicios
function tabla_ejercicios($con) {
	mysqli_query($con, "
		CREATE TABLE IF NOT EXISTS ejercicios (
			id_ejercicio INT AUTO_INCREMENT PRIMARY KEY,
			nombre_ejercicio VARCHAR(100) NOT NULL,
			descripcion_ejercicio VARCHAR(100),
			series VARCHAR(50),
			foto VARCHAR(255)
		);
	");
}


// Solo para probar desde Postman o navegador
/*if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $con = conectar();
    if ($con) {
		//mensaje que devuelve postman tanto si funciona como si no funcion
        echo "Conexión exitosa y tabla creada.";
    } else {
        echo "Error en la conexión.";
    }
}
*/


?>