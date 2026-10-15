import React from 'react'
import MyImg from '../assets/5.png'
import FallTxt from '../components/FallTxt'
export default function () {
    return (
        <>
            <section className=' w-full h-fit  overflow-hidden min-h-[120svh] bg-(--light-color) relative flex justify-center items-center ' >
                <div className='p-[5rem] max-md:p-[2rem] min-h-svh  max-md:py-[1rem] w-full ' >
                    <FallTxt>

                        <h1 className='text-center  text-[5rem] max-md:text-[3rem] font-(family-name:--font-bebas) font-semibold mt-[50px] ' > <span className='highlight' > My</span> Education:</h1>
                    </FallTxt>
                    <div className="w-full mt-[1rem] max-md:mt-[1rem] flex-wrap  text-(--dark-color) flex justify-center items-center gap-[3rem]">

                        <div className=' w-[30rem] max-md:w-[18rem] overflow-hidden  aspect-square ' >
                            <img src={MyImg} alt="" className='drop-shadow-[0_4px_6px_#5B4DF4] w-full h-full object-cover' />
                        </div>

                        <div className='max-w-[600px]'>
                            <div className='  font-(family-name:--font-bebas) m-[50px] max-md:m-[1rem] ' >
                                <h2 className=' text-[2rem] max-md:text-[1.6rem] font-normal' >Bachelor’s Degree in Computer Engineering and Embedded Systems :</h2>
                                <p className='text-(--purple) text-[1.5rem] max-md:text-[1.2rem]' >Faculty of Sciences, Agadir (FSA) — 2025– 2026</p>
                            </div>

                            <div className='  font-(family-name:--font-bebas) m-[50px] max-md:m-[1rem]' >
                                <h2 className=' text-[2rem] max-md:text-[1.6rem] font-normal' >University Diploma in Technology (DUT) – Computer Science:</h2>
                                <p className='text-(--purple) text-[1.5rem] max-md:text-[1.2rem]' >cole Supérieure de Technologie, Agadir (EST) — 2022 – 2025</p>
                            </div>

                            <div className='  font-(family-name:--font-bebas) m-[50px] max-md:m-[1rem]' >
                                <h2 className=' text-[2rem] max-md:text-[1.6rem] font-normal' >High School Diploma in Mathematics (bac Science Math)</h2>
                                <p className='text-(--purple) text-[1.5rem] max-md:text-[1.2rem]' > high school ABDALLAH CHEFCHAOUNI ,ouled taima  2022</p>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        </>
    )
}
