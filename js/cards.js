'use strict'

import { getLinkAlunoCurso } from "./APi.js"

const criarStudent = (varv) => {
    const a = document.createElement('a')
    const img = document.createElement('img')
    const span = document.createElement('span')
    a.classList.add('alunos-card')
    img.src = varv.foto
    span.textContent = varv.nome
    img.classList.add('card-dados')
    span.classList.add('card-dados')
    a.id = dados.matricula
    a.href = '../html/notas'

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

const criarTitle = (varv) => {

    const h1 = document.createElement('h1')

    const split = varv.curso.split('-')
    h1.textContent = split[1]

    return h1
}

const carregarAlunos = async (curso) => {
    const main = document.querySelector('main')
    const alunoContainer = document.createElement('div')
    alunoContainer.id = 'aluno-container'
    alunoContainer.classList.add('aluno-container')
    const dados = await getLinkAlunoCurso(curso)
    const card = dados.alunos.map(criarStudent)
    const titulo = criarTitle(data.alunos[0])

    alunoContainer.replaceWith(...card)
    main.appendChild(titulo)
    main.appendChild(alunoContainer)

}
carregarAlunos(localStorage.getItem('curso'))

document.getElementById('status').addEventListener('click', (event) => {
    const yellowCard = document.querySelectorAll('.yellow-card')
    const blueCard = document.querySelectorAll('.blue-card')

    if (event.target.textContent == 'Finalizado') {
        blueCard.forEach(item => {
            item.classList.add('on')
            item.classList.remove('off')

        })
        yellowCard.forEach(item => {
            item.classList.add('off')
            item.classList.remove('on')
        })
    }

    if (event.target.textContent == 'Cursando') {
        blueCard.forEach(item => {
            item.classList.add('off')
            item.classList.remove('on')

        })
        yellowCard.forEach(item => {
            item.classList.add('on')
            item.classList.remove('off')
        })
        if (event.target.textContent == 'Status') {
            blueCard.forEach(item => {
                item.classList.add('on')
                item.classList.remove('off')

            })
            yellowCard.forEach(item => {
                item.classList.add('on')
                item.classList.remove('off')
            })
            console.log(event.target)
        }
    }

})