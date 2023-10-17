<?php

include 'BD.php';

error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

if($_SERVER['REQUEST_METHOD']=='GET'){
    if(isset($_GET['id_doc'])){
        $query="SELECT * from informe where id_doc=".$_GET['id_doc'];
        $resultado=metodoGet($query);
        echo json_encode($resultado->fetch(PDO::FETCH_ASSOC));
    }else{
        $query="SELECT * from informe";
        $resultado=metodoGet($query);
        echo json_encode($resultado->fetchAll()); 
    }
    header("HTTP/1.1 200 OK");
    exit();
}

if($_POST['METHOD']=='POST'){
    unset($_POST['METHOD']);
    $nom_doc=$_POST['nom_doc'];
    $nom_usu=$_POST['nom_usu'];
    $f_cargado=$_POST['f_cargado'];
    
    $query="INSERT INTO informe(id_doc,nom_doc, nom_usu,f_cargado) values (NULL,'$nom_doc', '$nom_usu', '$f_cargado')";
    $queryAutoIncrement="SELECT MAX(id_doc) as id_doc from informe";
    $resultado=metodoPost($query, $queryAutoIncrement);
    echo json_encode($resultado);
    header("HTTP/1.1 200 OK");
    exit();
}

if($_POST['METHOD']=='PUT'){
    unset($_POST['METHOD']);
    $id_doc=$_GET['id_doc'];
    $nom_doc=$_POST['nom_doc'];
    $nom_usu=$_POST['nom_usu'];
    $f_cargado=$_POST['f_cargado'];
    $query="UPDATE informe SET nom_doc='$nom_doc', nom_usu='$nom_usu', f_cargado='$f_cargado' WHERE id_doc='$id_doc'";
    $resultado=metodoPut($query);
    echo json_encode($resultado);
    header("HTTP/1.1 200 OK");
    exit();
}

if($_POST['METHOD']=='DELETE'){
    unset($_POST['METHOD']);
    $id_doc=$_GET['id_doc'];
    $query="DELETE FROM informe WHERE id_doc='$id_doc'";
    $resultado=metodoDelete($query);
    echo json_encode($resultado);
    header("HTTP/1.1 200 OK");
    exit();
}

header("HTTP/1.1 400 Bad Request");
?>