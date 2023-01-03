import React, { Component } from 'react'
import Hero from '../../components/Hero/Hero'
import NavigationBar from '../../components/Nav/Nav'
import Pokecard from '../../components/PokemonCards/Pokecard'
import Search from '../../components/SearchBox/Search'

export default class LandingPage extends Component {
    constructor (){
        super()
        this.state = {
          'yourPokemon': [],
          'input_pokemon' : ''
        }
      }
    
      async componentDidMount() {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=200')
        const data = await response.json()
        this.setState(()=>{
          return (
            {
              'yourPokemon' : data['results']
            }
          )
        })
      }
    
      onSearchChange = (event) => {
        const input_pokemon = event.target.value
    
        this.setState(() => {
          return (
            {
              input_pokemon: input_pokemon
            }
          )
        })
      }
    
    
    
      render() {
        // destructiring
        const {yourPokemon, input_pokemon } = this.state
        const { onSearchChange } = this
    
        //mapping all pokemon to page
        const filtered_pokemon = yourPokemon.filter((poke) => {
          return (
            poke.name.includes(input_pokemon)
          )
        })
        return (
          <div className="App">
            
            <NavigationBar/>
            <Hero/>
            <Search onSearchChange = {onSearchChange}/>
            <Pokecard yourPokemon={filtered_pokemon}/>
    
    
          </div>
        );
      }
}
