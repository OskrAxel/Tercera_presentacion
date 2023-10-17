<?php
require_once 'BD.php';
$id = $_GET['id_doc'];
$datos = datos($db, $id);

$nom_usu = $datos['nom_usu'];
$nom_usu = $datos['nom_doc'];
$archivo = $datos['archivo'];
header("Content-Disposition:inline;filename=$nom_usu.$nom_usu");
echo $archivo;
?>