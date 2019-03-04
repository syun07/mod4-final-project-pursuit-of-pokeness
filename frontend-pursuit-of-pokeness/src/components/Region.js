import React, { Component } from 'react'

import { Segment } from 'semantic-ui-react';
import PokeIcon from './PokeIcon';

const Region = (props) => {
	
	const pokeList = props.rand.map((poke, index) => 
		<img src={poke.front} className={`pokeImg${index}`}></img>) 

	return(
		<div className='region' id={props.name}>
			{pokeList}
		</div>
	)	
}

export default Region;