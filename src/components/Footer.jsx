import React from 'react'
import { Link } from 'react-router-dom'


export default function Footer() {
    
  return (
     
    <div className='bg-slate-200 shadow-md sticky mt-24 border-b-4 border-t-4 border-slate-500 flex items-center justify-center flex-row'>
        {/* HEADER */}
        
    <div className='w-[70%]  h-32  '>
   {/* NAV BAR */}
        <div className='w-full flex flex-row items-center justify-center mb-4 font-semibold'>

            {/* NAV BAR LOGO */}
            <div className='mt-4 text-sm lg:text-2xl w-[45%]'>
            <Link to="/" className=' mr-3 focus:text-blue-400 text-blue-700 hover:text-blue-300'>
                <span className=' text-blue-700 hover:text-blue-300'>ericpolley</span>
                <span className=' text-blue-900 hover:text-blue-300'>.com</span>
                </Link>        
                </div> 

  


{/* NAV BAR sm and larger */}
            <p className='mt-8 w-[55%] ml-6 lg:ml-40 text-right'>
            <Link to="/portfolio" className='md:text-lg text-xs mr-2 md:mr-4 focus:text-blue-400 text-blue-700 hover:text-blue-300'><span>Portfolio</span></Link>
            <Link to="/videos" className='md:text-lg  text-xs mr-2 md:mr-4 focus:text-blue-500 text-blue-700 hover:text-blue-300'><span>Videos</span></Link>
                <Link to="/blog" className='md:text-lg  text-xs mr-2 md:mr-4 focus:text-blue-400 text-blue-700 hover:text-blue-300'><span>Blog</span></Link>
                <Link to="/contact" className='md:text-lg  text-xs mr-2 md:mr-4 focus:text-blue-400 text-blue-700 hover:text-blue-300'><span>Contact</span></Link>    
               
                
            </p>
            </div>
        </div>
        </div>
  ) }
