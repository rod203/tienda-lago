import React from 'react'

export default function MenuNav() {
  return (
    <div className="flexflex-row justify-between">
        <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
          Inicio
        </a>
        <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
          Remeras
        </a>
        <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
          Buzos
        </a>
        <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
          Pantalones
        </a>
        <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white">
          Accesorios
        </a>
    </div>
  )
}
