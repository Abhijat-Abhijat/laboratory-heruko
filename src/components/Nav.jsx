import React from 'react';
import {Link} from 'react-router-dom';
import { FaRegNewspaper , FaPaperclip, FaAddressBook, FaFolderMinus, FaHome} from "react-icons/fa";
function Nav() {
  return (
    <footer className='BottomNav'>
        <Link to='/'><FaHome/> Home</Link>
        <Link to='/research'>Research</Link>
        <Link to='/news'><FaRegNewspaper/> News</Link>
        <Link to='/people'><FaAddressBook/> People</Link>
        <Link to='/gallery'><FaFolderMinus/> Gallery</Link>
        <Link to='/publications'><FaPaperclip/> Publications</Link>
        <Link to='/contact'>Contact</Link>
    </footer>
  )
}

export default Nav;