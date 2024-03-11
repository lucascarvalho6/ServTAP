const Sequelize = require ("sequelize")
const sequelize = new Sequelize("banco","root","",{
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate().then(function(){
    console.log("Servidor Ativo!")
}).catch(function(erro){
    console.log("Falha na conexão" + erro)
})

const agendamentos = sequelize.define("agendamentos",{
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
        type:Sequelize.STRING
    },

    cidade:{
        type:Sequelize.STRING
    },

    estado:{
        type:Sequelize.STRING
    },

    observacao:{
        type:Sequelize.STRING
    },
})

    //agendamentos.sync({force: true})

    agendamentos.create({
        nome: "Lucas Carvalho",
        endereco:"Rua ABC",
        bairro:"Jardim Robru",
        cep: 98209030,
        cidade: "São Paulo",
        estado: "SP",
        observacao: "Endereço do homem"
    })

    module.exports = { agendamentos, sequelize};




