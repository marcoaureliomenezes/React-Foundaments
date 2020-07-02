import React from 'react'
import DiretaFilho from './DiretaFilho'

export default props => {
    return (
        <div>
            <DiretaFilho name='Marco' age={28} smokes={true}></DiretaFilho>
            <DiretaFilho name='Arthur' age={18} smokes={false}></DiretaFilho>

        </div>
    )
}