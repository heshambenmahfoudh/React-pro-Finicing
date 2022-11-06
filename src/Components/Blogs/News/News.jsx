import React from 'react'
import './News.css'
import { news } from '../Data/dummy'
import Aos from 'aos'
import 'aos/dist/aos.css'

const News = () => {
  React.useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  return (
    <div className="news">
      <div className="container">
        <div className="app_news">
          {news.map(({ img, span, a, p, a_2 }, i) => (
            <div data-aos="fade-up" className="app_news_child" key={i}>
              <div className="app_last-img">
                <img src={img} alt="" />
              </div>
              <div className="news_content">
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

export default News
