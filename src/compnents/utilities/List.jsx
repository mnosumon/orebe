import React from 'react'

const List = ({children, className}) => {
  return (
    <ul className={`flex ${className}`}>{children}</ul>
  )
}

export default List