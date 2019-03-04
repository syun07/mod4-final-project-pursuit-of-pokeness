import React, { Component } from 'react';
import WildPokemonMap from './containers/WildPokemonMap'
import UserConsole from './containers/UserConsole'
import OpeningPage from './containers/OpeningPage'


import { Segment } from 'semantic-ui-react';
import './App.css';

const PokeApi = 'http://localhost:3000/pokemons'
const UserApi = 'http://localhost:3000/users/'

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
			sinnohRand: [],
			enterPage: false,
			myPokemonList: []
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

			let id = '1';
			return fetch(`${UserApi}${id}`)
		})
			
		.then(res => res.json())
		.then(data => {
			this.setState({
				myPokemonList: data.pokemons
			})
		})
	}

	renderRandomPoke = () => {

		// KANTO //
        let kantoNums = []
        for (let i = 1; i < 7; i++) {
            kantoNums.push(Math.floor((Math.random() * 151) + 1))
        }
        
        	let newKanto = []
        	kantoNums.map(num => 
            newKanto.push(this.state.kanto.find(poke => poke.id === num))
			)
		
		// JOHTO //
		let johtoNums = []
        for (let j = 1; j < 7; j++) {
			johtoNums.push(Math.floor((Math.random() * 100) + 152))
        }
        
        let newJohto = []
        johtoNums.map(num => 
            newJohto.push(this.state.johto.find(poke => poke.id === num))
		)

		// HOENN //
		let hoennNums = []
        for (let k = 1; k < 7; k++) {
			hoennNums.push(Math.floor((Math.random() * 135) + 252))
        }
        
        let newHoenn = []
        hoennNums.map(num => 
            newHoenn.push(this.state.hoenn.find(poke => poke.id === num))
		)
		
		// SINNOH //
		let sinnohNums = []
        for (let s = 1; s < 7; s++) {
			sinnohNums.push(Math.floor((Math.random() * 104) + 387))
        }
        
        let newSinnoh = []
        sinnohNums.map(num => 
            newSinnoh.push(this.state.sinnoh.find(poke => poke.id === num))
		)

		this.setState({
			kantoRand: newKanto,
			johtoRand: newJohto,
			hoennRand: newHoenn,
			sinnohRand: newSinnoh
		})

	}
	
	submitHandler = event => {
		this.setState({
			enterPage: true
		})
	}

	render() {
		return (
			// if user logs in (clicks submit), render map & user console- otherwise render opening page
			this.state.enterPage ?
				
				<Segment id="app">
					<WildPokemonMap
						kantoRand={this.state.kantoRand}
						johtoRand={this.state.johtoRand}
						hoennRand={this.state.hoennRand}
						sinnohRand={this.state.sinnohRand}
						renderRandomPoke={this.renderRandomPoke} />
					<UserConsole
						kanto={this.state.kanto}
						johto={this.state.johto}
						hoenn={this.state.hoenn}
						sinnoh={this.state.sinnoh}
						selectedPoke={this.state.selectedPoke}
						wildPoke={this.state.wildPoke} 
						myPokemonList={this.state.myPokemonList} /> 
				</Segment>

				:

				<Segment id='app'>
					<OpeningPage
						submitHandler={this.submitHandler} />
				</Segment>
			
		);
	}
}

export default App;
