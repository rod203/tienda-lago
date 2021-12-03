import React from 'react'
import ItemCount from '../components/ItemCount'

export default function ItemDetails({title,description, price, image, id, category}) {

  return (
    <section class="text-gray-700 body-font overflow-hidden bg-white">
      <div class="container px-5 py-24 mx-auto">
        <div class="lg:w-4/5 mx-auto flex flex-wrap">
          <img alt={title} class="lg:w-1/2 w-full max-h-96 object-contain object-center rounded" src={image} />
          <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 class="text-sm title-font text-gray-500 tracking-widest mb-5">{category}</h2>
            <h1 class="text-gray-900 text-3xl title-font font-medium mb-5">{title}</h1>
            <p class="leading-relaxed">{description}</p>
            <div class="flex mt-6 items-center border-b-2 border-gray-200 mb-5">
              <span class="title-font font-medium text-2xl text-gray-900">Price: ${price}</span>
              <ItemCount init={1} stock={4} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
