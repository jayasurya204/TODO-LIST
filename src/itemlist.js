import React from 'react'
import LineItem from './LineItem'



const itemlist = ({ items, handleCheck, handleDelete }) => {
  return (
    <ul>
      {items.map((item) => (
        // <lineitem
        // />
        <LineItem
          item={item}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  )
}

export default itemlist
