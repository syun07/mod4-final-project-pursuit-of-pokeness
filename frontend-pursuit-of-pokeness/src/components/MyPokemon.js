import React, { Component } from 'react'
import PokeIcon from './PokeIcon'

import { Segment } from 'semantic-ui-react'
import { Card, Button } from 'semantic-ui-react'


const MyPokemon = (props) => {
	// console.log(props)

	const mapKanto = props.kanto.map(poke =>
		<PokeIcon
			key={poke.id}
			poke={poke} />
	)
	
	const mapJohto = props.johto.map(poke =>
		<PokeIcon
			key={poke.id}
			poke={poke} />
	)
	
	const mapHoenn = props.hoenn.map(poke =>
		<PokeIcon
			key={poke.id}
			poke={poke} />
	)
	
	const mapSinnoh = props.sinnoh.map(poke =>
		<PokeIcon
			key={poke.id}
			poke={poke} />
	)

	return (
		<Segment.Group className="UserConsole">
		
			<Segment compact>
				<h3 className="labels">My Pokemon</h3>
			</Segment>

			<Segment compact className='myPokemon'>
				<Button
					inverted color='blue' >
					Kanto
				</Button>
				
				<br /><br />
				
				<Card.Group itemsPerRow={6}>
					{mapKanto}
					{mapJohto}
					{mapHoenn}
					{mapSinnoh}
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