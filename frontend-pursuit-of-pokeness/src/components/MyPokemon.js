import React from 'react'
import PokeIcon from './PokeIcon'

import { Segment } from 'semantic-ui-react'
import { Card, Button } from 'semantic-ui-react'


const MyPokemon = (props) => {

	const mapMyPoke = props.filteredPoke.map(poke => 
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
				<Button
					inverted color='blue'
					onClick={props.filterByRegion}
					name='all'>
					All Pokemon
				</Button>

				<Button
					inverted color='blue'
					onClick={props.filterByRegion}
					name='kanto'>
					Kanto
				</Button>

				<Button
					inverted color='blue'
					onClick={props.filterByRegion}
					name='johto'>
					Johto
				</Button>

				<Button
					inverted color='blue'
					onClick={props.filterByRegion}
					name='hoenn'>
					Hoenn
				</Button>

				<Button
					inverted color='blue'
					onClick={props.filterByRegion}
					name='sinnoh'>
					Sinnoh
				</Button>

				<br /> <br />

				<Card.Group itemsPerRow={6}>
					{mapMyPoke}
				</Card.Group>
				
			</Segment>

		</Segment.Group>
	)
}

export default MyPokemon;