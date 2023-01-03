import React, { Component } from 'react'
import './Pokecard.css'

export default class Pokecard extends Component {
  render() {
    //destructure
    const { yourPokemon } = this.props

    return (
      <div>
        {yourPokemon.map((poke)=>{
            const imageID = poke.url.slice(34, -1)
            console.log(poke)
            return(
            
            <div className='container'>

                <div className="card" key= {poke.name}>
                <img className="card-img-top" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${imageID}.svg`} alt=""/>
                <div className="card-body">
                    <h1 className="card-title">{poke.name}</h1>
                    <p className="card-text"></p>
                    <button className="btn btn-success">Collect</button>
                </div>
                </div>

            </div>
            )           
        })}
      </div>
    )
  }
}
