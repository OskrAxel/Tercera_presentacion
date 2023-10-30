<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST");

$host = "localhost";
$user = "root";
$contraseña = "";
$database = "bqef_2";
$conn = new mysqli($host,$user,$contraseña,$database);

if (mysqli_connect_error()) {
  echo mysqli_connect_error();
  exit();
} else {
  $eData=file_get_contents("php://input");
  $dData=json_decode($eData, true);

  $user = $dData['user'];
  $pass = $dData['pass'];
  $result = ''; 

  if ($user != "" and $pass != "") {
    $sql = "SELECT * FROM usuarios WHERE nombre='$user'";
    $res = mysqli_query($conn, $sql);
    if(mysqli_num_rows($res) != 0){
      $row = mysqli_fetch_array($res);
      if($pass != $row['contraseña']){
        $result = "Contraseña Inválida!";
      }
      else{
        $result = "Inicio de sesión exitosa! Redireccionando...";
      }
    }
    else{
      $result = "Usuario Inválido!";
    }
  }
  else{
      $result = "";
    }
    $conn -> close();
    $response[] = array("result" => $result);
    echo json_encode($response);
}
?>