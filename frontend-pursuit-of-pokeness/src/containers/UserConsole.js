import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react';
import '../stylesheets/userConsole.css'
import MyPokemon from '../components/MyPokemon'
import MagicContainer from '../components/MagicContainer'

class UserConsole extends Component {
    constructor() {
        super()

        // this.state = {

        // }
    }

    render() {
        return (
            <Grid celled='internally'>
                <Grid.Column width={8}>
                    <MyPokemon />
                </Grid.Column>

                <Grid.Column width={8}>
                    <MagicContainer />
                </Grid.Column>
            </Grid>    
        )
    }
}

export default UserConsole