import React, { useState } from 'react'
import IndiretaFilho from './IndiretaFilho'

export default props => {
    let [name, setName] = useState('?');
    let [age, setAge] = useState(0);
    let [nerd, setNerd] = useState(false);
    function provideInformation(name, age, nerd) {
        setName(name);
        setAge(age);
        setNerd(nerd);
    }
    return (
        <div>
            <div>
                <p>Father: {name} </p>
                <p><strong>Age: {age} </strong></p>
                <p>Nerd? {nerd ? 'Yes': 'No'}</p>
            </div>
            <IndiretaFilho info={ provideInformation } />
        </div>
    )
}