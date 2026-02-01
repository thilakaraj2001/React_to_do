import React from 'react'
import { FaTrash } from "react-icons/fa";

const ItemList = ({items, handleChange, handleDelete}) => {
  return (
    <ul>
        {items.map(item => (
          <li className='item' key={item.id}>
            <input 
              type="checkbox" 
              onChange={() => handleChange(item.id)}
              checked={item.checked}
            />
            <label
              style={(item.checked) ? {textDecoration: 'line-through'} : null}
              onDoubleClick={() => handleChange(item.id)}> 
            {item.name}
            </label>
            <FaTrash 
            role='button'
            onClick={() => handleDelete(item.id)}
            tabIndex='0'
            aria-label={`delete ${item.name}`}/>
            </li>
        ))}
      </ul>
  )
}

export default ItemList