'use strict'

const getLinkCursos =  async() =>{
    const url = 'http://localhost:8080/cursos'
    const response = await fetch (url)
    const listaCursos = response.json()
    return listaCursos
   
}

exports ={
    getLinkCursos
}