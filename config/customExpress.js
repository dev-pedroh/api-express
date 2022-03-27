//importando lib express (fornece recursos mínimos para construção de servidores web)
const express = require('express');
//importando lib consign para organizar e concentrar as rotas neste app (facilitar o gerenciamento das rotas no express) 
const consign = require ('consign');

module.exports = () => {

    //executando o express
    const app = express();
    //associa todos os módulos da pasta 'controllers' para este app
    consign()
        .include('controllers')
        .into(app)

    return app

}
