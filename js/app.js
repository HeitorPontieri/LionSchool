const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const {getCurso} = require('./cursos.js')
const { request, response } = require('express')

const app = express()

app.use((request, response, next) => {

    response.header('Access-Control-Allow-Origin', '*')

    response.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE , OPTIONS')

    app.use(cors())

    next()
})
app.get('/cursos', cors(),async function(request,response, next){

    let cursos = getCurso()
    if(cursos){
        response.status(200)
        response.json(cursos)
    }
    else{
        response.status(404)
        response.json('{message : " Nenhum item encontrado"}')
    }
})
app.listen(8080, function(){
    console.log('Servidor aguardando requisições')
})