'use strict'

import cursos, { getCurso } from "./cursos"

const criarButton = (varv)=>{
    
    const a = document.createElement('a')
    const div = document.createElement('div')
    const img =  document.createElement('img')
    img.src = varv.icone
    div.classList.add('div-container-button')
    a.textContent = varv.sigla
    a.href = './html/cards.html'
    a.classList.add('link')
    
    
    div.appendChild(a)
    return div
}
const carregarCard = async () =>{
    const card = document.getElementById('div-container-button')
    const dado = await getCurso()

    const cardMap = dado.
    card.replaceChild(...cardMap)
}
carregarCard()

document.querySelector('#div-container-button').addEventListener('click', (event)=>{
    localStorage.setItem('curso', event.target.textContent)
})

