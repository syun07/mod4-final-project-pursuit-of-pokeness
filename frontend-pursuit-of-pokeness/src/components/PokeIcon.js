import React from 'react';
import { Card } from 'semantic-ui-react'
import '../stylesheets/PokeIcon.css'

const PokeIcon = (props) => {
    // console.log(props)

    const { name, front } = props.poke

    return (
        <Card
            className='icon' >
            <div>
                <img
                    alt={name}
                    src={front} /> 
                <h4>{name}</h4>
            </div>
            
        </Card>
    )
}

export default PokeIcon