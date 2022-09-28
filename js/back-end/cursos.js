/*

Objetivo : Filtrar os itens para criacao de botoes usando uma function
autor : HeitorPontieri
Data : 19/09/22
Versão : 1.0

*/
var cursos = [
    {
        "nome": "001 - Técnico em Desenvolvimento de Sistemas",
        "sigla": "DS",
        "icone": "https://image.shutterstock.com/image-vector/api-interface-vector-icon-600w-659203513.jpg",
        "carga": "1200",
    },
    {
        "nome": "002 - Técnico em Redes de Computadores",
        "sigla": "RDS",
        "icone": "https://img.icons8.com/ultraviolet/344/thin-client.png",
        "carga": "1200"
    }
];

const getCurso = () => {
    let siglas = []

    cursos.forEach(item => {
        siglas.push({
            sigla: item.sigla,
            icone: item.icone
        })  
    })
    return siglas 
}
const getNomeCurso = () => {
    let nomes = []

    cursos.forEach(item =>{
        nomes.push({
            nomeCurso : item.nome
        })
    })
}


module.exports=({
    getCurso,getNomeCurso
})

exports = {
    getCurso
}