import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='w-full text-center flex flex-col items-center justify-center '>
      <h1 className='text-2xl font-medium mt-4 hidden'>Eric Polley - Software Engineer, Animator, Game Designer, Jack of all hats</h1>

      <div className='flex flex-row justify-center items-center md:space-x-6 space-x-2 mb-4 mt-4'>
                                   {/* ICON */}
                                   <div class="flex-col justify-center">
                                   <Link to="/blog">
        <img src="https://cdn1.iconfinder.com/data/icons/internet-of-things-24/160/blog-256.png"
        className='lg:w-32 lg:h-32 sm:w-28 w-16 h-auto object-cover object-center hover:bg-blue-300 rounded-full cursor-pointer  border-4 border-t-8 border-black'
         alt="Linkedin"></img></Link>
         {/* ICON End */}
         <p className=" lg-text-xl md-text-sm  font-semibold">Blog</p> </div>
          {/* ICON */}
          <div class="flex-col">
      <Link to="/animation">
        <img src="https://cdn0.iconfinder.com/data/icons/work-from-home-and-jobs-outline-style/512/animation-cartoon-design-character-Animator-3-256.png"
        className='lg:w-32 lg:h-32 sm:w-28 w-16 h-auto object-cover object-center hover:bg-blue-300 rounded-full cursor-pointer  border-4 border-t-8 border-black'
         alt="Linkedin"></img></Link>
         {/* ICON End */}
         <p className=" lg-text-xl md-text-sm  font-semibold">Animation</p> </div>
                          {/* ICON */}
      {/* ICON */}
      <div class="flex-col">
      <Link to="/game">
        <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-game-controller-b-256.png"
        className='lg:w-32 lg:h-32 sm:w-28 w-16 h-auto object-cover hover:bg-blue-300 rounded-full cursor-pointer border-4 border-t-8 border-black'
         alt="Linkedin"></img></Link>
         {/* ICON End */}
         <p className=" lg-text-xl md-text-sm  font-semibold">Games</p> </div>
         {/* ICON */}
         <div class="flex-col">
      <Link to="/software">
        <img src="https://cdn1.iconfinder.com/data/icons/jumpicon-marketing-glyph/32/-_Web-Page-Internet-Website-Browser-Window-256.png"
        className='lg:w-32 lg:h-32 sm:w-28 w-16 h-auto object-cover object-center hover:bg-blue-300 rounded-full cursor-pointer  border-4 border-t-8 border-black'
         alt="Linkedin"></img></Link>
         {/* ICON End */}
         <p className=" lg-text-xl md-text-sm font-semibold">Web Dev</p> </div>
                
                          <div class="flex-col">
      <Link to="/tutorials">
        <img src="https://cdn1.iconfinder.com/data/icons/education-1-42/48/26-256.png"
        className='lg:w-32 lg:h-32 sm:w-28 w-16 h-auto object-cover object-center hover:bg-blue-300 rounded-full cursor-pointer  border-4 border-t-8 border-black'
         alt="Linkedin"></img></Link>
         {/* ICON End */}
         <p className=" lg-text-xl md-text-sm  font-semibold">Tutorials</p> </div>









         </div>


   
      <Link to="/contact" className='flex items-center justify-center'>
      <img className='rounded-full border-4 bg-slate-400 border-t-8 border-black md:m-4 md:w-[60vw] w-[80vw] h-[350px] md:h-[420px] lg:h-[550px] xl:h-[600px] 2xl:h-[680px]
      object-cover hover:shadow-2xl hover:shadow-slate-700 shadow-slate-600 shadow-lg' 
      src="https://github.com/ericpolley/oldportfolio/blob/main/images/cartoonPortfolio2.gif?raw=true" alt="eric"></img>
     </Link>
     
     
    </div>
  )
}
