import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'

import Profile from './Profile'
import PokeStats from './PokeStats'
import Fight from './Fight'
import CatchSuccess from './CatchSuccess'
import CatchFail from './CatchFail'



class MagicContainer extends Component {
    
    render() {
        return(
          <Segment id="magic" className="UserConsole">
            <h3 className="labels">Magic Container</h3>
          </Segment>
        )
    }
    
    
}


export default MagicContainer