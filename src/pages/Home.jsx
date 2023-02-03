import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='w-full text-center flex flex-col items-center justify-center '>
      <h1 className='text-2xl font-medium mt-4'></h1>

      <div className='flex flex-row justify-center items-center md:space-x-6 space-x-2 mb-4 mt-4'>
        {/* ICON */}
      <Link to="/news">
        <img src="https://cdn2.iconfinder.com/data/icons/business-development-6/24/Newspaper_news_daily_business_media_article_3-256.png"
        className='lg:w-32 lg:h-32 sm:w-28 w-16 h-auto object-cover object-center hover:bg-blue-300 rounded-full cursor-pointer border-4 border-t-8 border-black'
         alt="Linkedin"></img></Link>
         {/* ICON End */}
      {/* ICON */}
      <Link to="/game">
        <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-game-controller-b-256.png"
        className='lg:w-32 lg:h-32 sm:w-28 w-16 h-auto object-cover object-center hover:bg-blue-300 rounded-full cursor-pointer border-4 border-t-8 border-black'
         alt="Linkedin"></img></Link>
         {/* ICON End */}
         {/* ICON */}
      <Link to="/software">
        <img src="https://cdn1.iconfinder.com/data/icons/jumpicon-marketing-glyph/32/-_Web-Page-Internet-Website-Browser-Window-256.png"
        className='lg:w-32 lg:h-32 sm:w-28 w-16 h-auto object-cover object-center hover:bg-blue-300 rounded-full cursor-pointer  border-4 border-t-8 border-black'
         alt="Linkedin"></img></Link>
         {/* ICON End */}
                 {/* ICON */}
      <Link to="/animation">
        <img src="https://cdn0.iconfinder.com/data/icons/work-from-home-and-jobs-outline-style/512/animation-cartoon-design-character-Animator-3-256.png"
        className='lg:w-32 lg:h-32 sm:w-28 w-16 h-auto object-cover object-center hover:bg-blue-300 rounded-full cursor-pointer  border-4 border-t-8 border-black'
         alt="Linkedin"></img></Link>
         {/* ICON End */}
                          {/* ICON */}
      <Link to="/tutorials">
        <img src="https://cdn1.iconfinder.com/data/icons/education-1-42/48/26-256.png"
        className='lg:w-32 lg:h-32 sm:w-28 w-16 h-auto object-cover object-center hover:bg-blue-300 rounded-full cursor-pointer  border-4 border-t-8 border-black'
         alt="Linkedin"></img></Link>
         {/* ICON End */}

                                   {/* ICON */}
      <Link to="/blog">
        <img src="https://cdn1.iconfinder.com/data/icons/internet-of-things-24/160/blog-256.png"
        className='lg:w-32 lg:h-32 sm:w-28 w-16 h-auto object-cover object-center hover:bg-blue-300 rounded-full cursor-pointer  border-4 border-t-8 border-black'
         alt="Linkedin"></img></Link>
         {/* ICON End */}






         </div>


   
      <Link to="/contact" className='flex items-center justify-center'>
      <img className='rounded-full border-4 bg-slate-400 border-t-8 border-black md:m-4 md:w-[40vw] w-[60vw] h-[50vh] 
      object-cover hover:shadow-2xl hover:shadow-slate-700 shadow-slate-600 shadow-lg' 
      src="https://github.com/ericpolley/oldportfolio/blob/main/images/cartoonPortfolio2.gif?raw=true" alt="eric"></img>
     </Link>
     
     
    </div>
  )
}
