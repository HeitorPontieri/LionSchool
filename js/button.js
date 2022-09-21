'use strict'

import { getCurso } from "./cursos"

const criarButton = ()=>{
    
    const a = document.createElement('a')
    const div = document.createElement('div')
    div.classList.add('div-a-container')
    
    
    a.appendChild(div)
}


exports={
    criarButton
}
