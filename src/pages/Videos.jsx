import React from 'react'

export default function Videos() {
  return (
    <div className='w-full text-center'>
      <h1 className='text-2xl font-medium'>Videos</h1>

      <div className='flex flex-col lg:flex-row w-full'>

      <div className='flex flex-col w-full  items-center bg-slate-200 lg:mr-6'>
        <p className='text-2xl mb-4 mt-4'>Vlog Videos</p>
        <iframe className="shadow-xl mb-4 w-[85vw] md:h-[350px]  lg:w-[440px] lg:h-[250px]" width="560" height="235" src="https://www.youtube.com/embed/videoseries?list=PLce5_YZyrUw7dNEL7F1T4kxAp0mMuattO" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        
        <p className='text-md lg:mb-12 mt-4 pt-2 pr-5 pl-5 pb-5'>This is my monthly video update on my progress as a Software Engineer. I record them at the beginning of every
         month, check it out now!</p><br />
      </div>

      <div className='flex flex-col w-full items-center bg-slate-200'>
        <p className='text-2xl mb-4 lg:mt-4'>Tutorials</p>
        <iframe className="shadow-xl mb-4 w-[85vw] md:h-[350px] lg:w-[440px] lg:h-[250px]" width="560" height="235" src="https://www.youtube.com/embed/videoseries?list=PLce5_YZyrUw7cHSt2HV5esEjQJKOG2GHG" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        
        <p className='text-md lg:mb-12 mt-4 pt-2 pr-5 pl-5 pb-5'>
        Some of my tutorials are very long, and some tutorials are 80 seconds. <br />
        I decided to create 80 second tutorials in order to challenge myself by relaying useful information quickly that may be indexed for others and my own future use. 
     </p>
      </div>



      

      </div>

    </div>
  )
}
