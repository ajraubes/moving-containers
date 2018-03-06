import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/aboutus'>About us</Link></li>
        <li><Link to='/contactus'>Contact us</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header
