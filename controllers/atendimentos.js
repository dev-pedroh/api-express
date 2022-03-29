//importando a class Atendimento 
const Atendimento = require('../models/atendimentos')

//primeiro passo é exportar o módulo para comunicar com o outro arquivo index.js
module.exports = app => {
    //vamos criar uma função para a rota / do GET
    //através da rota '/' receberemos a requisição do browser pelo 'req' e responderemos pelo 'res'
    //executará nossa função, o res.send envia a resposta passada
    app.get('/atendimentos', (req, res) => {
        //passando o método lista para retornar a tabela para requisição GET
        Atendimento.lista(res)
    })
    //retorna itens específicos da tabela
    //rota + id(parametro da rota)
    app.get('/atendimentos/:id', (req, res) => {
        //convertendo o id para inteiro
        const id = parseInt(req.params.id)
        //método que busca filtrado
        Atendimento.buscaPorId(id, res)
    })
    //rota para alterar dados na tabela (PUT= altera todos os dados/PATCH = dados específicos)
    app.patch('/atendimentos/:id', (req, res) => {
        //converter o di
        const id = parseInt(req.params.id)
        const valores = req.body
        
        Atendimento.altera(id, valores, res)
    })
    //adicionando entrada do método POST como requisição
    app.post('/atendimentos', (req, res) => { 
        const atendimento = req.body
        //método que adiciona dados na tabela na requisição post
        Atendimento.adiciona(atendimento, res)
    })
    //rota para deletar itens/tabelas
    app.delete('/atendimentos/:id', (req, res) => {
        //convertendo
        const id = parseInt(req.params.id)

        Atendimento.deleta(id, res)
    })
}