import React from 'react'
import produtos from '../../data/produtos'
import './TabelaProdutos.css'


export default props => {

const produtosRow = produtos.map(row => {
    return (
            <tr>
                <td>{row.id}</td>
                <td>{row.produto}</td>
                <td>R$ {row.preco.toFixed(2).replace('.',',')}</td>
            </tr>
)
})
    return(
        <div>
            <table>
                <thead>
                    <th>Id</th>
                    <th>Produto</th>
                    <th>Preço</th>
                </thead>
                <tbody>
                    {produtosRow}
                </tbody>
            </table>
        </div>
    )
}