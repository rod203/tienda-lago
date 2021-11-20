import React, { useState } from 'react'
import NavItem from '../components/NavItem/NavItem'
import CardWidget from '../components/CartWidget/CartWidget'

export default function NavBar() {

  const [CartCounter, setCartCounter] = useState(0);

  return (
    <nav className="bg-black flex flex-row justify-between items-center p-10">

      <div className="lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      </div>

      <span className="flex text-white font-sans italic font-bold text-5xl tracking-tight">Sugar</span>

      <ul className="flex flex-row justify-between font-mono font-normal hidden lg:block">
        <NavItem content="Home" href="/home" />
        <NavItem content="New" href="/new" />
        <NavItem content="Shirts" href="/shirts" />
        <NavItem content="Jackets" href="/jackets" />
        <NavItem content="Sweatshirts" href="/sweatshirts" />
        <NavItem content="T-shirts" href="/tshirts" />
        <NavItem content="Tops/Sweaters" href="/tops-sweaters" />
        <NavItem content="Pants" href="/pants" />
      </ul>
      
      <CardWidget CartWidgetCounter={CartCounter} />
    
    </nav>
  )
}

  