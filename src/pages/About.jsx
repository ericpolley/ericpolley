import React from 'react'

export default function About() {
  return (
    <div className='w-full text-center '>
      <h1 className='text-2xl font-medium m-4'>About</h1>

      <div className='flex flex-col w-full mt-8 justify-center items-center'>
        <p className='text-lg font-medium mb-6'>About Eric Polley</p>
        <p>My name is Eric Polley. I am a Software Engineer and Software Developer at ericpolley.com <br />
        I have a strong background in computer animation, with years of experience creating and using software. <br />
        I have always had an interest in technology and I am excited about the next big thing. <br /><br /><br />

        </p>
        <iframe className=" border-4 border-slate-400 rounded-2xl shadow-2xl mb-28 w-[85vw] h-[210px] md:w-[82vw] md:h-[480px] lg:w-[82vw] lg:h-[540px]" width="560" height="235" src="https://www.youtube.com/embed/videoseries?list=PLce5_YZyrUw7dNEL7F1T4kxAp0mMuattO" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

      </div> </div>
  )
}
