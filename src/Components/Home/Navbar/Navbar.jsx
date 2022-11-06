import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { FaAngleDown, FaAngleUp, FaPhoneAlt } from 'react-icons/fa'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [menu, setMenu] = React.useState(false)
  const [childmenu, setChildmenu] = React.useState(false)

  const closeMenu = (e) => {
    e.path[1].tagName !== 'SPAN' && setMenu(false)
  }
  document.body.addEventListener('click', closeMenu)

  return (
    <div className="navbar">
      <div className="logo">
        <NavLink to="/">
          <h1>Financing</h1>
        </NavLink>
      </div>{' '}
      <span>
        <AiOutlineMenu className="open_links" onClick={() => setMenu(true)} />{' '}
      </span>{' '}
      <ul className="links_navbar">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="child">
          <NavLink to="/">
            Pages{' '}
            <span className="icon">
              <FaAngleDown style={{ fontSize: '10px' }} />
            </span>
          </NavLink>
          <ul className="drop">
            <li>Finiching</li>
            <li>Blog single</li>
            <li>Case study Details</li>
            <li>Menu one</li>
            <li>Case study Details</li>
            <li>Menu one</li>
            <li>Menu two</li>
          </ul>
        </li>
        <li>
          <NavLink to="/blogs">Blogs</NavLink>
        </li>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/abouts">About</NavLink>
        </li>
        <li>
          <NavLink to="/contacts">Contact us</NavLink>
        </li>
      </ul>
      {menu && (
        <motion.ul
          className="links_menu"
          initial={{ x: '100%' }}
          whileInView={{ x: '0%' }}
          transition={{ type: 'tween', duration: 0.6 }}
        >
          <AiOutlineClose
            className="close_links_menu"
            onClick={() => setMenu(false)}
          />
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="child">
            <div>
              <NavLink to="/">Pages </NavLink>{' '}
              <span
                className="icon"
                onClick={() => setChildmenu((prev) => !prev)}
              >
                {childmenu === true ? <FaAngleUp /> : <FaAngleDown />}
              </span>
            </div>
            {childmenu && (
              <ul className="drop">
                <li>Finiching</li>
                <li>Blog single</li>
                <li>Case study Details</li>
                <li>Menu one</li>
                <li>Case study Details</li>
                <li>Menu one</li>
                <li>Menu two</li>
              </ul>
            )}
          </li>
          <li>
            <NavLink to="/blogs">Blogs</NavLink>
          </li>
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>
          <li>
            <NavLink to="/abouts">About</NavLink>
          </li>
          <li>
            <NavLink to="/contacts">Contact us</NavLink>
          </li>
        </motion.ul>
      )}
      <div className="contact">
        <span>
          <FaPhoneAlt style={{ fontSize: '13px' }} />
        </span>
        <span>123-489-9381</span>
      </div>
    </div>
  )
}

export default Navbar
