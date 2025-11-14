import React from 'react'

const Searchitem = (search , setsearch ) => {
    return (
        <form className='searchitems' onSubmit={(e) => e.preventDefault()}>
         <label htmlFor='search'>Search</label>
                <input
                  id='search'
                  type='text'
                  role='searchbox'
                  placeholder='Search item'
                  value={search}
                  onChange={(e) => setsearch(e.target.value)}

                 />
        </form>
    )
}

export default Searchitem