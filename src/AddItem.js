import React from 'react'
import { FaPlus } from 'react-icons/fa'

const AddItem = ({ handleAddItem, newItem, setNewItem }) => {
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
      />
      <button type="submit"><FaPlus /></button>
    </form>
    
  )
}

export default AddItem