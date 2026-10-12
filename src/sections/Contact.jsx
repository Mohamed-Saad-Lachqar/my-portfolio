import React from 'react'
import Whatsapp from '../assets/icon/social/whatsapp.svg'
import Gmail from '../assets/icon/social/gmail.svg'
import Linkedin from '../assets/icon/social/linkedin.svg'

export default function Contact() {
    return (
        <section className="about  relative w-full min-h-svh flex justify-center items-center bg-(--dark-color) text-(--light-color) flex-col ">
            <svg className='w-full absolute top-[-5px] left-0  ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#B5BABE" fill-opacity="1" d="M0,224L205.7,64L411.4,96L617.1,32L822.9,64L1028.6,192L1234.3,256L1440,96L1440,0L1234.3,0L1028.6,0L822.9,0L617.1,0L411.4,0L205.7,0L0,0Z"></path>
            </svg>

            <h1 className='text-center my-[100px] max-md:my-[20px] text-[5rem] max-md:text-[3rem] font-(family-name:--font-bebas) font-semibold ' > get <span className='highlight' > in</span> touch :</h1>
            <div className='flex max-md:p-[2rem] justify-around items-center flex-wrap' >
                <div className=' mx-[50px] flex flex-col justify-center items-center text-[1.5rem] max-md:text-[1rem] '>
                    <div className='w-[75px] aspect-square my-[50px] ' ><img src={Gmail} alt="" className=' w-full h-full object-cover' /></div>
                    <h1>mohamedsaadlachqar@gmail.com</h1>
                </div>
                <div className=' mx-[50px] flex flex-col justify-center items-center text-[1.5rem] max-md:text-[1rem]'>
                    <div className='w-[75px] aspect-square my-[50px] ' ><img src={Whatsapp} alt="" className=' w-full h-full object-cover' /></div>
                    <h1>+212 670-444541</h1>
                </div>
                <div className=' mx-[50px] flex flex-col justify-center items-center text-[1.5rem] max-md:text-[1rem] '>
                    <div className='w-[75px] aspect-square my-[50px] ' ><img src={Linkedin} alt="" className=' w-full h-full object-cover' /></div>
                    <h1>Mohamed-Saad Lachqar</h1>
                </div>
            </div>

        </section>
    )
}
