import './App.css'
import About from './sections/About.jsx'
import Hero from './sections/Hero.jsx'
import Experiences from './sections/Experiences.jsx'
import Lenis from "lenis"
import { useEffect } from 'react'

import gsap from "gsap"
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
    <Experiences/>
    </>
  )
}

export default App
