import React from 'react'
import Region from '../components/Region'
import '../stylesheets/WildPokeMap.css';

import { Segment, Button } from 'semantic-ui-react';



const WildPokemonMap = (props) => {
    // console.log('random poke', props)

    return (

        <Segment id='map'>
            <Region rand={props.kantoRand} name='kanto' selectWildPoke={props.selectWildPoke}/>
            <Region rand={props.johtoRand} name='johto' selectWildPoke={props.selectWildPoke}/>
            <Region rand={props.hoennRand} name='hoenn' selectWildPoke={props.selectWildPoke}/>
            <Region rand={props.sinnohRand} name='sinnoh' selectWildPoke={props.selectWildPoke}/>

            <Button
                id='refreshBtn'
                color='orange'
                onClick={props.renderRandomPoke}>
                Refresh
            </Button>

        </Segment>       

    )
}

export default WildPokemonMap