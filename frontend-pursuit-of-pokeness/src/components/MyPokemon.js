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
				<h3 className="labels">{props.currentUser.name}'s Pokemon</h3>
			</Segment>

			<Segment compact id='myPokemon'>
				
				<Card.Group itemsPerRow={6}>
					{mapMyPoke}
				</Card.Group>
				
			</Segment>

		</Segment.Group>
	)
}

export default MyPokemon;