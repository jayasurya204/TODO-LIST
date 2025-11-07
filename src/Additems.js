
import React from 'react'
import { FaPlus } from 'react-icons/fa'
const Additems = ({ newItem, setNewItem, handlesubmit }) => {
    return (
        <form className='addforms' onSubmit={handlesubmit} >
            <label htmlFor='additem' >Add Item </label>
            <input
                autoFocus
                id='AddItems'
                placeholder='Add items'
                type='text'
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
            />
            <button
                type='submit'
                aria-label='Add items'
            >
                <FaPlus />
            </button>
        </form>
    )
}

export default Additems
