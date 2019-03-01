import React, { Component } from 'react';
import WildPokemonMap from './containers/WildPokemonMap'
import UserConsole from './containers/UserConsole'

import { Segment } from 'semantic-ui-react';
import './App.css';


const PokeApi = 'http://localhost:3000/pokemons'

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			kanto: [],
			johto: [],
			sinnoh: [],
			hoenn: [],
			selectedPoke: {
				id: 1,
				name: "bulbasaur",
				hp: 45,
				region: "kanto",
				front: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
				back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
				kind: "poison"
			},
			wildPoke: {
				id: 4,
				name: "charmander",
				hp: 39,
				region: "kanto",
				front: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
				back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png",
				kind: "fire"
			}
		}
	}

	componentDidMount() {
		fetch(PokeApi)
		.then(res => res.json())
		.then(data => {
			let k = data.filter(poke => poke.region === 'kanto')
			let j = data.filter(poke => poke.region === 'johto')
			let s = data.filter(poke => poke.region === 'sinnoh')
			let h = data.filter(poke => poke.region === 'hoenn')

			this.setState({
				kanto: k,
				johto: j,
				sinnoh: s,
				hoenn: h
			})
		})
	}

		render() {
			return (
			<Segment id="app">
				<WildPokemonMap />
				<UserConsole 
					kanto={this.state.kanto} 
					selectedPoke={this.state.selectedPoke}
					wildPoke={this.state.wildPoke}
					/>
			</Segment>
		);
	}
}

export default App;
