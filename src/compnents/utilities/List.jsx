import React from 'react'

const List = ({children, className}) => {
  return (
    <ul className={`f${className}`}>{children}</ul>
  )
}

export default List