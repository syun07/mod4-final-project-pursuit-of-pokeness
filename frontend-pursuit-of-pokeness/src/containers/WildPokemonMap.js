import React, { Component } from 'react'
import Region from '../components/Region'

import { Segment, Button } from 'semantic-ui-react';



const WildPokemonMap = (props) => {
    return (
        <Segment id='map'>
            <Region kantoRand={props.kantoRand} />
            <Region johtoRand={props.johtoRand} />
            <Region hoennRand={props.hoennRand} />
            <Region sinnohRand={props.sinnohRand} />
        </Segment>  
    )
}

export default WildPokemonMap