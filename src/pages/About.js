import React from 'react'
import Financial from '../Components/Home/Financial/Financial'
import Header from '../Components/About/Header/Header'
import Our_team from '../Components/About/Our_team/Our_team'
import Trusted_one from '../Components/About/Trusted_one/Trusted_one'
import Trusted_two from '../Components/About/Trusted_two/Trusted_two'
import Stright from '../Components/Home/Stright/Stright'

const About = () => {
  return (
    <div>
      <Header />
      <Trusted_one />
      <Trusted_two />
      <Financial />
      <Our_team />
      <Stright />
    </div>
  )
}

export default About
