
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
  ];
  return (
    <>
      <section className=' w-full h-fit bg min-h-[120svh] bg-(--dark-color) relative flex justify-center items-center ' >

        <div className='px-[5rem] pt-[5rem]  w-full h-full' >
          <LettersDrop text={`Profitional\nExperience`} className='text-[5.5rem] max-md:text-[2.5rem] w-full text-center text-(--light-color) font-bold ' />

          <div className='py-2 mt-[50px] w-full relative z-10 h-full flex flex-wrap justify-center items-center gap-[2.5rem]' >


            {jobs.map((job, index) => (
              <JobCodeWindow
                key={index}
                title={job.title}
                from={job.from}
                to={job.to}
                company={job.company}
                activeIndex={index}        
                totalJobs={jobs.length}
              />
            ))}



          </div>

        </div>



        <svg className='absolute w-full top-[-5px]  left-0  ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#B5BABE" fill-opacity="1" d="M0,64L60,69.3C120,75,240,85,360,85.3C480,85,600,75,720,85.3C840,96,960,128,1080,138.7C1200,149,1320,139,1380,133.3L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
        </svg>
        <svg className='absolute w-full bottom-[-5px]  left-0  ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
 <path fill="#B5BABE" fill-opacity="1" d="M0,224L26.7,229.3C53.3,235,107,245,160,250.7C213.3,256,267,256,320,256C373.3,256,427,256,480,250.7C533.3,245,587,235,640,229.3C693.3,224,747,224,800,240C853.3,256,907,288,960,282.7C1013.3,277,1067,235,1120,229.3C1173.3,224,1227,256,1280,261.3C1333.3,267,1387,245,1413,234.7L1440,224L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path>
</svg>

      </section>


    </>
  )
}

export default Experiences