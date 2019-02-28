import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import './App.css';
import WildPokemonMap from './containers/WildPokemonMap'
import UserConsole from './containers/UserConsole'


const API = 'http://localhost:3000/pokemons'

class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      kanto: [],
      johto: [],
      sinnoh: [],
      hoenn: []
    }
  }

  componentDidMount() {
    fetch(API)
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
          // },() => console.log(this.state)
        })
    })
  }

  render() {
    return (
      <Segment id="app">
        <WildPokemonMap />
        <UserConsole />
      </Segment>
    );
  }
}

export default App;
