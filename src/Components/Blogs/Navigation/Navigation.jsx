import React from 'react'
import './Navigation.css'

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="container">
        <ul className="app_navigation">
          <li>
            <a className="active" href="#">
              1
            </a>
          </li>
          <li>
            <a href="#">2</a>
          </li>
          <li>
            <a href="#">3</a>
          </li>
          <li>
            <a href="#">4</a>
          </li>
          <li>
            <a href="#">5</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navigation
