//instando o mysql lib e criando a conexão com o banco de dados através do módulo
const mysql = require('mysql');

//instanciando o mysql modulo e dentro da função createConnection, ele espera um objeto com as configurações que precisamos para colocar na conexão
const conexao = mysql.createConnection({
    //criando o objeto com as informações para autenticação e endereço do database
     host: 'localhost',
     port: 3306,
     user: 'root',
     password: 'admin',
     database: 'agenda-petshop'
})

//exportando módulo, para que outros módulos e outros arquivos tenham acesso a este modulo e possam se conectar ao banco de dados
module.exports = conexao;