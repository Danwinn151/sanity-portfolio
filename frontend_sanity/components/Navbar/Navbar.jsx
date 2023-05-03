import React, { useState } from 'react'
import "./Navbar.scss"
import images from '../../src/constants/images'
import {HiMenuAlt4, HiX} from "react-icons/hi"
import {motion} from "framer-motion"

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
  return (
    <nav className='app__navbar'>
        <div className='app__navbar-logo'>
            <img src={images.logo} alt='logo'/>
        </div>
        
        <ul className='app__navbar-links'>
            {['Home', 'about', 'contact', 'work', 'skills'].map((link,index) => (
              <li className="app__flex"  key={`link-${link}`}>
                <div/>
                 <a href={`#${link}`}>{link}</a>
              </li>
            ))}
        </ul>

        <div className='app__navbar-menu'>
          <HiMenuAlt4 onClick={() => setToggle(true)}/>
          {toggle && (
            <motion.div
            whileInView={{x: [300,0]}}
            transition={{duration: 0.85, ease: 'easeOut'}}>
               <HiX onClick={() => setToggle(false)}/>
               <ul>
            {['Home', 'about', 'contact', 'work', 'skills'].map((link,index) => (
              <li key={`link-${link}`}>
                <div/>
                 <a href={`#${link}`}>{link}</a>
              </li>
            ))}
        </ul>
            </motion.div>
          )}
        </div>
    </nav>
  )
}

export default Navbar