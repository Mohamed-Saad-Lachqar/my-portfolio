import React from 'react'
import SvgBackground from '../components/SvgBackground'
import ScrollTextFill from '../components/ScrollTextFill'
import MyImg from '../assets/1.png'
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


function About() {



  const blobRef = useRef();
  const aboutRef = useRef();


  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: aboutRef.current,
        start: "top top",
        end: "+=100%",           // ← most likely what you want
        pin: true,
        pinSpacing: true,
        // anticipatePin: 1       // optional — reduces pin flash on fast scroll
      });

      gsap.to(blobRef.current, {
        y: 25,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        borderRadius: "49% 51% 55% 45% / 43% 59% 41% 57%",
      });
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="about  relative w-full min-h-svh flex justify-center items-center bg-(--dark-color) text-(--light-color) flex-col ">

      <svg className='w-full absolute top-[-5px] left-0  ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#B5BABE" fill-opacity="1" d="M0,64L6.2,74.7C12.3,85,25,107,37,133.3C49.2,160,62,192,74,197.3C86.2,203,98,181,111,197.3C123.1,213,135,267,148,272C160,277,172,235,185,192C196.9,149,209,107,222,117.3C233.8,128,246,192,258,197.3C270.8,203,283,149,295,117.3C307.7,85,320,75,332,64C344.6,53,357,43,369,42.7C381.5,43,394,53,406,64C418.5,75,431,85,443,122.7C455.4,160,468,224,480,261.3C492.3,299,505,309,517,282.7C529.2,256,542,192,554,154.7C566.2,117,578,107,591,96C603.1,85,615,75,628,90.7C640,107,652,149,665,170.7C676.9,192,689,192,702,170.7C713.8,149,726,107,738,90.7C750.8,75,763,85,775,80C787.7,75,800,53,812,37.3C824.6,21,837,11,849,53.3C861.5,96,874,192,886,208C898.5,224,911,160,923,117.3C935.4,75,948,53,960,64C972.3,75,985,117,997,117.3C1009.2,117,1022,75,1034,90.7C1046.2,107,1058,181,1071,202.7C1083.1,224,1095,192,1108,170.7C1120,149,1132,139,1145,122.7C1156.9,107,1169,85,1182,106.7C1193.8,128,1206,192,1218,208C1230.8,224,1243,192,1255,154.7C1267.7,117,1280,75,1292,90.7C1304.6,107,1317,181,1329,218.7C1341.5,256,1354,256,1366,218.7C1378.5,181,1391,107,1403,85.3C1415.4,64,1428,96,1434,112L1440,128L1440,0L1433.8,0C1427.7,0,1415,0,1403,0C1390.8,0,1378,0,1366,0C1353.8,0,1342,0,1329,0C1316.9,0,1305,0,1292,0C1280,0,1268,0,1255,0C1243.1,0,1231,0,1218,0C1206.2,0,1194,0,1182,0C1169.2,0,1157,0,1145,0C1132.3,0,1120,0,1108,0C1095.4,0,1083,0,1071,0C1058.5,0,1046,0,1034,0C1021.5,0,1009,0,997,0C984.6,0,972,0,960,0C947.7,0,935,0,923,0C910.8,0,898,0,886,0C873.8,0,862,0,849,0C836.9,0,825,0,812,0C800,0,788,0,775,0C763.1,0,751,0,738,0C726.2,0,714,0,702,0C689.2,0,677,0,665,0C652.3,0,640,0,628,0C615.4,0,603,0,591,0C578.5,0,566,0,554,0C541.5,0,529,0,517,0C504.6,0,492,0,480,0C467.7,0,455,0,443,0C430.8,0,418,0,406,0C393.8,0,382,0,369,0C356.9,0,345,0,332,0C320,0,308,0,295,0C283.1,0,271,0,258,0C246.2,0,234,0,222,0C209.2,0,197,0,185,0C172.3,0,160,0,148,0C135.4,0,123,0,111,0C98.5,0,86,0,74,0C61.5,0,49,0,37,0C24.6,0,12,0,6,0L0,0Z"></path>
      </svg>
      <div ref={aboutRef} className='p-[5rem] min-h-svh mt-[12rem] max-md:py-[1rem] ' >

        <h1 className='text-center  text-[6rem] font-(family-name:--font-bebas) font-bold ' >who <span className='highlight' > am</span> I ?</h1>

        <div className="w-full mt-[1rem] max-md:mt-[1rem] flex-wrap-reverse  text-(--light-color) flex justify-center items-center gap-[3rem]">


          <ScrollTextFill className=" text-[2.5rem] max-md:text-center max-md:text-[1.5rem]  font-medium  w-[50%] max-md:w-full  font-(family-name:--font-bebas) "
            text="Hi, I’m Mhamed-Saad Lachqar, a 22-year-old web developer. I create dynamic, user-friendly websites and apps, blending clean code with creative design. Always learning and exploring new technologies, I turn ideas into functional, engaging web experiences."
            end='bottom top'
            start='top center'
            stagger={2}
          />
          <div ref={blobRef} className=' w-[30rem] max-md:w-[18rem] overflow-hidden  aspect-square [border-radius:35%_65%_35%_65%/55%_41%_59%_45%]  border-[7px] border-transparent shadow-[0_0_10px_10px_#5B4DF4] border-solid ' >
            <img src={MyImg} alt="" className='drop-shadow-[0_4px_6px_#5B4DF4] w-full h-full object-cover' />
          </div>
        </div>


      </div>

    </section>
  )
}

export default About