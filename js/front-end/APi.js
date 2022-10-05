'use strict'

const getLinkCursos = async () => {
    const url = 'http://localhost:8080/cursos'
    const response = await fetch(url)
    const listaCursos = await response.json()
    return listaCursos

}
const getLinkAlunoCurso = async (sigla) => {
    //  link certo
    const url = `http://localhost:8080/alunos/curso/${sigla}`

    // Link pra conseguir fazer os cards
    //const url = `http://localhost:8080/alunos/curso/RDS`
    const response = await fetch(url)
    const listaAlunos = await response.json()
    return listaAlunos
}

const getLinkAlunoStatus = async (status) => {
    // const url =`http://localhost:8080/alunos/status/${status}`
    const url =`http://localhost:8080/alunos/status/Cursando`
    const response = await fetch(url)
    const alunosStatus = response.json
    return alunosStatus
}

const getLinkAlunoMatérias = async (matricula) =>{
    const url = `http://localhost:8080/alunos/disciplina/matricula/${matricula}`
    const response = await fetch(url)
    const materiasStatus = response.json
    return materiasStatus
}
const getLinkAlunoMatricula = async (matricula) => {
    const url = `http://localhost:8080/alunos/${matricula}`
    const response = await fetch(url)
    const matriculasStatus = response.json
    return matriculasStatus
}

export {
    getLinkCursos,
    getLinkAlunoCurso,
    getLinkAlunoStatus,
    getLinkAlunoMatérias,
    getLinkAlunoMatricula 
}