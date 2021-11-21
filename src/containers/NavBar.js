import React, { useState } from 'react'
import NavItem from '../components/NavItem/NavItem'
import CardWidget from '../components/CartWidget/CartWidget'

export default function NavBar() {

  const [CartCounter, setCartCounter] = useState(0);
  const [isActive, setActive] = useState(false);

  const ToggleClass = () => {
    setActive(!isActive); 
    console.log(isActive);
   };

  return (
    <nav className="bg-black flex flex-row justify-between items-center p-10">

    {/* mobile menu */}
      <div className="lg:hidden">
        {/* burger menu botton */}
        <button onClick={ToggleClass}>
          <svg xmlns="http://www.w3.org/2000/svg" className="xs:h-10 xs:w-10 h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
        </button>

      </div>
      <div className={"flex transform transition duration-200 ease-in-out flex-col w-4/5 xs:w-2/3 lg:hidden absolute z-30 top-0 left-0 bg-gray-900 h-screen " + (isActive ? " " : "-translate-x-full")}>
        {/* close menu botton */}
        <button onClick={ToggleClass} className="p-10">
          <svg xmlns="http://www.w3.org/2000/svg" className=" text-white xs:h-10 xs:w-10 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      
        <ul className="flex-col justify-between font-mono font-normal ml-10">
          <NavItem content="Home" href="/home" />
          <NavItem content="New" href="/new" />
          <NavItem content="Shirts" href="/shirts" />
          <NavItem content="Jackets" href="/jackets" />
          <NavItem content="Sweatshirts" href="/sweatshirts" />
          <NavItem content="T-shirts" href="/tshirts" />
          <NavItem content="Tops/Sweaters" href="/tops-sweaters" />
          <NavItem content="Pants" href="/pants" />
        </ul>

        <div>

        </div>

      </div>

      <span className="flex text-white font-sans italic font-bold xs:text-5xl text-4xl tracking-tight">Sugar</span>

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

  