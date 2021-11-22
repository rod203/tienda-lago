import React, { useEffect, useState } from 'react'
import ItemCount from '../components/ItemCount'
import ItemList from '../components/itemList';

export default function ItemListContainer() {
  
  const [productList, setProductList] = useState([]);

  useEffect(()=> { 
    fetch('https://rickandmortyapi.com/api/character')
    .then(result => result.json())
    .then(data => {setProductList(data.results)})
    .catch()
  }, [])

  return (
    <div className="flex justify-center flex-col items-center">
      <ItemCount init={1} stock={4} />
      <div className="max-w-2xl mx-auto py-5 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <ItemList products={productList}/>
      </div>
    </div>
  )
}