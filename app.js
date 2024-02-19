/*console.log("mensagem de texto!!")

var n1 = 10
var n2 = 20 
var total = n1 + n2
    console.log( "Total da soma é = " + total )
var sub = total - 6
    console.log( " Total - 6 = "  + sub )
var div = sub / 3
    console.log( " Dividido por 3 = "  + div )
var mult = div / 4
    console.log( " Vezes 4 = "  + mult )
        if( mult > 7 ){
            console.log( "Número grande emm" )
        } else{
            console.log ( "Numero pequeno ...." )
        }

var soma = require ( './soma.js' )
    console.log ("Soma = " + soma(17,18))
var subt = require ( './subtracao.js' )
        console.log ( "Subtraindo = " + subt (5,10) )*/

var http = require('http')

http.createServer( function ( req, res ) {
    res.end ( "Mensagem não direcionada" )
} ). listen (8081)

console.log ( "Servidor não ativo!!" )