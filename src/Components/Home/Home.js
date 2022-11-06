import React from 'react'
import Casestudy from './Casestudy/Casestudy'
import Financial from './Financial/Financial'
import Forward from './Forward/Forward'
import Header from './Header/Header'
import Latestnews from './Latestnews/Latestnews'
import Services from './Services/Services'
import Stright from './Stright/Stright'
import Testmonials from './Testmonials/Testmonials'
import Wanause from './Wanause/Wanause'

const Home = () => {
  return (
    <div>
      <Header />
      <Stright />
      <Financial />
      <Forward />
      <Services />
      <Wanause />
      <Casestudy />
      <Testmonials />
      <Latestnews />
    </div>
  )
}

export default Home
