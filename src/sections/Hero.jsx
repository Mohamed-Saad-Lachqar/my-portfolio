import { Canvas } from '@react-three/fiber'
import ShaderPlane from "../three/ShaderPlane"
import SvgBackground from '../components/SvgBackground'
import head from "../assets/head.png";
import { useEffect, useRef, useState } from "react"
import Lenis from "lenis"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import ScrollTextFill from '../components/ScrollTextFill';




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
    console.log(maxScroll)

    ScrollTrigger.create({
      trigger: '.hero-header',
      start: "bottom 80%",
      end: () => `${maxScroll}px`,
      onUpdate: (self) => {
        // self.progress is 0 → 1 between start and end
        // self.direction: 1 = scrolling down, -1 = scrolling up
        let newProgress = (self.scroll() / maxScroll) * 2;

        // Reset to 0 if we scroll back before start
        if (self.progress <= 0) {
          newProgress = 0;
        }

        setProgress(newProgress);
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

      <section ref={heroRef} className=' overflow-hidden relative w-full h-[175svh] bg-(--dark-color) '>


        <SvgBackground />
        <div className='w-full h-full absolute top-0 left-0 backdrop-blur-[2px] '></div>

        <div className="hero-header font-(family-name:--font-poppins) text-center max-md:flex-col absolute w-full h-svh flex top-0 left-0 justify-center items-center gap-0.5 ">

          <h1 className="-rotate-45 max-md:rotate-0 tracking-[4px] max-md:leading-[3rem] leading-[4.5rem] translate-y-[-50%] max-lg:text-[2.5rem] text-[4rem] font-bold h-fit w-fit text-(--light-color) text-shadow-[0_0_20px_#5B4DF4] relative ">YOU <br /> <span className='[-webkit-text-stroke:2px_#5B4DF4] text-transparent '>IMAGINE</span><br /> IT </h1>
          <img src={head} alt="3D Head" className='w-auto max-md:h-[35svh] max-lg:h-[50svh] h-[85svh] drop-shadow-[2px_2px_30px_#6e6eff] rounded-[50%]' />
          <h1 className="rotate-45 max-md:rotate-0 max-md:leading-[3rem] tracking-[3px] leading-[4.5rem] translate-y-[50%] max-lg:text-[2.5rem] text-[4rem] font-bold h-fit w-fit text-(--light-color) text-shadow-[0_0_20px_#5B4DF4] relative ">ME <br /> <span className='[-webkit-text-stroke:2px_#5B4DF4] text-transparent'>CREATE </span><br /> IT  </h1>

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


        <div className=" absolute bottom-0 left-0 h-[75svh] w-full flex items-center justify-center text-center text-(--light-color) font-(family-name:--font-bebas) font-bold">



          <ScrollTextFill className=" text-[6rem] w-[75%]  text-shadow-[0_0_10px_#5B4DF4] leading-[6rem] "
            text={`YOUR IDEA TAKES\n <span class="highlight">FLIGHT</span>\nI BUILD THE\n <span class="highlight" >WINGS</span>`}
            split="chars"
            stagger={0.05}
          />

        </div>

      </section>





    </>
  )
}

export default Hero
