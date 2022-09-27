'use strict'

const getLinkCursos =  async() =>{
    const url = 'http://localhost:8080/cursos'
    const response = await fetch (url)
    const listaCursos =  await response.json()
    return listaCursos
   
}
const getLinkAlunoCurso = async() =>{
    const url = 'http://localhost:8080/alunos/curso/:curso'
    const response = await fetch (url)
    const listaAlunos = await response.json()
    return listaAlunos
}


export  {
    getLinkCursos,
    getLinkAlunoCurso
}