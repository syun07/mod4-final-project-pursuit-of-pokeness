import React from 'react'
import PokeIcon from './PokeIcon'

import { Segment } from 'semantic-ui-react'
import { Card } from 'semantic-ui-react'


const MyPokemon = (props) => {

	const mapMyPoke = props.myPokemonList.map(poke => 
		<PokeIcon
			key={poke.id}
			poke={poke}
			selectMyPoke={props.selectMyPoke}
			mainPoke={props.mainPoke}
		/>
	)


	return(
		<Segment.Group>
		
			<Segment compact>
				<h3 className="labels">My Pokemon</h3>
			</Segment>

			<Segment compact id='myPokemon'>
				
				<Card.Group itemsPerRow={6}>
					{mapMyPoke}
				</Card.Group>
				
			</Segment>

		</Segment.Group>
	)
}


// class MyPokemon extends Component {
// 	constructor() {
// 		super();

// 		this.state = {
// 			allPokemon: [],
// 			filterKanto: [],
// 			filterJohto: [],
// 			filterHoenn: [],
// 			filterSinnoh: []
// 		}
// 	}
	
// 	render() {
// 		console.log('mypokemon working')
// 		return (
// 			<Segment.Group className="UserConsole">
// 				<Segment compact>
// 					<h3 className="labels">My Pokemon</h3>
//  			</Segment>

// 				<Segment compact className='myPokemon'>
// 					<Button
// 						inverted color='blue' >
// 						Kanto
// 					</Button>
					
// 					<br /><br />
					
// 					<Card.Group itemsPerRow={6}>
// 							{this.props.kanto}
// 					</Card.Group>
// 				</Segment>

// 			</Segment.Group>
// 		)
// 	}
// }


export default MyPokemon;