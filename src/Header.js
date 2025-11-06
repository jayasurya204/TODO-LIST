import React from 'react'

const Header = (props) => {

  return (
<header className='header'>
    <h1>{props.title} </h1>
    <h1> SURYA </h1>
  </header>
  )
}

Header.defaultProps = {
   title:" TO DO LIST "
}


export default Header
