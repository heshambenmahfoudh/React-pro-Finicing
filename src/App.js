import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import Blogs from './Components/Blogs/Blogs'
import Services from './Components/Services/Services'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Home/Footer/Footer'
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
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
      </BrowserRouter>
    </div>
  )
}

export default App
