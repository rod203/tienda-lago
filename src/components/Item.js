import React from 'react'


export default function item({ id,imgUrl,title,price,description}) {


  return (
    <a href="/" className="group">
      <div className="w-full aspect-w-1 aspect-h-1 bg-white rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
        <img src={imgUrl} alt="img" className="object-scale-down m-auto h-48 object-center group-hover:opacity-75" />
      </div>
      <h3 className="mt-4 text-lg uppercase font-sans tracking-wider text-gray-700">
        {title}
      </h3>
      <p className="text-gray-500 text-xs font-mono truncate ...">
        {description}
      </p>
      <p className="mt-1 text-lg font-medium text-gray-900">
        ${price}
      </p>
    </a>
  )
}