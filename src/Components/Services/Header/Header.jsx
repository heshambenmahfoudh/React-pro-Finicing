import React from 'react'
import Navbar from '../../Home/Navbar/Navbar'
import './Header.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Header = () => {
  React.useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])
  return (
    <div className="header_services">
      <div className="container">
        <Navbar />
        <div className="content">
          <h1 data-aos="fade-up">Our Services</h1>
        </div>
      </div>
    </div>
  )
}

export default Header
