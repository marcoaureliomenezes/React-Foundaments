import React from 'react'
import If, { Else } from './If'

export default props => {
    const usuario = props.usuario;
    return (
        <div>
            <If test={usuario && usuario.nome}>
                <p>Seja bem vindo <strong>{ usuario.nome }</strong>!</p>
                <Else test={!usuario || usuario.nome}>
                    <p>Seja bem vindo <strong>fera</strong>!</p>
                </Else>
            </If>
        </div>
    )
}