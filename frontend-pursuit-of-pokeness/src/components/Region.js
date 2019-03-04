import React from 'react'

const Region = (props) => {
	
	const pokeList = props.rand.map((poke, index) => 
		<img
			src={poke.front}
			className={`pokeImg${index}`}
			onClick={() => props.selectWildPoke(poke)}>
		</img>) 

	return(
		<div className='region' id={props.name}>
			{pokeList}
		</div>
	)	
}

export default Region;