import React, { useEffect, useState } from 'react'
import ItemCount from '../components/ItemCount'
import ItemList from '../components/itemList';

const {getProducts} = require ('../services/postService')

export default function ItemListContainer() {
  
  const [products, setProducts] = useState([]);

  useEffect(()=> { 
    getProducts()
      .then(res => setProducts(res))
  }, [])

  return (
    <div className="flex justify-center flex-col items-center">
      {/* <ItemCount init={1} stock={4} /> */}
      <div className="max-w-2xl mx-auto py-5 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <ItemList products={products}/>
      </div>
    </div>
  )
}