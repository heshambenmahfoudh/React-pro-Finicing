import React from 'react'
import './Services.css'
import { services } from '../Data/dummy.js'

import Aos from 'aos'
import 'aos/dist/aos.css'
import { BsCashCoin, BsGear, BsGraphUp, BsLayers } from 'react-icons/bs'
import { HiOutlineFingerPrint } from 'react-icons/hi'
import { BiMessageRoundedDetail } from 'react-icons/bi'

const Services = () => {
  React.useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])
  return (
    <div className="services">
      {services.map((item, i) => (
        <div className="container" key={i}>
          <div data-aos="fade-up" className="head">
            <h1>{item.h1}</h1>
            <p>{item.p}</p>
          </div>
          <div data-aos="fade-up" className="app-services">
            {item.article.map((item, i) => (
              <article key={i}>
                <span className="icon">{item.icon}</span>
                <h3>{item.h3}</h3>
                <p>{item.p}</p>
                <a href="#">{item.a}</a>
              </article>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Services
