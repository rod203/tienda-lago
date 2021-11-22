import React from 'react'

export default function item({imgUrl,id,title,price,extract}) {

  return (
    <a href="/item" class="group">
      <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
        <img src={imgUrl} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="w-full h-full object-center object-cover group-hover:opacity-75" />
      </div>
      <h3 class="mt-4 text-lg uppercase font-sans tracking-wider text-gray-700">
        {title}
      </h3>
      <p className="text-gray-500 text-xs font-mono">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>
      <p class="mt-1 text-lg font-medium text-gray-900">
        ${price}
      </p>
    </a>
  )
}
