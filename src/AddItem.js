import React, { useRef } from 'react'
import { FaPlus } from 'react-icons/fa'

const AddItem = ({ handleAddItem, newItem, setNewItem }) => {
  const inputRef = useRef(null);
  
  return (
    <form className="addForm" onSubmit={handleAddItem}>
      <label htmlFor="addItem">Add Item</label>
      <input
        id="addItem"
        type="text"
        placeholder="Add Item"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        autoFocus
        ref={inputRef}
      />
      <button 
        type="submit"
        onClick={() => inputRef.current.focus()}
      >
        <FaPlus />
      </button>
    </form>
  )
}

export default AddItem