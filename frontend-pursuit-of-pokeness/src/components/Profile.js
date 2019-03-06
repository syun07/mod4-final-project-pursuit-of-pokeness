import React from 'react'

import { Card } from 'semantic-ui-react'
import '../stylesheets/PokeStats.css'


class Profile extends React.Component {
	render() {

		const { name, image, pokemons } = this.props.currentUser	  
		
		return (
			<Card className='pokeCard'>
				<div>
					<img className='pokeCardImg' src={image} alt={name} />
				</div>
			
				<div className='pokeCardContent'>
					<div>
						<h4 className="profile-text">{name.toUpperCase()}</h4>
					</div>

					<br />
					
					<div>
						<p><strong># OF POKEMON:</strong> {pokemons.length}</p>
					</div>
				</div>
			</Card>
		)
	}
}
export default Profile