//criando um servidor
//importando express que é uma lib
const express = require('express');

//executando o express
const app = express();

//vamos subir o servidor, listen é utilizado para escutar o que for executado na porta 3000
//apos o que for 'ouvido' na porta 3000, vamos executar a função anonima
app.listen(3000, () => console.log('servidor rodando na porta 3000'))

//apos executar o servidor no node
//vamos criar uma função para a rota / do GET
//através do '/' receberemos a requisição do browser pelo 'req' e responderemos pelo 'res'
//executará nossa função, o res.send envia a resposta passada
app.get('/atendimentos', (req, res) => res.send('Você está na rota de atendimentos e está realizando um GET'))