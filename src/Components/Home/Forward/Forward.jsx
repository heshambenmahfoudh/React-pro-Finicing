import React from 'react'
import './Forward.css'
import img1 from '../Data/img1.jpg'
import { forward } from '../Data/dummy.js'
const Forward = () => {
  return (
    <div className="forward">
      <div className="container">
        <div className="app-forward">
          <div className="a-content">
            <div className="a-head">
              <h3>Straight-forward way of financing</h3>
            </div>
            <div className="text">
              {forward.map((item, i) => (
                <article key={i}>
                  <div
                    className="check"
                    style={{ color: 'blue', fontSize: '22px' }}
                  >
                    {item.ch}
                  </div>
                  <h3>{item.h3}</h3>
                  <p>{item.p}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="a-image">
            <img src={img1} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Forward
