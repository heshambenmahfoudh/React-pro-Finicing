import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Blogs from './pages/Blog'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './Components/Home/Footer/Footer'
const App = () => {
  return (
    <div className="App">
 
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="*" element={<Home />} />
          <Route exact path="/blogs" element={<Blogs />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/abouts" element={<About />} />
          <Route exact path="/contacts" element={<Contact />} />
        </Routes>
        <div className="Footer">
          <Footer />
        </div>
  
    </div>
  )
}

export default App
