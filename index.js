//importando o módulo customExpress
const customExpress = require('./config/customExpress')
//importando o módulo conexão
const conexao = require('./infraestrutura/conexao')
//importando o módulo tabelas
const Tabelas = require('./infraestrutura/tabelas')

//executando o modulo conexao
conexao.connect(erro => {
    if(erro){
        console.log(erro)
    } else {
        console.log('conectado com sucesso')

        Tabelas.init(conexao)

        //instanciando o valor de custom para app
        const app = customExpress()
        //criando servidor
        //apos o que for 'ouvido' na porta 3000, vamos executar a função anonima
        app.listen(3000, () => console.log('servidor rodando na porta 3000'))

    }
})
