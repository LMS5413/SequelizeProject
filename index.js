(async () => { 
    let produto = require('./tables/produtos.js')
    var prod = await produto.findAll()
    if(!prod) {
        console.log('Sem produto!') //Criando uma tabela
        prod = await produto.create({
            nome: 'meia',
            preco: 10
        })
    } 
    console.log(prod.map(x => `${x.nome} - R$ ${x.preco}`).join('\n')) //Agora mapeando os dados da tabela

})()


//Documentação para mais informações: https://sequelize.org/v5/index.html

