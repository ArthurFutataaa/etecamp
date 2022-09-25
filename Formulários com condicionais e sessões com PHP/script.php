<?php
session_start();
error_reporting(0);

$categorias = [];
$categorias[] = 'infantil';
$categorias[] = 'adolescente';
$categorias[] = 'adulto';
$categorias[] = 'idoso';

$nome = $_POST['nome'];
$idade = $_POST['idade'];

//nome não pode ser vazio

if(empty($nome))
{
    $_SESSION['mensagem-de-erro']    = 'o nome não pode ser vazio, por favor preencha-o novamente';
    header( string:'location: index.php');
    return;
}

// definir quantas caracteres minimos o nome deve ter
else if(strlen($nome) < 3)
{
    $_SESSION['mensagem-de-erro']    = 'o nome não pode conter menos que 3 caracteres';
    header( string:'location: index.php');
    return;
}

// definir o maximo de caracteres o nome deve ter
else if(strlen($nome) > 40)
{
    $_SESSION['mensagem-de-erro']    = 'o nome não pode conter mais que 40 caracteres';
    header( string:'location: index.php');
    return;
}

//campo idade tem que ser numérico
//exclamação negação
else if(!is_numeric($idade))
{
    $_SESSION['mensagem-de-erro']    = 'informe um número para idade';
    header( string: 'location: index.php');
    return;
}

//processo
if($idade >= 6 && $idade <= 12)
{
    for($i = 0; $i <= count($categorias); $i++)
    {
        if($categorias[$i] == 'infantil')
        {
        $_SESSION['mensagem-de-sucesso'] "O nadador " .$nome. " compete na categoria " .$categorias[$i];
        header( string: "location: index.php");
        return
        }
    }
}
else if($idade >= 13 && $idade <= 18)
{
    for($i = 0; $i <= count ($categorias); $i++)
    {
        if($categorias[$i] == 'adolescente')
        {
            $_SESSION['mensagem-de-sucesso']"O nadador " .$nome. " compete na categoria adolescente";
            header( string: "location: index.php");
            return;
        }
    }
} 
else
{
    for($i = 0; $i <= count($categorias); $i++)
    {
        if($categorias[$i] == 'adulto')
        {
            $_SESSION['mensagem-de-sucesso']"O nadador " .$nome. " compete na categoria adulto";
            header( string: "location: index.php");
            return;
        }
    }
}
?>
