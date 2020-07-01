import React from 'react'
import alunos from '../../data/students'

export default props => {

const alunosLI = alunos.map(aluno => {
    return (
        <li>{aluno.id}) {aluno.nome} -> {aluno.nota}</li>
    )
})
    return(
        <div>
            <ul style={{listStyle: 'none'}}>{alunosLI}</ul>
        </div>
    )
}