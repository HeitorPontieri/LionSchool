'use strict'

import { getLinkCursos } from "./APi.js"

const criarButton = (varv) => {

    const a = document.createElement('a')
    const div = document.createElement('div')
    const img = document.createElement('img')
    const p = document.createElement('p')
    img.src = varv.icone
    div.classList.add('div-container-button')
    a.classList.add('a-button')
    img.classList.add('img-button')
    p.textContent = varv.sigla
    a.href = './html/cards.html'
    a.classList.add('link')
   
    div.appendChild(img) 
    div.appendChild(p)
    a.appendChild(div)
    return a
}
const carregarButton = async () => {
    const card = document.getElementById('div-container-button')
    const dado = await getLinkCursos()
    const cardMap = dado.map(criarButton)
    card.replaceWith(...cardMap)
}

carregarButton()

document.querySelector('.div-container-button').addEventListener('click',(event) => {
    localStorage.setItem('curso', event.target.textContent)
})

