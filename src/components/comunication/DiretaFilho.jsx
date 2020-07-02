import React from 'react'

export default props => {
    return (
        <div>
            <p>Name: {props.name} </p>
            <ul>
                <li><strong>Age: {props.age} </strong></li>
                <li>Does he smoke? {props.smokes ? 'Yes' : 'No'}</li>
            </ul>
        </div>
    )
}