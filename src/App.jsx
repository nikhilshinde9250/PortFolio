import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'

import Experience from './components/Experience'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Projects from './components/projects'
const App = () => {
  return (
   <>
   <Navbar />
    <Home />
    <About />
    <Projects/>
    <Experience />
    <Contact />
    <Footer />
   </>
  )
}

export default App
