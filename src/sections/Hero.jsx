import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Environment, CameraControls, PerspectiveCamera, OrbitControls,OrthographicCamera} from '@react-three/drei'
import ShaderPlane from "../three/ShaderPlane"
import SvgBackground from '../components/SvgBackground'
import head from "../assets/head.png";

import { useEffect, useRef, useState } from "react"
import Lenis from "lenis"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"




function Hero() {



  const canvasRef = useRef(null)
  const heroRef = useRef(null)

  const [resolution, setResolution] = useState({
    width: 0,
    height: 0,
  })
  const [progress, setProgress] = useState(0); // store progress in state
  gsap.registerPlugin(ScrollTrigger)


  useEffect(() => {
    const hero = heroRef.current;
    const heroHeight = hero.offsetHeight;
    const windowHeight = window.innerHeight;
    const maxScroll = heroHeight - windowHeight;

    ScrollTrigger.create({
      trigger: '.hero-header',
      start: "bottom 80%",
      end: () => `${maxScroll}px`,
      onUpdate: (self) => {

        const scroll = self.scroll();
        const newProgress = Math.min((scroll / maxScroll) * 1.5, 2);
        setProgress(newProgress); // update state

      },
    });
  }, []);

  useEffect(() => {
    function updateResolution() {
      if (heroRef.current) {
        setResolution(

          {
            width: heroRef.current.offsetWidth,
            height: heroRef.current.offsetHeight
          }

        )
      }
    }

    updateResolution()
    window.addEventListener("resize", updateResolution)
    return () => window.removeEventListener("resize", updateResolution)
  }, [])





  useEffect(() => {
    const lenis = new Lenis({
      duration: 6,
      smooth: true,
    })

    function raf(time) {
      lenis.raf(time)
      ScrollTrigger.update()
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
    lenis.on("scroll", ScrollTrigger.update)

  }, [])






  return (
    <>

      <section ref={heroRef} className='hero '>


<SvgBackground/>
<div className='w-full h-full absolute top-0 left-0 backdrop-blur-[1.5px] '></div>

        <div className="hero-header ">
          
          <h1 className="tracking-[3px] translate-y-[-50%] text-[4rem] font-bold h-fit w-fit text-[#ffffff] text-shadow-[0_0_20px_#6e6eff80] relative ">YOU <br/> <span className='[-webkit-text-stroke:2px_#6e6eff] text-transparent '>IMAGINE</span></h1>
          <img src={head} alt="3D Head" className='w-auto h-[85svh] drop-shadow-[0_0_30px_#6e6eff99] rounded-[50%]' />
      <h1 className="tracking-[3px] translate-y-[50%] text-[4rem] font-bold h-fit w-fit text-[#ffffff] text-shadow-[0_0_20px_#6e6eff80] relative ">ME <br/> <span className='[-webkit-text-stroke:2px_#6e6eff] text-transparent'>CREATE </span></h1>
   
        </div>


        <Canvas
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance"
          }}
          dpr={[1, 2]}
          ref={canvasRef}
          className='absolute w-full h-full bottom-0 pointer-events-none'
        >
          <orthographicCamera
            makeDefault
            left={-1}
            right={1}
            top={1}
            bottom={-1}
            near={0}
            far={1}
            position={[0, 0, 1]}
          />

          <ShaderPlane resolution={resolution} progress={progress} />



        </Canvas>
        <div className="hero-content ">

          <h2>
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
            Odit ab, sed possimus quibusdam
            facere distinctio blanditiis a impedit eius
            reiciendis illum adipisci deserunt?
          </h2>

        </div>

      </section>
     



  
    </>
  )
}

export default Hero
