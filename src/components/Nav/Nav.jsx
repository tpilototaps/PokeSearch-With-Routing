import React, { Component } from 'react'

export default class NavigationBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
        <form className="form-inline">
        <button className="btn btn-outline-success" type="button"> Start Collecting </button>
        <button className="btn btn-sm btn-outline-secondary" type="button">View Collection</button>
        </form>
        </nav>
      </div>
    )
  }
}
