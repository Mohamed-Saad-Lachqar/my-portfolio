
import LettersDrop from '../components/LettersDrop';
import JobCodeWindow from '../components/JobCodeWindow';
function Experiences() {
    // e.g. in App.jsx, Experience.jsx, etc.
const jobs = [
  {
    title: "WEB DEVELOPMENT INTERN",
    from: "Feb 2024",
    to: "May 2024",
    company: "NOWOTCH",
  },
  {
    title: "IT INTERN",
    from: "Jul 2024",
    to: "Aug 2024",
    company: "ECOPREC",
  },
  {
    title: "WEB DEVELOPMENT INTERN",
    from: "Apr 2025",
    to: "Jun 2025",
    company: "SEPIA",
  },
  // add as many as you want...
];
    return (
        <>
            <section className='w-full bg overflow-hidden min-h-[120svh] bg-(--dark-color) relative flex justify-center items-center ' >

                <div className='px-[5rem] pt-[5rem] w-full h-full' >
                    <LettersDrop text={`Profitional Experience`} className='text-[5rem] w-full text-center text-(--light-color) font-bold ' />

                    <div className=' mt-[50px] w-full relative z-10 h-full flex flex-wrap justify-center items-center gap-[3rem]' >


                       {jobs.map((job, index) => (
    <JobCodeWindow
      key={index}
      title={job.title}
      from={job.from}
      to={job.to}
      company={job.company}
      activeIndex={index}       // each one highlights its own tab
      totalJobs={jobs.length}   // all show the full tab bar
    />
  ))}



                    </div>





                </div>










                <svg className='absolute w-full top-[-5px] left-0  ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fafafa" fill-opacity="1" d="M0,64L60,69.3C120,75,240,85,360,85.3C480,85,600,75,720,85.3C840,96,960,128,1080,138.7C1200,149,1320,139,1380,133.3L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
                </svg>
            </section>


        </>
    )
}

export default Experiences