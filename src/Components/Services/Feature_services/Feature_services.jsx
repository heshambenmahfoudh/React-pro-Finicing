import React from 'react'
import './Feature_services.css'
import { feature_ervices } from '../Data/dummy.js'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Feature_ervices = () => {
  React.useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  return (
    <div className="feature_services">
      {feature_ervices.map((item, i) => (
        <div className="container" key={i}>
          <div data-aos="fade-up" className="head">
            <h1>{item.h1}</h1>
            <p>{item.p}</p>
          </div>
          <div data-aos="fade-up" className="app_services">
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

export default Feature_ervices
