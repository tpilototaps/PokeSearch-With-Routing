import React, { Component } from 'react'
import './Search.css'

export default class Search extends Component {

render() {

  return (
    <div className='search'>
      <input className='search-box' 
      type='search' 
      placeholder='Search Pokemon' 
      onChange={this.props.onSearchChange} />
    </div>
  );
  }
}
