import React from 'react'
import Footer_company from '../Footer_company/Footer_company'
import Footer_co_right from '../Footer_co_right/Footer_co_right'
import Footer_nav from '../Footer_nav/Footer_nav'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="app_footer">
          <div className="app_about">
            <div className="app-content">
              <h2>About</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
            <div className="app_info">
              <p>43 Raymouth Rd. Baltemoer, London 3910</p>
              <span>
                <a href="#">+1(123)-456-7890</a>
              </span>
              <span>
                <a href="#">+1(123)-456-7890</a>
              </span>
              <span>
                <a href=" #">info@mydomain.com</a>
              </span>
            </div>
          </div>
          <Footer_company />
          <Footer_nav />
        </div>
        <Footer_co_right />
      </div>
    </footer>
  )
}

export default Footer
