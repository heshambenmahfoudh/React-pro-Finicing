import React from 'react'
import './Casestudy.css'
import { casestudy } from '../Data/dummy'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Casestudy = () => {
  const scrollbar_ref = React.useRef(null)

  React.useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  const scrollbar = (dir) => {
    const sc_Ref = scrollbar_ref.current
    dir === 'left'
      ? (sc_Ref.scrollLeft += sc_Ref.clientWidth / 3)
      : (sc_Ref.scrollLeft -= sc_Ref.clientWidth / 3)
  }
  return (
    <div className="casestudy">
      <div data-aos="fade-up" className="chead">
        <h2>Casestudies</h2>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
      </div>
      <div data-aos="fade-up" className="a-sclick">
        <span onClick={() => scrollbar('right')}>PREV</span>
        <span onClick={() => scrollbar('left')}>NEXT</span>
      </div>
      <div className="appslide" ref={scrollbar_ref}>
        {casestudy.map((item, index) => (
          <div data-aos="fade-up" className="slide" key={index}>
            <div className="slide-img">
              <img src={item.img} alt="" />
            </div>
            <div className="slide-text">
              <h3>{item.h3}</h3>
              <p>{item.p}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Casestudy
