import React from 'react'
import './Header.css'
import Navbar from '../../Home/Navbar/Navbar'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Header = () => {
  React.useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  return (
    <div className="header_about">
      <div className="container">
        <Navbar />
        <div className="content">
          <h1 data-aos="fade-up">About Us</h1>
        </div>
      </div>
    </div>
  )
}

export default Header
