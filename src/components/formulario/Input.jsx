import React, { useState } from 'react'


export default props => {
    const [valor, setValor] = useState('Inicial');
    function changeState(e) {
        setValor(e.target.value)
    }
    return (
        <div>
            <h2>{valor}</h2>
            <input class="form-control" value={valor} onChange={changeState} />
        </div>
    )
}