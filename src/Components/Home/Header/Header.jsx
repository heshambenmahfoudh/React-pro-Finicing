import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Header.css'
import img1 from '../Data/img1.jpg'
import { header } from '../Data/dummy.js'
import { Link } from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Header = () => {
  React.useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  return (
    <div className="header">
      <div className="container">
        <Navbar />
        <div data-aos="fade-up" className="content">
          {header.map((item, i) => (
            <div className="text" key={i}>
              <h1>{item.h1}</h1>
              <p>{item.p}</p>
              <ul className="link_contact">
                <li>
                  <Link to="/contacts">{item.li}</Link>
                </li>
              </ul>
            </div>
          ))}
          <div className="image">
            <img src={img1} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
