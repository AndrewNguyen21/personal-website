import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import InfoSection from '../components/InfoSection'
import {
  homeObjOne,
  homeObjTwo,
} from '../components/InfoSection/Data'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default Home
