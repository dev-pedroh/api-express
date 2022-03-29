//importando lib que manipula datas
const moment = require('moment')
//importando o módulo conexao, para poder conectar com o banco de dados
const conexao = require('../infraestrutura/conexao')

class Atendimento {
    //criando um método que recebe os dados do atendimento
    adiciona(atendimento, res){
        //instanciano o construtor de data no dataCriacao
        const dataCriacao = moment().format('YYYY-MM-DD HH:mm:ss')
        //utilizando a lib moment para converter a data para o formato que desejamos
        //passamos o formato da data recebida que é padrao americano para o formato br
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')
        //adicionando verificador de data, para evitar registro invalido no banco de dados
        //a funcao .isSameOrAfter verifica se a data informada par ao moment é igual ou maior que a data passada no parametro
        const dataEhValida = moment(data).isSameOrAfter(dataCriacao)
        //adicionando validador de nome, dentro de atendimento acessamos o cliente e verificamos se o tamanho é maior ou igual a 5
        const clienteEhValido = atendimento.cliente.length >= 5
        //criando um objeto validador que comporta os tipos de erro
        const validacoes = [
            {
                nome: 'data',
                valido: dataEhValida,
                mensagem: 'Data deve ser maior ou igual a data atual'
            },
            {
                nome: 'cliente',
                valido: clienteEhValido,
                mensagem: 'Cliente deve ter pelo menos cinco caracteres'
            }

        ]
        //saber se algum item é inválido
        //retorna o campo se não for válido, pois se for válido não precisa retornar
        const erros = validacoes.filter(campo => !campo.valido)
        //saber se existem erros
        const existemErros = erros.length
        //verificacao
        if(existemErros){
            //se houver erros passa o objeto com os tipos de erros
            res.status(400).json(erros)
        } else {
            //se nao houver erros inicia o bloco
            
            //adicionando os dados obtidos no body do POST na tabela 'Atendimentos' 
            const sql = 'INSERT INTO Atendimentos SET ?'
            //criando um array e integrando tudo o que tiver dentro da tabela + a dataCriacao
            const atendimentoDatado = {...atendimento, dataCriacao, data}

            conexao.query(sql, atendimentoDatado, (erro, resultados) => {

                if(erro){
                    //alterando a forma que o erro é mostrado para o cliente
                    res.status(400).json(erro)
                } else {
                    //alterando o tipo da resposta positiva 201=Created
                    res.status(201).json(atendimento)
                }
            })
        }
    }
    //método que lista as informações da tabela atendimento
    lista(res){
        //instanciando a consulta da tabela na variavel sql
        const sql = 'SELECT * FROM Atendimentos'
        //executando módulo 
        conexao.query(sql, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        })
    }
    //método para listar somente as consultas por id
    buscaPorId(id, res){
        //instanciando consulta sql
        const sql = `SELECT * FROM Atendimentos WHERE id=${id}`
        //
        conexao.query(sql, (erro, resultados) => {
            const atendimento = resultados[0]
            if(erro){
                res.status(400).json(erro)
            }else {
                res.status(200).json(atendimento)
            }
        })
    }
    //método que atualiza valores na tabela 
    altera(id, valores, res){
        if(valores.data) {
            valores.data = moment(valores.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')
        }
        //instancia sintaxe sql na const
        const sql = 'UPDATE Atendimentos SET ? WHERE id=?'
        //como utilizamos ? na busca da tabela, para alterar passaremos os valores por array
        conexao.query(sql, [valores, id], (erro, resultados) => {
            if(erro){
                res.status(400).json(erro)
            } else {
                res.status(200).json({...valores, id})
            }
        })
    }
    deleta(id, res){
        const sql = 'DELETE FROM Atendimentos WHERE id=?'

        conexao.query(sql, id, (erro, resultados) => {
            if(erro){
                res.status(400).json(erro)
            } else {
                res.status(200).json(id)
            }
        })
    }
}   

module.exports = new Atendimento