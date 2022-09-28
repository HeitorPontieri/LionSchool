'use strict'

import { getLinkCursos } from "./APi.js"

const criarButton = (varv) => {

    const a = document.createElement('a')
    const div = document.createElement('div')
    const img = document.createElement('img')
    img.src = varv.icone
    div.classList.add('div-container-button')
    a.classList.add('a-button')
    img.classList.add('img-button')
    a.textContent = varv.sigla
    a.href = './html/cards.html'
    a.classList.add('link')
    div.appendChild(img)
    div.appendChild(a)
    return div
}
const carregarButton = async () => {
    const card = document.getElementById('div-container-button')
    const dado = await getLinkCursos()
    const cardMap = dado.map(criarButton)
    card.replaceWith(...cardMap)
}

carregarButton()

document.querySelector('#div-container-button').addEventListener('click', (event) => {
   console.log(event.target.textContent)
})

