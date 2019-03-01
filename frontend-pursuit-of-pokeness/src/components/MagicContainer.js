import React, { Component } from 'react'
import Profile from './Profile'
import PokeStats from './PokeStats'
import Fight from './Fight'
import CatchSuccess from './CatchSuccess'
import CatchFail from './CatchFail'

import { Segment } from 'semantic-ui-react'


class MagicContainer extends Component {
    
	render() {
		return (
			<Segment.Group className="UserConsole">
				<Segment compact >
					<h3 className="labels">Magic Container</h3>
				</Segment>
				
				<Segment id="magic">
					hi
				</Segment>
			</Segment.Group>

		)
	}
}


export default MagicContainer