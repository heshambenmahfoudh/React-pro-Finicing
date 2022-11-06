import React from 'react'
import { our_team } from '../Data/dummy'
import './Our_team.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Our_team = () => {
  React.useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  return (
    <div className="team">
      <div className="container">
        <div data-aos="fade-up" className="team_head">
          <h2>Our team</h2>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
        <div className="team_teams">
          {our_team.map(({ img, h3, p }, i) => (
            <div data-aos="fade-up" className="team_row" key={i}>
              <div className=" img_team">
                <img src={img} alt="" />
              </div>
              <div className="team_info">
                <h3>{h3} </h3>
                <p>{p}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Our_team
