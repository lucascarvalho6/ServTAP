const express = require ("express")

const {agendamentos} = require ("./banco.js")

const app = express()

app.listen(8081, function(){
    console.log("Servidor Ativo!")
})

app.get("/", function(req,res){
    res.end ("Seja bem-vindo ao Node")
})

app.get("/cadastrar/:nome/:endereco/:bairro/:cep/:cidade/:estado/:observacao", function(req,res){
    agendamentos.create({
        nome: req.params.nome,
        endereco: req.params.endereco,
        bairro: req.params.bairro,
        cep: req.params.cep,
        cidade: req.params.cidade,
        estado: req.params.estado,
        observacao: req.params.observacao
    })

    res.send('Agendamento concluído')
})