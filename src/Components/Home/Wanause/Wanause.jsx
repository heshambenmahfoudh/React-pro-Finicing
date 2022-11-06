import React from 'react'
import './Wanause.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Wanause = () => {
  React.useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  return (
    <div className="wana">
      <div className="container">
        <div data-aos="fade-up" className="content">
          <div className="head">
            <h2>Wanna Talk To Us?</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
          <div className="link">
            <a href="#">CONTACT US</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Wanause
