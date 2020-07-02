import React from 'react'

export default props => {
    const cb = props.info;
    const min = 18, max = 79;
    const ageGenerate = () => parseInt(Math.random() * (max - min) + min) 
    const nerdGenerate = () => Math.random() > 0.5;
    return (
        <div>
            <div>Filho</div>
            <button class="btn btn-success"
                    onClick={(e) => cb('Marcio', ageGenerate(), nerdGenerate())}>
                Provide information</button>
        </div>
    )
}