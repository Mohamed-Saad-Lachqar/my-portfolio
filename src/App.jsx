import './App.css'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Environment, CameraControls, PerspectiveCamera, OrbitControls,OrthographicCamera} from '@react-three/drei'
import ShaderPlane from "./three/ShaderPlane"
import Hero from "./sections/Hero.jsx"
import About from './sections/About.jsx'


import { useEffect, useRef, useState } from "react"
import Lenis from "lenis"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"




function App() {







  return (
    <>
    <Hero/>
    <About/>

    </>
  )
}

export default App
