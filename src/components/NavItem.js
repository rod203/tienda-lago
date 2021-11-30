import React from 'react'
import { Link } from 'react-router-dom'

export default function NavItem({content, href}) {

  return (
    <Link to={href} className="block mt-4 text-white lg:inline-block lg:mt-0 text-teal-lighter hover:text-yellow-200 hover:line-through mr-4">{content}</Link>
  )
}
