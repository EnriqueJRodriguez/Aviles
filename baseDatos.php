<?php
class BaseDatos {

	    protected $servername = "localhost";
		protected $username = "DBUSER2018";
		protected $password = "DBPSWD2018";
		protected $database = "comentarios";
		protected $html = "<!DOCTYPE html><html lang='es'><head><title>Página error</title><meta charset='utf-8'/><meta name='author' content='UO257565' /> <link href='style.css' rel='stylesheet' /></head><body>";
		protected $footer = "<footer><a href='https://validator.w3.org/check?uri=referer'><img src='https://www.w3.org/html/logo/badge/html5-badge-h-solo.png' alt='HTML5 Válido' title='HTML5 Válido' height='64' width='63' /></a><a href='http://jigsaw.w3.org/css-validator/check/referer'><img src=' http://jigsaw.w3.org/css-validator/images/vcss' alt='Valid CSS!' height='31' width='88' /></a></footer>";
	   
	    public function __construct() {}
	   
	    public function crearBD() {
			$db = new mysqli($this->servername,$this->username,$this->password);
						   
			if($db->connect_error) {
				exit ($this->html."<h1>ERROR de conexión:".$db->connect_error."</h1>".$this->footer."</body></html>"); 
			}
				  
			$cadenaSQL = "CREATE DATABASE IF NOT EXISTS comentarios COLLATE utf8_spanish_ci";
			if($db->query($cadenaSQL) === FALSE){
				echo "<h2>ERROR en la creación de la Base de Datos Comentarios</h2>".$this->footer."</body></html>";
				exit();
			}   
			$db->close();
	    }
	   
	    public function crearTablas() {
			$db = new mysqli($this->servername,$this->username,$this->password,$this->database);
			
			if($db->connect_error) {
				exit ($this->html."<h1>ERROR de conexión:".$db->connect_error."</h1>".$this->footer."</body></html>"); 
			}
			
			$crearTabla = "CREATE TABLE IF NOT EXISTS usuarios(
                        nombre VARCHAR(60) NOT NULL, 
                        apellidos VARCHAR(50) NOT NULL,
						alias VARCHAR(50) NOT NULL,	
                        PRIMARY KEY (alias))";         
						
           
            if($db->query($crearTabla) === FALSE){ 
			    echo $this->html."<h1>Creación de tablas</h1><h2>ERROR en la creación de la tabla usuarios:</h2>";
                echo mysqli_error($db);
                exit();
            } 

            $crearTabla = "CREATE TABLE IF NOT EXISTS foro (
                        comentario VARCHAR(250) NOT NULL, 
                        alias VARCHAR(60) NOT NULL,
						instante VARCHAR(60) NOT NULL,
                        PRIMARY KEY (alias,instante),
						FOREIGN KEY (alias) references usuarios(alias))";
            
           
            if($db->query($crearTabla) === FALSE){
                echo "<h2>ERROR en la creación de la tabla Foro:</h2>".$this->footer."</body></html>";
				echo mysqli_error($db);
                exit();
            }   
			 
			 
        $db->close();    

	   }
	   
	    public function insertarDatos() {
		    $db = new mysqli($this->servername,$this->username,$this->password,$this->database);
		   
            $this->comprobarCampos();
            $this->comprobarUsuario();

            $db = new mysqli($this->servername,$this->username,$this->password,$this->database);

            if($db->connect_error) {
					exit ($this->html."<h1>ERROR de conexión:".$db->connect_error."</h1>".$this->footer."</body></html>"); 
			}

            $consultaPre = $db->prepare("INSERT INTO foro (comentario, alias, instante) VALUES (?,?,?)");   
            
            $currentTime = new DateTime();
            $instante = $currentTime->format( 'YmdHis' );

            $consultaPre->bind_param('sss', 
                    $_POST["comentario"],$_POST["alias"], $instante);    

            $consultaPre->execute();

			if($consultaPre->affected_rows == 0) {
				echo $this->html."<h1>No ha sido posible añadir el comentario.</h1>".$this->footer."</body></html>";
			}

            $consultaPre->close();
            $db->close();
	    }
	   
       
        private function comprobarCampos(){
            $error = false;
            $text = "<h1>Se han cometido errores</h1>";
        
            if($_POST["nombre"] == '' || $_POST["apellidos"] == '' || $_POST["alias"] == ''  || $_POST["comentario"] == '' ) {
                $text = $text. "<p>Hay campos vacíos.</p>";
                $error = true;
            }
        
            $_POST["nombre"] = str_replace("\'","",$_POST["nombre"]);
            $_POST["apellidos"] = str_replace("\'","",$_POST["apellidos"]);
            $_POST["alias"] = str_replace("\'","",$_POST["alias"]);
            $_POST["comentario"] = str_replace("\'","",$_POST["comentario"]);
            
            $_POST["nombre"] = str_replace("\"","",$_POST["nombre"]);
            $_POST["apellidos"] = str_replace("\"","",$_POST["apellidos"]);
            $_POST["alias"] = str_replace("\"","",$_POST["alias"]);
            $_POST["comentario"] = str_replace("\"","",$_POST["comentario"]);

            $_POST["nombre"] = str_replace(";","",$_POST["nombre"]);
            $_POST["apellidos"] = str_replace(";","",$_POST["apellidos"]);
            $_POST["alias"] = str_replace(";","",$_POST["alias"]);
            $_POST["comentario"] = str_replace(";","",$_POST["comentario"]);
        
            if($error){
                exit ($this->html.$text."<p>Campos del formulario inválidos.</p>".$this->footer."</body></html>");
            }
        }

        private function comprobarUsuario(){
            $db = new mysqli($this->servername,$this->username,$this->password,$this->database);
            $error = false;
            $text = "<h1>Se han cometido errores</h1>";

            if($db->connect_error) {
                exit ($this->html."<h1>ERROR de conexión:".$db->connect_error."</h1>".$this->footer."</body></html>"); 
            }

            $consultaPre = $db->prepare("SELECT * FROM usuarios where alias = ?");

            $consultaPre->bind_param('s', $_POST["alias"]);    

            $consultaPre->execute();

			if($consultaPre->num_rows == 0) {
                $consultaPre->close();
				$consultaPre2 = $db->prepare("INSERT INTO usuarios (nombre, apellidos, alias) VALUES (?,?,?)");   
        
                $consultaPre2->bind_param('sss', 
                    $_POST["nombre"],$_POST["apellidos"], $_POST["alias"]);    

                $consultaPre2->execute();

			    if($consultaPre2->affected_rows == 0) {
				    echo $this->html."<h1>No ha sido posible añadir el usuario.</h1>".$this->footer."</body></html>";
			    }
			}

            $consultaPre2->close();
            $db->close();
            
        }

        function mostrarComentarios(){
            $db = new mysqli($this->servername,$this->username,$this->password,$this->database);
            $error = false;
            $text = "<h1>Se han cometido errores</h1>";

            if($db->connect_error) {
                exit ($this->html."<h1>ERROR de conexión:".$db->connect_error."</h1>".$this->footer."</body></html>"); 
            }

            $consultaPre = $db->prepare("SELECT alias,comentario FROM foro");   

            $consultaPre->execute();
            $result = $consultaPre->get_result();
            while($row = $result->fetch_assoc()) {
                    echo "<section class=\"comentario\"><h3>" . $row["alias"]. "</h3><p>" . $row["comentario"]. "</p></section>";
            }

            $consultaPre->close();
            $db->close();
        }
}