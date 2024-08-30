import React from 'react'


export default function Home() {
  return (
    <div className='w-full text-center flex flex-col items-center justify-center '>
           
      <div className='md:flex lg:flex-row items-center justify center md:ml-4 md:mr-4'>
        <div className='md:flex md:flex-col md:justify-center md:object-center text-center md:items-center'>
      <h1 className='text-2xl font-medium mt-4 hidden'>Eric Polley - Software Engineer, Animator, Game Designer, Jack of all hats</h1>

     
<p className=' font-bold text-3xl md:mb-2 mt-4 border-b-2 border-black p-1'> Eric Polley </p>

<p className='border-black border-2  border-t-4 p-4 mt-2 md:m-4 md:mb-4 mb-4 rounded-lg w-full md:w-[75%] bg-slate-200'>
Explore my work in both animation and video editing/videography. With a solid background in both fields, I create engaging and visually striking content. Check out my portfolios to see what I can do.
  </p>
  <div className='flex justify-center w-full '>
    <div className='m-2'>
      <a href="http://animation.ericpolley.com">
  <img src="https://i.ytimg.com/vi/cBW5SK9Qa6g/hqdefault.jpg" alt="animation" className='hover:shadow-2xl hover:brightness-125 w-[400px] rounded-full border-8 border-black ' />
  Animation
  </a>
  </div> <div  className='m-2'>
    <a href="http://video.ericpolley.com">
  <img src="https://github.com/ericpolley/flashdashdesign/blob/main/ericvideo.png?raw=true" alt="animation" className='hover:shadow-2xl w-[400px] hover:brightness-125 rounded-full border-8 border-black ' />
  Video
  </a></div>
  </div>
</div>

</div>



    </div>
  )
}
