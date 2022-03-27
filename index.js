//importando o módulo customExpress
const customExpress = require('./config/customExpress');

//instanciando o valor de custom para app
const app = customExpress();
//criando servidor
//apos o que for 'ouvido' na porta 3000, vamos executar a função anonima
app.listen(3000, () => console.log('servidor rodando na porta 3000'));