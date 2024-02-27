const express = require ("express")
const app = express()

app.listen(8081, function(){
    console.log("Servidor Ativo!")
})

app.get("/", function (req, res){
    res.end("Seja bem-vindo ao node JS.")
})

app.get("/cadastrar/:produto", function (req, res){
    res.end(
        "Tipo de dado: " + req.params.produto + "\n" 
    )
})

app.get("/pesquisar/:produto/:modelo", function(req, res){
    res.end(
        "Qual tipo de dado? " + req.params.produto + "\n" +
        "Qual o proximo parametro? " + req.params.modelo + "\n"
    )
})

app.get("/contato/:sac/:produto", function(req, res) {
    res.end(
        "Me passe o seu: " + req.params.sac + "\n" +
        "Para comprar o seu: " + req.params.produto + "\n" 
    )     
})