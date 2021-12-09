import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react/cjs/react.development'
import ItemCount from '../components/ItemCount'
import { CartContext } from '../context/CartContext'

export default function ItemDetails({title, id, category, description, price, image }) {

  const {cart, addItem, isInCart} = useContext(CartContext);

  const [quantity, setQuantity] = useState(1);

  const handleAddItem = () =>{
    if (quantity > 0) {
      addItem({
          id,
          title,
          price,
          image,
          quantity
      })
    }   
  }
  useEffect(() => {
    console.log(cart)
  })

  return (
    <section className="mb-auto text-gray-700 body-font overflow-hidden bg-white">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          
          <img alt={title} className="lg:w-1/2 w-full max-h-96 object-contain object-center rounded" src={image} />
          
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">

            <h2 className="text-sm title-font text-gray-500 tracking-widest mb-5">{category}</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-5">{title}</h1>
            <p className="leading-relaxed">{description}</p>

            <div className="flex mt-6 items-center border-b-2 border-gray-200 mb-5">
              <p className="title-font font-medium text-2xl text-gray-900">Price: ${price}</p>

              { !isInCart(id)
                  ? <ItemCount 
                      quantity={quantity}
                      setQuantity={setQuantity}
                      stock={4}
                      onAdd={handleAddItem}
                    />
                  : <Link to="/cartPage" className="flex items-center justify-center ml-5 p-3 border border-transparent font-medium rounded text-xl text-white bg-black hover:bg-gray-700">Terminar mi compra</Link>
              }
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
