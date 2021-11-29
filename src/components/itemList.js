import React from 'react'
import Item from './Item'

export default function itemList({products}) {
  return (
    <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      {products.map( 
        producto => {
          return <Item id={producto.id} price={producto.price} title={producto.title} imgUrl={producto.image} description={producto.description}/>
          }
        )
      }
    </div>
  )
}