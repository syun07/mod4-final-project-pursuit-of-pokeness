import React from 'react'

import { Card } from 'semantic-ui-react'
import '../stylesheets/userConsole.css'


const CatchSuccess = (props) => {
	return (
		<Card id='successcard'>
			<img id='caughtpoke' src={props.selectedPoke.front} alt={props.selectedPoke.name} />
		</Card>
	)
}

export default CatchSuccess