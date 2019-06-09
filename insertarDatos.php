<?php
	require('baseDatos.php');
	$bd = new BaseDatos();
	$bd->insertarDatos();
	header("Location: ./foro.php");
	die();
?> 