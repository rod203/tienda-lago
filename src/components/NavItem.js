import React from 'react'
import { useHistory } from 'react-router'

export default function NavItem({content, href}) {

  let history = useHistory();

  return (
    <button onClick={()=> history.push(href)} key={content} className="block mt-4 text-white lg:inline-block lg:mt-0 text-teal-lighter hover:text-yellow-200 hover:line-through mr-4">{content}</button>
  )
}
