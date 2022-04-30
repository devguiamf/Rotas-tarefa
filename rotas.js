const express = require('express')
const rotas = express.Router()

// array chave x valor 

const cursosInfo = [
    {'curso':'Css', 'info':'Curso Introdutório de Css'},
    {'curso':'Javascript', 'info':'Curso Básico de Javascript'},
    {'curso':'NodeJs', 'info':'Curso de NodeJs'},
    {'curso':'Excel', 'info':'Curso Básico de Excel'},
    {'curso':'React', 'info':'Curso de React Avançado e Prático'}
]

rotas.get('/', (req, res) => {
    res.json({ola:'Seja bem vindo!'})
})

rotas.get('/:cursoid', (req, res) => {
    const curso = req.params.cursoid
    const cursoI = cursosInfo.find(i => i.curso == curso)
    if(!cursoI){
        res.status(404).json(
            {erro: 'Curso não encontrado!', cursoPesquisado:curso}
        )
    } else {
        res.status(200).json(cursoI)
    }
})

module.exports = rotas
