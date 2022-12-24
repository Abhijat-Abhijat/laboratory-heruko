import React from 'react'
import logo from '../assets/logo.jpeg'
function Header() {
  return (
    <nav>
        <img src={logo} alt="" />
        <main>
            <h1>Laboratory of Cancer Biology</h1>
            <h2>University School of Biotechnology</h2>
        </main>
    </nav>
  )
}

export default Header;