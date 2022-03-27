//primeiro passo é exportar o módulo para comunicar com o outro arquivo index.js
module.exports = app => {
    //vamos criar uma função para a rota / do GET
    //através da rota '/' receberemos a requisição do browser pelo 'req' e responderemos pelo 'res'
    //executará nossa função, o res.send envia a resposta passada
    app.get('/atendimentos', (req, res) => res.send('Você está na rota de atendimentos e está realizando um GET'));

}


