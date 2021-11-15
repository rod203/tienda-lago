import React from 'react'

export default function MenuNav() {
  return (
    <div className="flexflex-row justify-between font-mono font-normal">
        <a href="#" className="block mt-4 text-white lg:inline-block lg:mt-0 text-teal-lighter hover:text-yellow-200 mr-4">
          Inicio
        </a>
        <a href="#" className="block mt-4 text-white lg:inline-block lg:mt-0 text-teal-lighter hover:text-yellow-200 mr-4">
          Remeras
        </a>
        <a href="#" className="block mt-4 text-white lg:inline-block lg:mt-0 text-teal-lighter hover:text-yellow-200 mr-4">
          Buzos
        </a>
        <a href="#" className="block mt-4 text-white lg:inline-block lg:mt-0 text-teal-lighter hover:text-yellow-200 mr-4">
          Pantalones
        </a>
        <a href="#" className="block mt-4 text-white lg:inline-block lg:mt-0 text-teal-lighter hover:text-yellow-200 mr-4">
          Accesorios
        </a>
    </div>
  )
}
