import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Prj1 from '../assets/prj1.png'
import Prj2 from '../assets/prj2.png'
import Prj3 from '../assets/prj3.png'
import Prj4 from '../assets/prj4.png'
import Prj5 from '../assets/prj5.png'
gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Projets() {

  const CardsFinalPos = [
    [-200, -160],
    [120, -160],
    [-160, 40],
    [20, 30],
    [-50, -140],
  ];

  const CardsRef = useRef([]);
  const Spotlight = useRef();


  useGSAP(() => {

    const Cards = CardsRef.current;

    ScrollTrigger.create({
      trigger: Spotlight.current,
      start: "top top",
      end: `+${window.innerHeight * 4}px`,
      pin: true,
      pinSpacing: true,
      scrub: 1,
      onUpdate: (self) => {

        const progress = self.progress;
        const initialRotaions = [5, -3, 3.5, -1, 5];
        const phaseOneStartOffsets = [0, 0.1, 0.2, 0.3,0.4];

        Cards.forEach((Card, index) => {

          const initialRotaion = initialRotaions[index];
          const phase1Start = phaseOneStartOffsets[index];
          const phase1End = Math.min(phase1Start + (0.5 - phase1Start) * 0.9, 0.5);

          let x = -50;
          let y, rotation;



          if (progress < phase1Start) {
            y = 200;
            rotation = initialRotaion;

          } else if (progress <= 0.5) {
            let phase1progress;
            if (progress >= phase1End) {
              phase1progress = 1;
            } else {
              const linearProgress = (progress - phase1Start) / (phase1End - phase1Start);
              phase1progress = 1 - Math.pow(1 - linearProgress, 3)
            }
            y = 200 - phase1progress * 250;
            rotation = initialRotaion;

          } else {
            y = -50;
            rotation = initialRotaion;
          }
          /*=======================phase2=================== */
          const phaseTwoStartOffsets = [0.5, 0.55, 0.6, 0.65,0.7];
          const phase2Start = phaseTwoStartOffsets[index]
          const phase2End = Math.min(phase2Start + (0.95 - phase2Start) * 0.9, 0.95);

          const finalX = CardsFinalPos[index][0];
          const finalY = CardsFinalPos[index][1];

          if (progress >= phase2Start && progress <= 0.95) {

            let phase2progress;

            if (progress >= phase2End) {
              phase2progress = 1;
            } else {

              const linearProgress = (progress - phase2Start) / (phase2End - phase2Start);
              phase2progress = 1 - Math.pow(1 - linearProgress, 3)
            }

            x = -50 + (finalX + 50) * phase2progress;
            y = -50 + (finalY + 50) * phase2progress;
            rotation = initialRotaion * (1 - phase2progress);
          } else if (progress > 0.95) {
            x = finalX;
            y = finalY;
            rotation = 0;

          }

          gsap.set(Card, {
            transform: `translate(${x}%,${y}%) rotate(${rotation}deg)`,
          })



        })
      }
    })
  })


  return (
    <>
      <section ref={Spotlight} className=" relative overflow-hidden w-full min-h-svh flex justify-center items-center bg-(--light-color) text-(--dark-color) flex-col ">


        <h1 className='text-center  text-[5rem] max-md:text-[3rem] font-(family-name:--font-bebas) font-semibold ' ><span className='highlight' > some</span> of <span className='highlight' > my</span> work :</h1>


        {/*===========================================================================cards============================================================================================ */}
        <div className="absolute top-0 left-0 w-full h-full  ">


          <div ref={(el) => (CardsRef.current[0] = el)} className="group absolute top-[50%] left-[50%] overflow-hidden w-[20rem] rounded-2xl aspect-[7/4] translate-x-[-50%] translate-y-[200%]">
            <div className="absolute w-full h-0 overflow-hidden z-10 duration-[.5s] group-hover:h-full left-0 bottom-0 bg-gradient-to-b from-black/80 to-[#a652f4] text-(--light-color) flex justify-center items-center">
              <h1>see more</h1>
            </div>
            <img src={Prj1} alt="" className='group-hover:scale-110 duration-[.5s] object-cover w-full h-full' />
          </div>


          <div ref={(el) => (CardsRef.current[1] = el)} className="group absolute top-[50%] left-[50%] overflow-hidden w-[20rem] rounded-2xl aspect-[7/4] translate-x-[-50%] translate-y-[200%]">
            <div className="absolute w-full h-0 z-10 overflow-hidden duration-[.5s] group-hover:h-full left-0 bottom-0 bg-gradient-to-b from-black/80 to-[#a652f4] text-(--light-color) flex justify-center items-center">
              <h1>see more</h1>
            </div>
            <img src={Prj2} alt="" className='group-hover:scale-110 ease duration-[.4s] object-cover w-full h-full' />
          </div>


          <div ref={(el) => (CardsRef.current[2] = el)} className="group absolute top-[50%] left-[50%] overflow-hidden w-[20rem] rounded-2xl aspect-[7/4] translate-x-[-50%] translate-y-[200%]">
            <div className="absolute w-full h-0 z-10 overflow-hidden duration-[.5s] group-hover:h-full left-0 bottom-0 bg-gradient-to-b from-black/80 to-[#a652f4] text-(--light-color) flex justify-center items-center">
              <h1>see more</h1>
            </div>
            <img src={Prj3} alt="" className='group-hover:scale-110 ease duration-[.4s] object-cover w-full h-full' />
          </div>


          <div ref={(el) => (CardsRef.current[3] = el)} className="group absolute top-[50%] left-[50%] overflow-hidden w-[20rem] rounded-2xl aspect-[7/4] translate-x-[-50%] translate-y-[200%]">
            <div className="absolute w-full h-0 z-10 overflow-hidden duration-[.5s] group-hover:h-full left-0 bottom-0 bg-gradient-to-b from-black/80 to-[#a652f4] text-(--light-color) flex justify-center items-center">
              <h1>see more</h1>
            </div>
            <img src={Prj4} alt="" className='group-hover:scale-110 ease duration-[.4s] object-cover w-full h-full' />
          </div>


          <div ref={(el) => (CardsRef.current[4] = el)} className="group absolute top-[50%] left-[50%] overflow-hidden w-[20rem] rounded-2xl aspect-[7/4] translate-x-[-50%] translate-y-[200%]">
            <div className="absolute w-full z-10 h-0 overflow-hidden ease duration-[.4s] group-hover:h-full left-0 bottom-0 bg-gradient-to-b from-black/80 to-[#a652f4] text-(--light-color) flex justify-center items-center">
              <h1>see more</h1>
            </div>
            <img src={Prj5} alt="" className='group-hover:scale-110 ease duration-[.4s] object-cover w-full h-full' />
          </div>

        </div>

      </section>
    </>
  )
}
