import React, { Component } from 'react'
import Region from '../components/Region'
import '../stylesheets/WildPokeMap.css';

import { Segment , Button } from 'semantic-ui-react';



const WildPokemonMap = (props) => {
    console.log('random poke', props)

    return (

            <Segment id='map'>
                <Region rand={props.kantoRand} name='kanto'/>
                <Region rand={props.johtoRand} name='johto'/>
                <Region rand={props.hoennRand} name='hoenn'/>
                <Region rand={props.sinnohRand} name='sinnoh'/>

                <Button id='refreshBtn' attached='bottom'
                    onClick={props.renderRandomPoke}>
                    Refresh
                </Button>

            </Segment>       

    )
}

export default WildPokemonMap