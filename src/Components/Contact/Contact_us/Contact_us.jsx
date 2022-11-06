import React from 'react'
import { contact_us } from '../Data/dummy'
import './Contact_us.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { MdRoom } from 'react-icons/md'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { FaEnvelope } from 'react-icons/fa'

const Contact_us = () => {
  React.useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  return (
    <div className="contacts">
      <div className="container">
        <div className="app_contact">
          <div data-aos="fade-up" className="app_contact_location">
            {contact_us.map(({ icon, h3, p, p_2 }, i) => (
              <div className="app_loc_ch" key={i}>
                <h2 className="app_ch_icn">{icon}</h2>
                <div className="app_ch_content">
                  <h3>{h3}</h3>
                  <p>{p}</p>
                  <p>{p_2}</p>
                </div>
              </div>
            ))}
          </div>
          <form data-aos="fade-up" action="" className="app_contact_form">
            <div className="app_email_name">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
            </div>
            <input type="text" placeholder="Subject" />
            <textarea
              placeholder="Message"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <input type="submit" className="submit" value="send message " />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact_us
