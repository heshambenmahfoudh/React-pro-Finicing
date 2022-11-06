import React from 'react'
import Financial from '../Home/Financial/Financial'

import Header from './Header/Header'
import Our_team from './Our_team/Our_team'
import Trusted_one from './Trusted_one/Trusted_one'
import Trusted_two from './Trusted_two/Trusted_two'

const About = () => {
  return (
    <div>
      <Header />
      <Trusted_one />
      <Trusted_two />
      <Financial />
      <Our_team />
    </div>
  )
}

export default About
