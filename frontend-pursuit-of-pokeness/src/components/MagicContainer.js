import React, { Component } from 'react'
// import Profile from './Profile'
import PokeStats from './PokeStats'
import Fight from './Fight'
import CatchSuccess from './CatchSuccess'
import CatchFail from './CatchFail'

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
		// const profile = <Profile />
		// const pokeStats = <PokeStats selectedPoke={this.state.selectedPoke} />

		const fight = <Fight selectedPoke={this.state.selectedPoke} wildPoke={this.state.wildPoke} />

		// const success = <CatchSuccess wildPoke={this.state.wildPoke} />

		// const fail = <CatchFail wildPoke={this.state.wildPoke} />

		return (
			<Segment.Group className="magicCont">
				<Segment compact >
					<h3 className="labels">Magic Container</h3>
				</Segment>
				
				<Segment id="magic">
					{/* {pokeStats} */}
					{fight}
					{/* {success} */}
					{/* {fail} */}
				</Segment>
			</Segment.Group>

		)
	}
}


export default MagicContainer