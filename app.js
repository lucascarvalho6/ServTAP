const express = require ("express")
const app = express()
const handlebars = require("express-handlebars").engine

app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist'));

app.engine("handlebars", handlebars({defaultLayout: "main"}))
app.set("view engine", "handlebars")

app.get("/", function (req,res){
    res.render("index")
})

app.listen("8081", function(){
    console.log ("Servidor ativo!")
})
    