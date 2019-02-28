import React from 'react'
import { Segment } from 'semantic-ui-react'

const MyPokemon = (props) => {
    return(
        <Segment.Group className="UserConsole">
          <Segment compact>
            <h3 className="labels">My Pokemon</h3>
          </Segment>
  
          <Segment compact>
           {/* <PokeIcon /> */}
          </Segment>
  
        </Segment.Group>
      )
}

export default MyPokemon