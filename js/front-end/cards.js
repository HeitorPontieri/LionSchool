'use strict'

import { getLinkAlunoCurso, getLinkAlunoStatus, getLinkCursos }  from "./APi.js"

const criarStudent = (varv) => {
    const a = document.createElement('a')
    const img = document.createElement('img')
    const span = document.createElement('span')
   
    a.classList.add('alunos-card')
    img.src = varv.foto
    span.textContent = varv.nome
    img.classList.add('card-dados')
    img.classList.add('img-container')
    span.classList.add('card-dados')
    span.classList.add('span-container')
    a.id = varv.matricula
    a.href = '../html/notas.html'

    if (varv.status == 'Cursando') {
        a.classList.add('blue-card')
    }
    if (varv.status == 'Finalizado') {
        a.classList.add('yellow-card')
    }
    a.appendChild(img)
    a.appendChild(span)

    return a
}

const carregarAlunos = async (curso) => {
    const main = document.querySelector('main')
    const alunoContainer = document.createElement('div')
    alunoContainer.id = 'aluno-container'

    alunoContainer.classList.add('aluno-container')
    const dados = await getLinkAlunoCurso(curso)
    
    
    const card = dados.curso.map(criarStudent)
    
    alunoContainer.replaceChildren(...card)
    main.appendChild(alunoContainer)

}

carregarAlunos(localStorage.getItem('curso'))

const carregarAlunoStatus = async (event) => {
    
    if(event.target.textContent == 'Status'){
        carregarAlunos(localStorage.getItem('curso'))
    }
    else{
        const dados = await getLinkAlunoStatus(event.target.textContent,localStorage.getItem('curso'))
        const alunoContainer = document.getElementById('alunos-container')
        const card = dados.map(criarStudent)
        alunoContainer.replaceChildren(...card)
    }
}
document.getElementById('status').addEventListener('click', carregarAlunoStatus)