import React from 'react'
import Item from './Item'

export default function itemList() {
  return (
  <div class="bg-white">
    <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 class="sr-only">Products</h2>
  
      <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        <Item id={"1"} title={"botell 1"} price={50} imgUrl={"./assets/img/img.jpeg"}/>
        <Item id={"2"} title={"botell 2"} price={20} imgUrl={"./assets/img/img.jpeg"}/>
        <Item id={"3"} title={"botell 3"} price={35} imgUrl={"./assets/img/img.jpeg"}/>
        <Item id={"4"} title={"botell 4"} price={40} imgUrl={"./assets/img/img.jpeg"}/>
      </div>
    </div>
  </div>  
  )
}
