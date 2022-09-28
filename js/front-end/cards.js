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
    const dados = await getLinkAlunoCurso()
    console.log(dados)
    
    const card = dados.curso.map(criarStudent)
    
    
    alunoContainer.replaceChildren(...card)
   
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