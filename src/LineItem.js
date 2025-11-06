import React from 'react'
import { FaTrash } from "react-icons/fa";

const LineItem = ({ item, handleCheck, handleDelete }) => {
  return (
     <li className='item' key={item.Id}>
          <input style={(item.checked) ? { backgroundColor: 'blue' } : { backgroundColor: 'white' }}
            type="checkbox"
            onChange={() => handleCheck(item.Id)}
            checked={item.checked}
          />
          <label
            style={(item.checked) ?
              { textDecoration: 'line-through' } : null}
            onDoubleClick={() => handleCheck(item.Id)}>{item.item}</label>
          <FaTrash
            role="button"
            onClick={() => handleDelete(item.Id)}
          />
        </li>
  )
}

export default LineItem


// import React from 'react'
// import { FaTrash } from "react-icons/fa";

// const lineitems = ({ item, handleCheck, handleDelete }) => {
//   return (
 
//   )
// }

// export default lineitems;