'use strict'

const getLinkCursos =  async() =>{
    const url = 'http://localhost:8080/cursos'
    const response = await fetch (url)
    const listaCursos =  await response.json()
    return listaCursos
   
}
const getLinkAlunoCurso = async(curso) =>{
    //  link certo
    const url = `http://localhost:8080/alunos/curso/${curso}`
    
    // Link pra conseguir fazer os cards
    // const url = `http://localhost:8080/alunos/curso/RDS`
    const response = await fetch (url)
    const listaAlunos = await response.json()
    return listaAlunos
}


const getLinkAlunoStatus = async (status) => {
    const url = `http://localhost:8080/alunos/status/${status}`
    const response = await fetch (url)
    const alunosStatus = await response.json
    return alunosStatus
}

export  {
    getLinkCursos,
    getLinkAlunoCurso,
    getLinkAlunoStatus
}