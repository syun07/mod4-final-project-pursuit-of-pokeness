import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

// const API = `https://pokeapi.co/api/v2/pokemon/`

// const kanto = []
// const johto = []
// const hoenn = []
// const sinnoh = [] 

// const setupPage = () => {
//     // getAllPokemon().then(() => createAllPokemon(kanto, johto, hoenn, sinnoh))
//     getAllPokemon().then(console.log(kanto, johto, hoenn, sinnoh))
// }

// setupPage()

// function getAllPokemon() {
//     for (let k = 1; k <= 151; k++) {
//         fetch(`${API}${k}`)
//             .then(res => res.json())
//             .then(data => {
//                 let poke = {
//                     name: data.name,
//                     type: data.types[0].type.name,
//                     hp: data.stats[data.stats.length - 1].base_stat,
//                     region: 'kanto',
//                     front: data.sprites.front_default,
//                     back: data.sprites.back_default
//                 }
//                 kanto.push(poke)
//             })
//     }

    // for (let j = 152; j <= 251; j++) {
    //     fetch(`${API}${j}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             let poke = {
    //                 name: data.name,
    //                 type: data.types[0].type.name,
    //                 hp: data.stats[data.stats.length - 1].base_stat,
    //                 region: 'johto',
    //                 front: data.sprites.front_default,
    //                 back: data.sprites.back_default
    //             }
    //             johto.push(poke)
    //         })
    // }

    // for (let h = 252; h <= 386; h++) {
    //     fetch(`${API}${h}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             let poke = {
    //                 name: data.name,
    //                 type: data.types[0].type.name,
    //                 hp: data.stats[data.stats.length - 1].base_stat,
    //                 region: 'hoenn',
    //                 front: data.sprites.front_default,
    //                 back: data.sprites.back_default
    //             }
    //             hoenn.push(poke)
    //         })
    // }

    // for (let s = 387; s <= 490; s++) {
    //     fetch(`${API}${s}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             let poke = {
    //                 name: data.name,
    //                 type: data.types[0].type.name,
    //                 hp: data.stats[data.stats.length - 1].base_stat,
    //                 region: 'sinnoh',
    //                 front: data.sprites.front_default,
    //                 back: data.sprites.back_default
    //             }
    //             sinnoh.push(poke)
    //         })
    // }
// }
