<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="/teste" method="post">
    @csrf
        <input type="text" name="nome" id="nome" placeholder="Nome" title="Digite seu nome com letras maiúsculas em até 10 caracteres" required pattern="[A-Z][a-z]{1,10}">
        <input type="text" name="cpf" id="cpf" placeholder="CPF: ___.___.___-__" pattern="[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}">
        <button type="submit">Enviar</button>
    </form>
</body>
</html>
