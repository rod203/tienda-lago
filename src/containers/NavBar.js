import React, { Component } from 'react'
import NavItem from '../components/NavItem/NavItem'
import CardWidget from '../components/CartWidget/CartWidget'

export default class NavBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      CartWdigetCounter: 0
    }
  }

  render() {
    return (
      <nav className="bg-black flex flex-row justify-between items-center p-10">

        <div className="flex text-white font-sans italic font-bold">
          <span className="text-5xl tracking-tight">Sugar</span>
        </div>

        <ul className="flexflex-row justify-between font-mono font-normal">
          <NavItem content="Home" href="/home" />
          <NavItem content="New" href="/new" />
          <NavItem content="Shirts" href="/shirts" />
          <NavItem content="Jackets" href="/jackets" />
          <NavItem content="Sweatshirts" href="/sweatshirts" />
          <NavItem content="T-shirts" href="/tshirts" />
          <NavItem content="Tops/Sweaters" href="/tops-sweaters" />
          <NavItem content="Pants" href="/pants" />
        </ul>
        <CardWidget CartWidgetCounter={this.state.CartWdigetCounter} />
      
      </nav>
    )
  }
}

  