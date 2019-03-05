import React, { Component } from 'react';
import WildPokemonMap from './containers/WildPokemonMap'
import UserConsole from './containers/UserConsole'
import OpeningPage from './containers/OpeningPage'


import { Segment } from 'semantic-ui-react';
import './App.css';

const PokeApi = 'http://localhost:3000/pokemons'
const UserApi = 'http://localhost:3000/users/'
const PokeUserApi = 'http://localhost:3000/poke_users/'

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			kanto: [],
			johto: [],
			hoenn: [],
			sinnoh: [],
			kantoRand: [],
			johtoRand: [],
			hoennRand: [],
			sinnohRand: [],
			myPokemonList: [],
			filteredPoke: [],
			selectedPoke: null,
			mainPoke: null,
			wild: null,
			enterPage: false,
			renderMe: 'profile',
			currentUser: null
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
				myPokemonList: data.pokemons,
				filteredPoke: data.pokemons,
				mainPoke: data.pokemons[0],
				currentUser: data
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
		this.renderRandomPoke()
	}

	selectWildPoke = (poke) => {
		this.setState({
			selectedPoke: poke,
			wild: true,
			renderMe: 'stats'
		})
	}

	selectMyPoke = (poke) => {
		this.setState({
			selectedPoke: poke,
			wild: false,
			renderMe: 'stats'
		})
	}

	makeMain = (poke) => {
		this.setState({
			mainPoke: poke
		})
	}

	catchPoke = () => {
		this.setState({
			renderMe: 'fight'
		})
	}

	pokeFate = () => {
		let fate = Math.floor((Math.random() * 10) + 1)
		if (fate <= 6) {
			this.setState({
				renderMe: 'success',
				myPokemonList: [...this.state.filteredPoke, this.state.selectedPoke]
			}, () => console.log(this.state.myPokemonList))
			this.renderRandomPoke()
			this.postPoke()
		} else {
			this.setState({
				renderMe: 'fail',
			})
			this.renderRandomPoke()
		}
	} 

	postPoke = () => {
		let userpoke = {user_id: this.state.currentUser.id, pokemon_id: this.state.selectedPoke.id}
		fetch(PokeUserApi, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: JSON.stringify(userpoke)
		})
	}

	filterByRegion = event => {
		const filtered = this.state.myPokemonList.filter(pokemon => pokemon.region === event.target.name)
		console.log(filtered)
		event.target.name === 'all' ? this.setState({filteredPoke: this.state.myPokemonList}) : this.setState({filteredPoke: filtered})
	}


	render() {
		console.log(this.state)
		return (
			// if user logs in (clicks submit), render map & user console- otherwise render opening page
			this.state.enterPage ?
				
				<Segment id="app">
					<WildPokemonMap
						kantoRand={this.state.kantoRand}
						johtoRand={this.state.johtoRand}
						hoennRand={this.state.hoennRand}
						sinnohRand={this.state.sinnohRand}
						renderRandomPoke={this.renderRandomPoke} 
						selectWildPoke={this.selectWildPoke}
						/>
					<UserConsole
						selectedPoke={this.state.selectedPoke}
						mainPoke={this.state.mainPoke}
						selectMyPoke={this.selectMyPoke}
						wild={this.state.wild}
						renderMe={this.state.renderMe}
						makeMain={this.makeMain}
						catchPoke={this.catchPoke}
						pokeFate={this.pokeFate}
						currentUser={this.state.currentUser}
						filterByRegion={this.filterByRegion}
						filteredPoke={this.state.filteredPoke}
						/> 
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
