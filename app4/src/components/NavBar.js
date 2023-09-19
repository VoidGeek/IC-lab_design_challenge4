import React from 'react'
import {Link} from "react-router-dom"
import 'boxicons'
const NavBar = () => {
  return (
    <>
      <nav className='navbar bg-dark text-white'>
        <Link to={"/"} className='mx-2 h3 text-decoration-none text-white'>Design Challenge 4</Link>
        <a className='d-flex text-decoration-none text-white me-2' href='https://github.com/VoidGeek' target='_blank'>
            <div className='me-1'><box-icon name='github' type='logo' color='#fefefe'></box-icon></div>
            <h5>GitHub</h5>
        </a>
      </nav>
    </>
  )
}

export default NavBar
