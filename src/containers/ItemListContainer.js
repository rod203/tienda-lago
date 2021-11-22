import React, { useState } from 'react'
import ItemCount from '../components/ItemCount'
import ItemList from '../components/itemList';

export default function ItemListContainer() {

  const [message, setMessage] = useState("Hi! i'm a message");

  return (
    <div className="flex justify-center flex-col items-center">
      <h2 className="m-10">{message}</h2>
      <ItemCount init={1} stock={4} />
      <ItemList/>
    </div>
  )
}

