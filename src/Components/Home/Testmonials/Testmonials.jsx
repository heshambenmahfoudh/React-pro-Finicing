import React from 'react'
import './Testmonials.css'
import { testmonials } from '../Data/dummy'

const Testmonials = () => {
  const [selector, setSelector] = React.useState(0)

  const testlenght = testmonials.length

  const auto = () => {
    setSelector(selector === testlenght - 1 ? 0 : selector + 1)
  }

  React.useEffect(() => {
    const inter = setInterval(() => {
      auto()
    }, 3000)
    return () => {
      clearInterval(inter)
    }
  }, [selector])

  return (
    <div className="testmonials">
      <div className="container">
        <div className="thead">
          <h2>Testimonials</h2>
        </div>
        <div className="app_test">
          {testmonials.map(({ img, p, h5, small }, i) => (
            <div
              className={
                i === selector ? 'app_test_content active ' : 'app_test_content'
              }
              key={i}
            >
              {i === selector && (
                <div className="app_content">
                  <img src={img} alt="" />
                  <div className="text">
                    <p>{p}</p>
                    <h5>{h5}</h5>
                    <small>{small}</small>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testmonials
