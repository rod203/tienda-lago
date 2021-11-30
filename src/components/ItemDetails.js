import React from 'react'

export default function ItemDetails({title,description, price, image, id, category}) {

  return (
    <div>
      <h1>id: {id}</h1>
      <h1>title: {title}</h1>
      <h1>description: {description}</h1>
      <h1>price: ${price}</h1>
      <h1>category: {category}</h1>
      <img src={image} alt={title}/>
    </div>
  )
}
