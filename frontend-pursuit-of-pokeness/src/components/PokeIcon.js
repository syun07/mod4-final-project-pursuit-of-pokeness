import React from 'react';
import { Card } from 'semantic-ui-react'
import '../stylesheets/PokeIcon.css'

const PokeIcon = (props) => {
    const { name, front } = props.poke

    return (
        props.mainPoke === props.poke ?
            
            <Card className='main'>
                <div>
                    <img
                        alt={name}
                        src={front}
                        onClick={() => props.selectMyPoke(props.poke)}
                        /> 
                </div>
            </Card> 

            :
                
            <Card className='icon' >
                <div>
                    <img
                        alt={name}
                        src={front}
                        onClick={() => props.selectMyPoke(props.poke)}
                        /> 
                </div>
            </Card>
    )
}

export default PokeIcon