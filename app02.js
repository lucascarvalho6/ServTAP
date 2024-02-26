const express = require ("express")
const app = express()

app.listen(8081, function(){
    console.log("Servidor Ativo!")
})

app.get("/", function (req, res){
    res.end("Seja bem-vindo ao node JS.")
})

app.get("/cadastrar/:item/:produto", function (req, res){
    res.end(
        "Tipo de dado: " + req.params.item + "\n" +
        "Tipo de item: " + req.params.produto
    )
})

app.get("/visualizar/:carro/:fusca/:azul", function(req, res){
    res.end(
        "Qual o automovel? " + req.params.carro + "\n" +
        "Qual o carro? " + req.params.fusca + "\n" +
        "Qual a cor do carro? " + req.params.azul + "\n" +
        "!!!!!!!!!!!!!!!!!!!!!!!!!!!"
    )
})
