<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST");
    header("Access-Control-Allow-Headers: Content-Type");
 include 'BD.php';
if($_SERVER['REQUEST_METHOD']=='GET'){
    if(isset($_GET['id'])){
        $iduser=$_GET['id'];
        $query="SELECT * from horario2 where id_B='$iduser'";
        $resultado=metodoGet($query);
        echo json_encode($resultado->fetch(PDO::FETCH_ASSOC));
    }else{
        $query="SELECT * from horario2";
        $resultado=metodoGet($query);
        echo json_encode($resultado->fetchAll());
    }
    header("HTTP/1.1 200 OK");
    exit();
}
if($_POST['METHOD']=='PUT'){
    unset($_POST['METHOD']);
    ////
    $iduser=$_GET['id'];
    $nota_a1=$_POST['nota_a1'];
    $nota_b1=$_POST['nota_b1'];
    $nota_c1=$_POST['nota_c1'];
    $nota_d1=$_POST['nota_d1'];
    $nota_e1=$_POST['nota_e1'];
    $nota_f1=$_POST['nota_f1'];
    $nota_g1=$_POST['nota_g1'];

    ////
    $query="UPDATE horario2 SET nota_a1='$nota_a1',nota_b1='$nota_b1',nota_c1='$nota_c1',nota_d1='$nota_d1',
    nota_e1='$nota_e1',nota_f1='$nota_f1',nota_g1='$nota_g1' where idBec='$iduser'";
    $resultado=metodoPut($query);
    echo json_encode($resultado);
    header("HTTP/1.1 200 OK");
    exit();
}
?>