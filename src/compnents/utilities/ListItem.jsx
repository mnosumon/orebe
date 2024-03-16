import React from 'react'

const ListItem = ({className, content}) => {
  return (
    <li className={className}>{content}</li>
  )
}

export default ListItem