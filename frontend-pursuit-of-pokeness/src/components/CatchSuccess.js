import React from 'react'

import { Card } from 'semantic-ui-react'
import '../stylesheets/userConsole.css'


const CatchSuccess = (props) => {
	return (
		<Card id='successcard'>
			<img id='caughtpoke' src={props.wildPoke.front} alt={props.wildPoke.name} />
		</Card>
	)
}

export default CatchSuccess