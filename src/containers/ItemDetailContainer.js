import React, {useState} from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react/cjs/react.development';
import { getProduct } from '../services/postService';
import ItemDetails from '../components/ItemDetails'

export default function ItemDetailContainer() {

  const { id } = useParams();
  const [ product, setProduct ] = useState({title:'', id:'', description:'',image:'', price:''});

  useEffect(() => {
    getProduct(id)
      .then(res => setProduct(res))
  },[id])

  return (
    <ItemDetails
      id={product.id}
      title={product.title}
      description={product.description}
      price={product.price}
      image={product.image}
    />
  )
}