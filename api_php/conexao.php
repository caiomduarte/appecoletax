<?php


$conexao = mysqli_connect('localhost','root','root','bdecoleta');

//Verificar se a conexao deu certo

if($conexao){

    //echo("Conectado com sucesso!");
} 

else {
   echo("Erro ao conectar");
}
