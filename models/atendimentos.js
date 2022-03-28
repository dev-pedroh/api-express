//importando o módulo conexao, para poder conectar com o banco de dados
const conexao = require('../infraestrutura/conexao')

class Atendimento {
    //criando um método que recebe os dados do atendimento
    adiciona(atendimento){
        const sql = 'INSERT INTO Atendimentos SET ?'

        conexao.query(sql, atendimento, (erro, resultados) => {

            if(erro){
                console.log(erro)
            } else {
                console.log(resultados)
            }
        })
    }
}

module.exports = new Atendimento