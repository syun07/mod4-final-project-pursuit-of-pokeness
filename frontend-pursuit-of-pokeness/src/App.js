import React, { Component } from 'react';
import WildPokemonMap from './containers/WildPokemonMap'
import UserConsole from './containers/UserConsole'
import OpeningPage from './containers/OpeningPage'
import LoadingPika from './containers/LoadingPika'


import { Segment } from 'semantic-ui-react';
import './App.css';

const loginApi = 'http://localhost:3000/login'
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
			enterPage: 'o',
			renderMe: 'profile',
			currentUser: null,
			name: "",
			password: "",
			newName: "",
			newPassword: "",
			newImage: "",
			load: false
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

	getAuthToken(loginInfo) {
		return fetch(`${loginApi}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(loginInfo)
		}).then(res => res.json())
	}
	
	handleLogin = event => {
		event.preventDefault();
		this.getAuthToken({ name: this.state.name, password: this.state.password }).then(payload => {
			if (payload.user) {
				localStorage.setItem("token", payload.token)
				this.setState({
					enterPage: 'p'
				})
				return fetch(`${UserApi}${payload.user.id.toString()}`).then(this.finishLogin)
			} else {
				alert("INVALID LOGIN!")
			}
		})
	}

	finishLogin = (res) => {
		res.json()
		.then(data => {
			setTimeout(() => {
				this.setState({
					myPokemonList: data.pokemons,
					filteredPoke: data.pokemons,
					mainPoke: data.pokemons[0],
					currentUser: data,
					enterPage: 'a'
				})
			}, 3000)
		})
		this.renderRandomPoke()
	}
	
	handleSignup = event => {
		event.preventDefault();
		return fetch(`${UserApi}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				name: this.state.newName,
				password: this.state.newPassword,
				image: this.state.newImage
			})
		}).then(res => res.json())
	}

	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		})
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
			renderMe: 'choose',
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
				myPokemonList: [...this.state.myPokemonList, this.state.selectedPoke],
				filteredPoke: [...this.state.filteredPoke, this.state.selectedPoke]
			})
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
		event.target.name === 'all' ? this.setState({filteredPoke: this.state.myPokemonList}) : this.setState({filteredPoke: filtered})
	}

	reloadPage = () => {
		window.location.reload()
	}

	loadPika = () => {

	}

	
	render() {
		const pika = <Segment id="app"> <LoadingPika /> </Segment>

		const application =
			<Segment id="app">
				<WildPokemonMap
					kantoRand={this.state.kantoRand}
					johtoRand={this.state.johtoRand}
					hoennRand={this.state.hoennRand}
					sinnohRand={this.state.sinnohRand}
					renderRandomPoke={this.renderRandomPoke}
					selectWildPoke={this.selectWildPoke}
					reloadPage={this.reloadPage}
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
			
		const opening = 
			<Segment>
				<OpeningPage
					handleLogin={this.handleLogin}
					handleSignup={this.handleSignup}
					handleChange={this.handleChange} 
					/>
			</Segment>
		
		let showMe 
		if (this.state.enterPage === 'o') {
			showMe = opening 
		} else if (this.state.enterPage === 'a') {
			showMe = application
		} else if (this.state.enterPage === 'p') {
			showMe = pika
		}

		return (
			<div>
				{showMe}
			</div>
		);
	}
}

export default App;
