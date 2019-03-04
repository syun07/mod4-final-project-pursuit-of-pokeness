import React from 'react'
import MyPokemon from '../components/MyPokemon'
import MagicContainer from '../components/MagicContainer'

import { Grid } from 'semantic-ui-react';
import '../stylesheets/userConsole.css'


const UserConsole = (props) => {
    return (
        <Grid id='userConsole' columns='equal'>
            <Grid.Column>
                <MyPokemon 
                    myPokemonList={props.myPokemonList}
                    selectMyPoke={props.selectMyPoke} 
                    mainPoke={props.mainPoke}
                    currentUser={props.currentUser}
                    />
            </Grid.Column>

            <Grid.Column>
                <MagicContainer 
                    selectedPoke={props.selectedPoke} 
                    mainPoke={props.mainPoke}
                    wild={props.wild} 
                    renderMe={props.renderMe}
                    makeMain={props.makeMain}
                    catchPoke={props.catchPoke}
                    pokeFate={props.pokeFate}
                    />
            </Grid.Column>
        </Grid>    
    )
}

export default UserConsole