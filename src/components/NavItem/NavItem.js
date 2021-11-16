import React from 'react'

export default function NavItem({content, href}) {
  return (
    <li className="block mt-4 text-white lg:inline-block lg:mt-0 text-teal-lighter hover:text-yellow-200 mr-4">
        <a href={href}> {content} </a>
    </li>
  )
}
