import React, { Component } from 'react'
import MyPokemon from '../components/MyPokemon'
import MagicContainer from '../components/MagicContainer'

import { Grid } from 'semantic-ui-react';
import '../stylesheets/userConsole.css'


class UserConsole extends Component {
    constructor() {
        super();

        // this.state = {

        // }
    }

    render() {
        return (
        <Grid celled='internally'>
            <Grid.Column width={8}>
                <MyPokemon 
                    kanto={this.props.kanto}
                />
            </Grid.Column>

            <Grid.Column width={8}>
                <MagicContainer />
            </Grid.Column>
        </Grid>    
        )
    }
}

export default UserConsole