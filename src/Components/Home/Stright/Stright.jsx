import React from 'react'
import './Stright.css'
import img3 from '../Data/img3.jpg'
import { stright } from '../Data/dummy.js'
import { BsFillWalletFill, BsPieChartFill } from 'react-icons/bs'

const Stright = () => {
  return (
    <div className="stright_con">
      <div className="container">
        <div className="stright">
          <div className="image">
            <img src={img3} alt="" />
          </div>
          {stright.map((item, i) => (
            <div className="content" key={i}>
              <article>
                <h3>{item.h3}</h3>
                <p>{item.p}</p>
              </article>

              {item.check.map((item, i) => (
                <article key={i}>
                  <div
                    className="check"
                    style={{ color: 'blue', fontSize: '22px' }}
                  >
                    {item.ch}
                  </div>
                  <h3> {item.h3} </h3>
                  <p>{item.p}</p>
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Stright
