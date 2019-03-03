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
			hoenn: [],
			sinnoh: [],
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
			},
			kantoRand: [],
			johtoRand: [],
			hoennRand: [],
			sinnohRand: []
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

	renderRandomPoke = () => {

		// KANTO //
        let kantoNums = []
        for (let i = 1; i < 5; i++) {
            kantoNums.push(Math.floor((Math.random() * 151) + 1))
        }
        
        let newKanto = []
        kantoNums.map(num => 
            newKanto.push(this.state.kanto.find(poke => poke.id === num))
		)

		// JOHTO //
		let johtoNums = []
        for (let j = 1; j < 5; j++) {
			johtoNums.push(Math.floor((Math.random() * 100) + 152))
        }
        
        let newJohto = []
        johtoNums.map(num => 
            newJohto.push(this.state.johto.find(poke => poke.id === num))
		)

		// HOENN //
		let hoennNums = []
        for (let k = 1; k < 5; k++) {
			hoennNums.push(Math.floor((Math.random() * 135) + 252))
        }
        
        let newHoenn = []
        hoennNums.map(num => 
            newHoenn.push(this.state.hoenn.find(poke => poke.id === num))
		)
		
		// SINNOH //
		let sinnohNums = []
        for (let s = 1; s < 5; s++) {
			sinnohNums.push(Math.floor((Math.random() * 104) + 387))
        }
        
        let newSinnoh = []
        sinnohNums.map(num => 
            newSinnoh.push(this.state.sinnoh.find(poke => poke.id === num))
		)

		this.setState({
			kantoRand: [...this.state.kantoRand, ...newKanto],
			johtoRand: [...this.state.johtoRand, ...newJohto],
			hoennRand: [...this.state.hoennRand, ...newHoenn],
			sinnohRand: [...this.state.sinnohRand, ...newSinnoh],
			},() => console.log(this.state))
		// })
    }

	render() {
		return (
			<Segment id="app">
				<WildPokemonMap 
					kantoRand={this.state.kantoRand}
					johtoRand={this.state.johtoRand}
					hoennRand={this.state.hoennRand}
					sinnohRand={this.state.sinnohRand}
					renderRandomPoke={this.renderRandomPoke}
				/>
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
