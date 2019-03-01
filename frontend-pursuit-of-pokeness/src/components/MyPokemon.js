import React from 'react'
import PokeIcon from './PokeIcon'

import { Segment } from 'semantic-ui-react'
import { Card } from 'semantic-ui-react'


const MyPokemon = (props) => {

	// console.log(props)
	
	const mapPokemon = props.kanto.map(poke =>
		<PokeIcon
			key={poke.id}
			poke={poke} />
		)

	return(
		<Segment.Group className="UserConsole">
		
			<Segment compact>
				<h3 className="labels">My Pokemon</h3>
			</Segment>

			<Segment compact className='myPokemon'>
				<Card.Group itemsPerRow={6}>
					{mapPokemon}
				</Card.Group>
			</Segment>

		</Segment.Group>
	)
}

export default MyPokemon