//lib express (fornece recursos mínimos para construção de servidores web)
const express = require('express');
//lib consign = organiza as rotas neste app (facilitar o gerenciamento das rotas no express) 
const consign = require ('consign');
//lib body-parser (converte o body da requisição para outros formatos (exemplo: json))
const bodyParser = require('body-parser');


module.exports = () => {

    //instanciando o express
    const app = express();
    //indicando o tipo da requisição a ser convertido {extended: true} usado somente para o urleconded
    app.use(bodyParser.urlencoded({extended: true}));
    //adicionando conversão json
    app.use(bodyParser.json());
    //associa todos os módulos da pasta 'controllers' para este app
    consign()
        .include('controllers')
        .into(app)

    return app

}
