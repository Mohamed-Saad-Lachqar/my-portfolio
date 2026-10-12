import React from 'react'
import LettersDrop from '../components/LettersDrop';
import { useLayoutEffect, useRef } from "react";
import ScrollTextFill from '../components/ScrollTextFill'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MyImg from '../assets/4.png'
import C from '../assets/icon/programing_languages/c.svg'
import JS from '../assets/icon/programing_languages/js.svg'
import Java from '../assets/icon/programing_languages/java.svg'
import PHP from '../assets/icon/programing_languages/php.svg'
import Html from '../assets/icon/programing_languages/html.svg'
import Css from '../assets/icon/programing_languages/css.svg'
import Reacticon from '../assets/icon/frameworks_and_liberaries/react.svg'
import Node from '../assets/icon/frameworks_and_liberaries/node.svg'
import GsapIcon from '../assets/icon/frameworks_and_liberaries/gsap.svg'
import Express from '../assets/icon/frameworks_and_liberaries/express.svg'
import Tailwind from '../assets/icon/frameworks_and_liberaries/tailwind.svg'
import Mysql from '../assets/icon/datebases/mysql.svg'
import Mongo from '../assets/icon/datebases/mongo.svg'
import Oracle from '../assets/icon/datebases/oracledb.svg'
import Wordpress from '../assets/icon/tools_platformes/wordpress.svg'
import Git from '../assets/icon/tools_platformes/git.svg'
import Elementor from '../assets/icon/tools_platformes/elementor.svg'
import Figma from '../assets/icon/tools_platformes/figma.svg'
import Xampp from '../assets/icon/tools_platformes/xampp.svg'


export default function Skills() {



    return (
        <>
            <section className=' w-full h-fit  overflow-hidden min-h-[120svh] bg-(--light-color) relative flex justify-center items-center ' >
                <svg className='w-full absolute top-[-5px] left-0  ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#1B1A1A" fill-opacity="1" d="M0,128L6.2,112C12.3,96,25,64,37,90.7C49.2,117,62,203,74,229.3C86.2,256,98,224,111,192C123.1,160,135,128,148,106.7C160,85,172,75,185,64C196.9,53,209,43,222,69.3C233.8,96,246,160,258,192C270.8,224,283,224,295,202.7C307.7,181,320,139,332,128C344.6,117,357,139,369,165.3C381.5,192,394,224,406,218.7C418.5,213,431,171,443,133.3C455.4,96,468,64,480,42.7C492.3,21,505,11,517,21.3C529.2,32,542,64,554,106.7C566.2,149,578,203,591,197.3C603.1,192,615,128,628,112C640,96,652,128,665,133.3C676.9,139,689,117,702,138.7C713.8,160,726,224,738,224C750.8,224,763,160,775,122.7C787.7,85,800,75,812,96C824.6,117,837,171,849,186.7C861.5,203,874,181,886,181.3C898.5,181,911,203,923,213.3C935.4,224,948,224,960,202.7C972.3,181,985,139,997,122.7C1009.2,107,1022,117,1034,117.3C1046.2,117,1058,107,1071,117.3C1083.1,128,1095,160,1108,186.7C1120,213,1132,235,1145,234.7C1156.9,235,1169,213,1182,186.7C1193.8,160,1206,128,1218,117.3C1230.8,107,1243,117,1255,101.3C1267.7,85,1280,43,1292,53.3C1304.6,64,1317,128,1329,149.3C1341.5,171,1354,149,1366,170.7C1378.5,192,1391,256,1403,272C1415.4,288,1428,256,1434,240L1440,224L1440,0L1433.8,0C1427.7,0,1415,0,1403,0C1390.8,0,1378,0,1366,0C1353.8,0,1342,0,1329,0C1316.9,0,1305,0,1292,0C1280,0,1268,0,1255,0C1243.1,0,1231,0,1218,0C1206.2,0,1194,0,1182,0C1169.2,0,1157,0,1145,0C1132.3,0,1120,0,1108,0C1095.4,0,1083,0,1071,0C1058.5,0,1046,0,1034,0C1021.5,0,1009,0,997,0C984.6,0,972,0,960,0C947.7,0,935,0,923,0C910.8,0,898,0,886,0C873.8,0,862,0,849,0C836.9,0,825,0,812,0C800,0,788,0,775,0C763.1,0,751,0,738,0C726.2,0,714,0,702,0C689.2,0,677,0,665,0C652.3,0,640,0,628,0C615.4,0,603,0,591,0C578.5,0,566,0,554,0C541.5,0,529,0,517,0C504.6,0,492,0,480,0C467.7,0,455,0,443,0C430.8,0,418,0,406,0C393.8,0,382,0,369,0C356.9,0,345,0,332,0C320,0,308,0,295,0C283.1,0,271,0,258,0C246.2,0,234,0,222,0C209.2,0,197,0,185,0C172.3,0,160,0,148,0C135.4,0,123,0,111,0C98.5,0,86,0,74,0C61.5,0,49,0,37,0C24.6,0,12,0,6,0L0,0Z"></path>
                </svg>
                <div className='p-[5rem] min-h-svh mt-[12rem] max-md:py-[1rem] w-full ' >

                    <h1 className='text-center  text-[5rem] font-(family-name:--font-bebas) font-semibold mt-[50px] ' >skills <span className='highlight' > and</span> thechnologies:</h1>

                    <div className="w-full  flex-col text-(--dark-color) flex justify-center items-center gap-[3rem]">

                        <div className=' w-[35rem] max-md:w-[18rem] overflow-hidden  aspect-square ' >
                            <img src={MyImg} alt="" className='drop-shadow-[0_4px_6px_#5B4DF4] w-full h-full object-cover' />
                        </div>

                        {/* =================================================================================================================================== */}
                        <div className='w-full '>

                            {/* =================================================================================================================================== */}

                            <h1 className="text-[3rem] font-(family-name:--font-bebas) font-bold relative after:content-[''] after:block after:w-[100%] after:h-[5px] after:bg-violet-600">
                                Progaming languages :
                            </h1>
                            <div className='flex flex-wrap' >
                                <div className='w-[100px] p-[10px] m-[25px] flex justify-center items-center border-[7px] border-[#ffffff5f] shadow-[0_0_15px_6px_#5B4DF4] rounded-[15px] hover:scale-110 border-solid  aspect-square' ><img src={C} alt="" className='drop-shadow-[0_4px_6px_#1B1A1A] object-cover' /></div>
                                <div className='w-[100px] p-[10px] m-[25px] flex justify-center items-center border-[7px] border-[#ffffff5f] shadow-[0_0_15px_6px_#5B4DF4] rounded-[15px] hover:scale-110 border-solid  aspect-square' ><img src={JS} alt="" className='drop-shadow-[0_4px_6px_#1B1A1A] object-cover' /></div>
                                <div className='w-[100px] p-[10px] m-[25px] flex justify-center items-center border-[7px] border-[#ffffff5f] shadow-[0_0_15px_6px_#5B4DF4] rounded-[15px] hover:scale-110 border-solid  aspect-square' ><img src={Java} alt="" className='drop-shadow-[0_4px_6px_#1B1A1A] object-cover' /></div>
                                <div className='w-[100px] p-[10px] m-[25px] flex justify-center items-center border-[7px] border-[#ffffff5f] shadow-[0_0_15px_6px_#5B4DF4] rounded-[15px] hover:scale-110 border-solid  aspect-square' ><img src={PHP} alt="" className='drop-shadow-[0_4px_6px_#1B1A1A] object-cover' /></div>
                                <div className='w-[100px] p-[10px] m-[25px] flex justify-center items-center border-[7px] border-[#ffffff5f] shadow-[0_0_15px_6px_#5B4DF4] rounded-[15px] hover:scale-110 border-solid  aspect-square' ><img src={Html} alt="" className='drop-shadow-[0_4px_6px_#1B1A1A] object-cover' /></div>
                                <div className='w-[100px] p-[10px] m-[25px] flex justify-center items-center border-[7px] border-[#ffffff5f] shadow-[0_0_15px_6px_#5B4DF4] rounded-[15px] hover:scale-110 border-solid  aspect-square' ><img src={Css} alt="" className='drop-shadow-[0_4px_6px_#1B1A1A] object-cover' /></div>
                            </div>
                            
                            
                            {/* =================================================================================================================================== */}

                            <h1 className="text-[3rem] font-(family-name:--font-bebas) font-bold relative after:content-[''] after:block after:w-[100%] after:h-[5px] after:bg-violet-600">
                                frameworks and liberaries :
                            </h1>
                            <div className='flex flex-wrap' >
                                <div className='w-[100px] p-[10px] m-[25px] flex justify-center items-center border-[7px] border-[#ffffff5f] shadow-[0_0_15px_6px_#5B4DF4] rounded-[15px] hover:scale-110 border-solid  aspect-square' ><img src={Reacticon} alt="" className='drop-shadow-[0_4px_6px_#1B1A1A] object-cover' /></div>
                                <div className='w-[100px] p-[10px] m-[25px] flex justify-center items-center border-[7px] border-[#ffffff5f] shadow-[0_0_15px_6px_#5B4DF4] rounded-[15px] hover:scale-110 border-solid  aspect-square' ><img src={Node} alt="" className='drop-shadow-[0_4px_6px_#1B1A1A]  object-cover' /></div>
                                <div className='w-[100px] p-[10px] m-[25px] flex justify-center items-center border-[7px] border-[#ffffff5f] shadow-[0_0_15px_6px_#5B4DF4] rounded-[15px] hover:scale-110 border-solid  aspect-square' ><img src={GsapIcon} alt="" className='drop-shadow-[0_4px_6px_#1B1A1A] object-cover' /></div>
                                <div className='w-[100px] p-[10px] m-[25px] flex justify-center items-center border-[7px] border-[#ffffff5f] shadow-[0_0_15px_6px_#5B4DF4] rounded-[15px] hover:scale-110 border-solid  aspect-square' ><img src={Express} alt="" className='drop-shadow-[0_4px_6px_#1B1A1A]  object-cover' /></div>
                                <div className='w-[100px] p-[10px] m-[25px] flex justify-center items-center border-[7px] border-[#ffffff5f] shadow-[0_0_15px_6px_#5B4DF4] rounded-[15px] hover:scale-110 border-solid  aspect-square' ><img src={Tailwind} alt="" className='drop-shadow-[0_4px_6px_#1B1A1A] object-cover' /></div>
                            </div>
                            
                            {/* =================================================================================================================================== */}

                            <h1 className="text-[3rem] font-(family-name:--font-bebas) font-bold relative after:content-[''] after:block after:w-[100%] after:h-[5px] after:bg-violet-600">
                                databases :
                            </h1>
                            <div className='flex flex-wrap' >
                                <div className='w-[100px] p-[10px] m-[25px] flex justify-center items-center border-[7px] border-[#ffffff5f] shadow-[0_0_15px_6px_#5B4DF4] rounded-[15px] hover:scale-110 border-solid  aspect-square' ><img src={Mysql} alt="" className='drop-shadow-[0_4px_6px_#1B1A1A] object-cover' /></div>
                                <div className='w-[100px] p-[10px] m-[25px] flex justify-center items-center border-[7px] border-[#ffffff5f] shadow-[0_0_15px_6px_#5B4DF4] rounded-[15px] hover:scale-110 border-solid  aspect-square' ><img src={Mongo} alt="" className='drop-shadow-[0_4px_6px_#1B1A1A]  object-cover' /></div>
                                <div className='w-[100px] p-[10px] m-[25px] flex justify-center items-center border-[7px] border-[#ffffff5f] shadow-[0_0_15px_6px_#5B4DF4] rounded-[15px] hover:scale-110 border-solid  aspect-square' ><img src={Oracle} alt="" className='drop-shadow-[0_4px_6px_#1B1A1A] object-cover' /></div>
                            </div>

                            
                            {/* =================================================================================================================================== */}

                            <h1 className="text-[3rem] font-(family-name:--font-bebas) font-bold relative after:content-[''] after:block after:w-[100%] after:h-[5px] after:bg-violet-600">
                                tools and platformes :
                            </h1>
                            <div className='flex flex-wrap' >
                                <div className='w-[100px] p-[10px] m-[25px] flex justify-center items-center border-[7px] border-[#ffffff5f] shadow-[0_0_15px_6px_#5B4DF4] rounded-[15px] hover:scale-110 border-solid  aspect-square' ><img src={Wordpress} alt="" className='drop-shadow-[0_4px_6px_#1B1A1A] object-cover' /></div>
                                <div className='w-[100px] p-[10px] m-[25px] flex justify-center items-center border-[7px] border-[#ffffff5f] shadow-[0_0_15px_6px_#5B4DF4] rounded-[15px] hover:scale-110 border-solid  aspect-square' ><img src={Elementor} alt="" className='drop-shadow-[0_4px_6px_#1B1A1A]  object-cover' /></div>
                                <div className='w-[100px] p-[10px] m-[25px] flex justify-center items-center border-[7px] border-[#ffffff5f] shadow-[0_0_15px_6px_#5B4DF4] rounded-[15px] hover:scale-110 border-solid  aspect-square' ><img src={Git} alt="" className='drop-shadow-[0_4px_6px_#1B1A1A] object-cover' /></div>
                                <div className='w-[100px] p-[10px] m-[25px] flex justify-center items-center border-[7px] border-[#ffffff5f] shadow-[0_0_15px_6px_#5B4DF4] rounded-[15px] hover:scale-110 border-solid  aspect-square' ><img src={Figma} alt="" className='drop-shadow-[0_4px_6px_#1B1A1A]  object-cover' /></div>
                                <div className='w-[100px] p-[10px] m-[25px] flex justify-center items-center border-[7px] border-[#ffffff5f] shadow-[0_0_15px_6px_#5B4DF4] rounded-[15px] hover:scale-110 border-solid  aspect-square' ><img src={Xampp} alt="" className='drop-shadow-[0_4px_6px_#1B1A1A] object-cover' /></div>
                            </div>
                        </div>

                    </div>


                </div>
            </section>
        </>
    )
}
