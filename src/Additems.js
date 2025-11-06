import React from 'react'
import { FaPlus } from 'react-icons/fa'
const Additems = () => {
    return (
        <form className='addform' >
            <label htmlFor='additem' >Add Item</label>
            <input
                autoFocus
                id='AddItems'
                placeholder='Add items'
                type='text'
                />
                <button 
                 type='submit'
                 aria-label='Add items'
                >
                      <FaPlus/>
                </button>
        </form>
    )
}

export default Additems