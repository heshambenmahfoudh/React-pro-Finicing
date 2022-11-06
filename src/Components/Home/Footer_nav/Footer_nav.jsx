import React from 'react'
import './Footer_nav.css'
import { AiOutlineDribbble } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
import { BsGoogle } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'

const Footer_nav = () => {
  return (
    <div className="app_navigation">
      <h2>Navigation</h2>
      <ul className="app_nav_link">
        <li>
          <a href="#">Our Vision</a>
        </li>
        <li>
          <a href="#">About us</a>
        </li>
        <li>
          <a href="#">Contact us</a>
        </li>
      </ul>
      <div className="app_nav_social">
        <h2>social</h2>
        <ul className="app_social_link">
          <li>
            <a href="#">
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a href="#">
              <BsInstagram />
            </a>
          </li>
          <li>
            <a href="#">
              <BsGoogle />
            </a>
          </li>
          <li>
            <a href="#">
              <FaLinkedinIn />
            </a>
          </li>
          <li>
            <a href="#">
              <BsTwitter />
            </a>
          </li>
          <li>
            <a href="#">
              <AiOutlineDribbble />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer_nav
