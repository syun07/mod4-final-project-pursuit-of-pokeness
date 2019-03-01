import React from 'react'

import { Card } from 'semantic-ui-react'
import '../stylesheets/userConsole.css'


const CatchSuccess = (props) => {
	return (
		<Card id='failcard'>
			<h4>
				{props.wildPoke.name} fled!
			</h4>
		</Card>
	)
}

export default CatchSuccess