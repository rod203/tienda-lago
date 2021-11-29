import React, {useState} from 'react'
import { useParams } from 'react-router'
import { useEffect } from 'react/cjs/react.development';
import { getProduct } from '../services/postService';

export default function ItemDetails() {

  const { id } = useParams();
  const { product, setProduct} = useState({title: '', description:'', price: '', image:''});

  console.log(product);

  useEffect(() => {
    getProduct(id)
      .then(res => setProduct(res))
  },[id])

  return (
    <div>
      <h1>title: {product.title}</h1>
    </div>
  )
}
