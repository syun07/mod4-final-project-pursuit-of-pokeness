import React, { Component } from 'react'
import Region from '../components/Region'

import { Segment } from 'semantic-ui-react';



const WildPokemonMap = (props) => {

    return (
        <div>
            <Segment id='map'>
                <Region kantoRand={props.kantoRand} />
                <Region johtoRand={props.johtoRand} />
                <Region hoennRand={props.hoennRand} />
                <Region sinnohRand={props.sinnohRand} />
            </Segment>       

            <Segment>
                <button
                    onClick={props.renderRandomPoke}>
                    Refresh
                </button>
            </Segment>
        </div>

    )
}

export default WildPokemonMap