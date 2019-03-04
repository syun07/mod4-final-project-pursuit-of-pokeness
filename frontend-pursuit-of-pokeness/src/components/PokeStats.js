import React from 'react'

import { Card, Button } from 'semantic-ui-react'
import '../stylesheets/PokeStats.css'


class PokeStats extends React.Component {
	render() {
	  
		const {name, hp, front, region, kind } = this.props.selectedPoke
		return (
			<Card className='pokeCard'>
				<div>
					
					<div>
						<img className='pokeCardImg' src={front} alt={name} />
					</div>
				
					<div className='pokeCardContent'>
						<div>
							<h4 className="header">{name.toUpperCase()}</h4>
						</div>
						
						<div>
							<p className="header"><strong>Region:</strong> {region}</p>
						</div>

						<div>
							<p className="header"><strong>Type:</strong> {kind}</p>
						</div>
						
						<div className="extra content">
							<span>
								<i className="icon heartbeat red" />
								{hp}
							</span>
						</div>
						
						<br />
						{this.props.wild ?
							<Button compact
								color='green'
								onClick={this.props.catchPoke}>
								Catch
							</Button> 
							:
							<Button compact
								color='green'
								onClick={() => this.props.makeMain(this.props.selectedPoke)}>
								Choose Me!
							</Button> 
						}
						
					</div>
				</div>
			</Card>
		)
	}
}
export default PokeStats