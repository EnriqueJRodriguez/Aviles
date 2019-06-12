<?php
echo "<!DOCTYPE html><html lang=\"es\"><head><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" /> <meta charset=\"utf-8\"><link rel=\"icon\" type=\"image/ico\" href=\"./favicon.ico\" /><link rel=\"stylesheet\" href=\"style.css\"><title>Avilés</title></head><body><header><img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Escudo_de_Avil%C3%A9s.svg/1200px-Escudo_de_Avil%C3%A9s.svg.png\" alt=\"Escudo de Aviles\" /><h1>Avilés</h1></header><nav><ul><li><a href=\"index.html\">Inicio</a></li><li><a href=\"cultura.html\">Cultura</a></li></li><li><a href=\"historia.html\">Historia</a></li><li><a href=\"deporte.html\">Deporte</a></li><li><a href=\"turismo.html\">Turismo</a></li><li><a class=\"seleccion\">Foro</a></ul></nav><section><h2>Foro</h2>";
require('baseDatos.php');
	$bd = new BaseDatos();
	$bd->crearBD();
	$bd->crearTablas();
	$bd->mostrarComentarios();
echo "<div id=\"formulario\"><form action=\"/insertarDatos.php\" method=\"post\">Nombre:<br><input class=\"ipcorto\" type=\"text\" name=\"nombre\" value=\"Su Nombre\"><br>Apellidos:<br><input class=\"ipcorto\" type=\"text\" name=\"apellidos\" value=\"Sus Apellidos\"><br>Alias:<br><input class=\"ipcorto\" type=\"text\" name=\"alias\" value=\"Su Alias\"><br>Comentario:<br><textarea id=\"iplargo\" rows=\"5\" name=\"comentario\"></textarea><br><br><input id=\"comentar\"  type=\"submit\" value=\"Comentar\"></form></div>";
echo "</section><footer><p>Página realizada por Enrique José Rodríguez Martín </p><img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Copyleft.svg/1024px-Copyleft.svg.png\" alt=\"Logotipo Copyleft\" /></footer></body></html>";
?>