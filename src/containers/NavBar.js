import React, { useState } from 'react'
import NavItem from '../components/NavItem'
import CardWidget from '../components/CartWidget'
import { Link } from 'react-router-dom';

export default function NavBar() {

  const [CartCounter, setCartCounter] = useState(0);
  const [isActive, setActive] = useState(false);
  const ToggleClass = () => {setActive(!isActive)};
  
  return (
    <nav className="bg-black flex flex-row justify-between items-center p-10">
      
      {/* burger menu botton */}
      <div className="lg:hidden">  
        <button onClick={ToggleClass}>
          <svg xmlns="http://www.w3.org/2000/svg" className="xs:h-10 xs:w-10 h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      
      {/* mobile menu */}
      <div className={"flex transform transition duration-200 ease-in-out flex-col w-4/5 xs:w-1/2 lg:hidden absolute z-30 top-0 left-0 bg-black h-screen shadow-xl " + (isActive ? " " : "-translate-x-full")}>
        {/* close menu botton */}
        <button onClick={ToggleClass} className="p-10">
          <svg xmlns="http://www.w3.org/2000/svg" className=" text-white xs:h-10 xs:w-10 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      
        <ul className="flex-col justify-between font-mono font-normal ml-10">
          <NavItem content="Home" href="/" />
          <NavItem content="Electronics" href="/electronics" />
          <NavItem content="Jewelery" href="/jewelery" />
          <NavItem content="Men's clothing" href="/men's%20clothing" />
          <NavItem content="Women's clothing" href="/Women's%20clothing" />
        </ul>

      </div>

      {/* logo */}
      <Link to={`/`}>
        <span className="flex text-white font-sans italic font-bold xs:text-5xl text-4xl tracking-tight">
          Sugar
        </span>
      </Link>
      

      {/* desktop menu */}
      <ul className="flex-row justify-between font-mono font-normal hidden lg:block">
        <NavItem content="Home" href="/" />
        <NavItem content="Electronics" href="/electronics" />
        <NavItem content="Jewelery" href="/jewelery" />
        <NavItem content="Men's clothing" href="/men's%20clothing" />
        <NavItem content="Women's clothing" href="/Women's%20clothing" />
      </ul>
      
      {/* cart icon */}
      <CardWidget CartWidgetCounter={CartCounter} />
    
    </nav>
  )
}

  