import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import ItemList from '../components/itemList';

const {getCategoryProducts} = require ('../services/postService')

export default function ItemListContainer() {
  
  const { categoryName } = useParams(); 
  const [products, setProducts] = useState([]);

  useEffect(()=> { 
    getCategoryProducts(categoryName)
      .then(res => setProducts(res))
  }, [categoryName])

  return (
    <div className="flex justify-center flex-col items-center">
      <div className="max-w-2xl mx-auto py-5 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <ItemList products={products}/>
      </div>
    </div>
  )
}