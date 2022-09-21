/*

Objetivo : Criar uma API e seus respectivos EndPoints 
autor : HeitorPontieri
Data : 19/09/22
Versão : 1.0

*/

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const {getCurso} = require('./cursos.js')
const {getAlunos, getAlunoByMatricula} = require('./alunos.js')
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

app.get('/alunos', cors(),async function(request,response, next){

    let alunos = getAlunos()
    if(alunos){
        response.status(200)
        response.json(alunos)
    }
    else{
        response.status(404)
        response.json('{message : " Nenhum item encontrado"}')
    }
})
app.get('/alunos/:matricula', cors(),async function(request,response, next){

    let matriculaAluno = request.params.matricula
    let matricula = getAlunoByMatricula(matriculaAluno)

    if(matricula){
        response.status(200)
        response.json(matricula)
    }
    else{
        response.status(404)
        response.json('{message : " Nenhum item encontrado"}')
    }
})
app.listen(8080, function(){
    console.log('Servidor aguardando requisições')
})