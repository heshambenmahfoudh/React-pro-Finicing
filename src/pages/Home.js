import React from 'react'
import Casestudy from '../Components/Home/Casestudy/Casestudy'
import Financial from '../Components/Home/Financial/Financial'
import Forward from '../Components/Home/Forward/Forward'
import Header from '../Components/Home/Header/Header'
import Latestnews from '../Components/Home/Latestnews/Latestnews'
import Services from '../Components/Home/Services/Services'
import Stright from '../Components/Home/Stright/Stright'
import Testmonials from '../Components/Home/Testmonials/Testmonials'
import Wanause from '../Components/Home/Wanause/Wanause'

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
