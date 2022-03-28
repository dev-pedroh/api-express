//importando lib que manipula datas
const moment = require('moment')
//importando o módulo conexao, para poder conectar com o banco de dados
const conexao = require('../infraestrutura/conexao')

class Atendimento {
    //criando um método que recebe os dados do atendimento
    adiciona(atendimento){
        //instanciano o construtor de data no dataCriacao
        const dataCriacao = moment().format('YYYY-MM-DD HH:mm:ss')
        //utilizando a lib moment para converter a data para o formato que desejamos
        //passamos o formato da data recebida que é padrao americano para o formato br
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')
        //adicionando os dados obtidos no body do POST na tabela 'Atendimentos' 
        const sql = 'INSERT INTO Atendimentos SET ?'
        //criando um array e integrando tudo o que tiver dentro da tabela + a dataCriacao
        const atendimentoDatado = {...atendimento, dataCriacao, data}

        conexao.query(sql, atendimentoDatado, (erro, resultados) => {

            if(erro){
                console.log(erro)
            } else {
                console.log(resultados)
            }
        })
    }
}

module.exports = new Atendimento