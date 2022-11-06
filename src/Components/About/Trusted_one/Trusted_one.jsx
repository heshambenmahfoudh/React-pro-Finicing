import React from 'react'
import './Trusted_one.css'
import img1 from '../Data/img1.jpg'

const Trusted_one = () => {
  return (
    <div className="trusted">
      <div className="app_trusted">
        <div className="tru_img">
          <img src={img1} alt="" />
        </div>
        <div className="tru_content">
          <h2>We are trusted by more than 5,000 clients</h2>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
          <span>
            <a href="#" className="dd">
              Read more
            </a>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Trusted_one
