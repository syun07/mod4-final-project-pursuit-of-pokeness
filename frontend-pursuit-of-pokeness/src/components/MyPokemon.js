import React from 'react'
import PokeIcon from './PokeIcon'

import { Segment } from 'semantic-ui-react'
import { Card, Button } from 'semantic-ui-react'
import '../stylesheets/userConsole.css'


const MyPokemon = (props) => {

	const mapMyPoke = props.filteredPoke.map((poke, index) => 
		<PokeIcon
			key={index}
			poke={poke}
			selectMyPoke={props.selectMyPoke}
			mainPoke={props.mainPoke}
		/>
	)


	return(
		<Segment.Group id='left-container'>
		
			<Segment compact>
				<h3 className="labels">{props.currentUser.name}'s Pokemon</h3>
			</Segment>

			<Segment compact id='myPokemon'>
				<Button
					compact
					inverted color='standard'
					onClick={props.filterByRegion}
					name='all'>
					ALL
				</Button>

				<Button
					compact
					inverted color='standard'
					onClick={props.filterByRegion}
					name='kanto'>
					KANTO
				</Button>

				<Button
					compact
					inverted color='standard'
					onClick={props.filterByRegion}
					name='johto'>
					JOHTO
				</Button>

				<Button
					compact
					inverted color='standard'
					onClick={props.filterByRegion}
					name='hoenn'>
					HOENN
				</Button>

				<Button
					compact
					inverted color='standard'
					onClick={props.filterByRegion}
					name='sinnoh'>
					SINNOH
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