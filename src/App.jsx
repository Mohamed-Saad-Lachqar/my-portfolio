import './App.css'
import About from './sections/About.jsx'
import Hero from './sections/Hero.jsx'
import Experiences from './sections/Experiences.jsx'
import Education from './sections/Education.jsx'
import Contact from './sections/Contact.jsx'
import Lenis from "lenis"
import { useEffect } from 'react'
import Projets from './sections/Projets.jsx'
import gsap from "gsap"
import Skills from './sections/Skills.jsx'
import { ScrollTrigger } from "gsap/ScrollTrigger"



function App() {


  useEffect(() => {
  gsap.registerPlugin(ScrollTrigger)


    const lenis = new Lenis({
      duration: 4,
      smooth: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
    lenis.on("scroll", ScrollTrigger.update)

  }, [])

  return (
    <>
    <Hero/>
    <About/>
    <Skills/>
    <Education/>
    <Experiences/>
    <Projets/>
    <Contact/>
    </>
  )
}

export default App
