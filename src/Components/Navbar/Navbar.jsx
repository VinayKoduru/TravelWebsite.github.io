import React, {useState} from 'react'
import './navbar.css'
import { SiYourtraveldottv } from "react-icons/si";
import { IoCloseSharp } from "react-icons/io5";
import { PiDotsNineBold } from "react-icons/pi";

const Navbar = () => {
  const [active, setActive] = useState('navBar')
  //Fuction to show the toggle navBar
  const showNav = ()=>{
    setActive('navBar activeNavbar')
  }
  //Function to remove toggle Navbar
  const removeNavbar = ()=>{
    setActive('navBar')
  }
  return (
    <section className='navBarSection'>
      <header className='header flex'>
        
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1> <SiYourtraveldottv className='icon'/> Travel.</h1> 
          </a>
        </div>

        <div className={active}>
          <ul className='navLists flex'>

            <li className="navItem">
              <a href="#" className="navLink">Home</a>
            </li>
            
            <li className="navItem">
              <a href="#" className="navLink">Packages</a>
            </li>
            
            <li className="navItem">
              <a href="#" className="navLink">Shop</a>
            </li>
            
            <li className="navItem">
              <a href="#" className="navLink">About</a>
            </li>
            
            <li className="navItem">
              <a href="#" className="navLink">Pages</a>
            </li>
            
            <li className="navItem">
              <a href="#" className="navLink">News</a>
            </li>
            
            <li className="navItem">
              <a href="#" className="navLink">Contact</a>
            </li>

            <button className='btn'>
              <a href="#">BOOK HERE</a>
            </button>
          </ul>
          <div onClick={removeNavbar} className="closeNavbar">
            <IoCloseSharp className="icon"/>
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
           <PiDotsNineBold className='icon'/>
        </div>

      </header>
    </section> 
  )
}

export default Navbar
