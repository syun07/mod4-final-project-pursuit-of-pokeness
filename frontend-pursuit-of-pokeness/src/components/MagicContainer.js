import React, { Component } from 'react'
// import Profile from './Profile'
// import PokeStats from './PokeStats'
import Fight from './Fight'
// import CatchSuccess from './CatchSuccess'
// import CatchFail from './CatchFail'

import { Segment } from 'semantic-ui-react'



class MagicContainer extends Component {
	constructor(props) {
		super(props)

		this.state = {
			selectedPoke: this.props.selectedPoke,
			wildPoke: this.props.wildPoke
		}
	}
    
	render() {
		// const pokeStats = <PokeStats selectedPoke={this.state.selectedPoke} />

		const fight = <Fight selectedPoke={this.state.selectedPoke} wildPoke={this.state.wildPoke} />

		return (
			<Segment.Group className="UserConsole">
				<Segment compact >
					<h3 className="labels">Magic Container</h3>
				</Segment>
				
				<Segment id="magic">
					{/* {pokeStats} */}
					{fight}
				</Segment>
			</Segment.Group>

		)
	}
}


export default MagicContainer