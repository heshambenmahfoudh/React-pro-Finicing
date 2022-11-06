import React from 'react'
import './Financial.css'
import { financial } from '../Data/dummy.js'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { BsFillBagCheckFill, BsFillWalletFill } from 'react-icons/bs'

const Financial = () => {
  React.useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  return (
    <div className="financial">
      <div className="container">
        <div className="app-finan">
          {financial.map((item, i) => (
            <article data-aos="fade-up" key={i}>
              <span
                style={{ color: '#fff', fontSize: '50px', marginTop: '10px' }}
              >
                {item.icon}
              </span>
              <div>
                <h3>{item.h3}</h3>
                <p>{item.p}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Financial
