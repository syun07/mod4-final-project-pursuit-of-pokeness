import React from 'react'

import { Grid, Segment, Card } from 'semantic-ui-react'
import '../stylesheets/userConsole.css'


const Fight = (props) => { 

	// const { wild } = props.wildPoke
	// const { main } = props.selectedPoke



	return (
		<Card.Group>
			<Card fluid id='fightcard'>
				<Grid id='fightgrid' columns='equal'>
					<Grid.Row stretched>
						
						<Grid.Column>
						</Grid.Column>
						
						<Grid.Column>
							<img src={props.wildPoke.front} alt=''/>
						</Grid.Column>

					</Grid.Row>

					<Grid.Row stretched>
						
						<Grid.Column>
							<img src={props.selectedPoke.back} alt=''/>
						</Grid.Column>
						
						<Grid.Column>
						</Grid.Column>

					</Grid.Row>
				</Grid>
			</Card>
		</Card.Group>
	)
}

export default Fight;