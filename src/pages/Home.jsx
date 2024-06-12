import React from 'react'
import { Link } from 'react-router-dom'

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
  <img src="https://cdn.pixabay.com/photo/2016/09/17/16/19/anime-1676437_960_720.jpg" alt="animation" className='hover:shadow-2xl w-[400px] rounded-full border-8 border-black ' />
  Animation
  </a>
  </div> <div  className='m-2'>
    <a href="http://video.ericpolley.com">
  <img src="https://cdn.pixabay.com/photo/2019/07/29/21/27/filming-4371566_1280.jpg" alt="animation" className='hover:shadow-2xl w-[400px] rounded-full border-8 border-black ' />
  Video
  </a></div>
  </div>
</div>

</div>

      <Link to="/contact" className=' '>
<div className='m-2 mt-48 mb-12 p-2 bg-red-500 text-white hover:text-black hover:border-gray-600 hover:bg-red-300 border-black rounded-xl border-4 text-xl w-[40vw]'>
  <p>Contact for a quote</p>
</div>
</Link>

    </div>
  )
}
