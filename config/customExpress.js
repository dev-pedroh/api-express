//lib express (fornece recursos mínimos para construção de servidores web)
const express = require('express')
//lib consign = organiza as rotas neste app (facilitar o gerenciamento das rotas no express) 
const consign = require('consign')


module.exports = () => {

    //instanciando o express
    const app = express()
    //indicando o tipo da requisição a ser convertido {extended: true} usado somente para o urleconded
    app.use(express.urlencoded({extended: true}))
    //adicionando conversão json
    app.use(express.json())
    //associa todos os módulos da pasta 'controllers' para este app
    consign()
        .include('controllers')
        .into(app)

    return app
}
