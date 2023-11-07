<?php

include './BD.php';

error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

  if($method=="POST"){
    unset($_POST['METHOD']);
    $nombre=$_POST['usuario'];
    $contraseña=$_POST['contraseña'];

    $password = md5($contraseña);
    $query1 = "SELECT * FROM usuarios WHERE nombre='$nombre' AND  contraseña='$password'";
    $run_query = mysqli_query($db, $query1);
    $user_exist = mysqli_num_rows($run_query);

    if ($user_exist == 1) {
      header("Location:Becario/bec_registro.php");
      echo'<script type="text/javascript"> alert("Tarea Guardada");</script>';

    } else {
echo'<script type="text/javascript"> alert("Tarea xxxx");</script>';
    }
  }

header("HTTP/1.1 400 Bad Request");
?>