import React, { Component } from 'react'
import MenuNav from '../components/menuNav/MenuNav'
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

        <MenuNav />
        <CardWidget CartWidgetCounter={this.state.CartWdigetCounter} />

      </nav>
    )
  }
}

  