<?php

include("conexao.php");

$lista = array();

$sql = "select * from tb_pontos";


//Por executar um comando sql
$resultado = mysqli_query($conexao,$sql);

while($produto = mysqli_fetch_assoc($resultado)){
    $lista[] = $produto;
}
 
echo json_encode($lista);

mysqli_close($conexao);
  
