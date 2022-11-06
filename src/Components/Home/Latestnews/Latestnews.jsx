import React from 'react'
import './Latestnews.css'
import img1 from '../Data/img1.jpg'
import { latestnews } from '../Data/dummy'
const Latestnews = () => {
  return (
    <div className="lastest">
      <div className="container">
        <div className="lastest-head">
          <h2>Latest News</h2>
        </div>
        <div className="app-lastest">
          {latestnews.map(({ img, span, a, p, a_2 }, i) => (
            <div className="app_lastest_child" key={i}>
              <div className="app_last-img">
                <img src={img} alt="" />
              </div>
              <div className="lastest-content">
                <span>{span}</span>
                <h3>
                  <a href="#">{a}</a>
                </h3>
                <p>{p}</p>
                <span>
                  <a href="#">{a_2}</a>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Latestnews
