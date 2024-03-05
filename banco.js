const Sequelize = require("sequelize")
const sequelize = new Sequelize("exemplo", "root", "",{
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate().then(function(){
    console.log("Servidor Ativo!")
}).catch(function(erro){
    console.log("Falha de conexão: " + erro)
})

const Agendamentos = sequelize.define("agendamentos",{
nome:{
    type:Sequelize.STRING
},
endereco:{
    type:Sequelize.STRING
},
bairro:{
    type:Sequelize.STRING
},
cep:{
    type:Sequelize.INTEGER
},
cidade:{
    type:Sequelize.STRING
},
estado:{
    type:Sequelize.STRING
},
observacao:{
    type:Sequelize.STRING
}
})

//Agendamentos.sync({force:true})

Agendamentos.create({
    nome: "Lucas Pereira Carvalho",
    endereco : "Rua A",
    bairro: "Cidade AE Carvalho",
    cep: 12232212,
    cidade: "São Paulo",
    estado: "SP",
    observacao:"Realizar consulta de supermercado"
})

module.exports = { Agendamentos, sequelize };
