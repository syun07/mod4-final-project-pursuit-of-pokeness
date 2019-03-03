import React, { Component } from 'react'

import { Segment } from 'semantic-ui-react';
import PokeIcon from './PokeIcon';

const Region = (props) => {
	
	const pokeList = props.rand.map(poke => 
		<img src={poke.front}></img>) 

	return(
		<div className='region' id={props.name}>
			{pokeList}
		</div>
	)	
}

export default Region;