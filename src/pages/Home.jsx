import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='w-full text-center flex flex-col items-center justify-center '>
      <h1 className='text-2xl font-medium mt-4'>Eric Polley</h1>
      <p className='text-lg font-semibold mt-2'>Software Engineer</p>
      <p className='md:mt-16 mt-2'>Hello!  <br /> My name is Eric Polley and this is my official website.
      <br /><br />
      </p>
      <Link to="/portfolio" className='flex items-center justify-center'>
      <img className='rounded-full border-4 border-b-8 mb-4 border-slate-500 md:m-4 md:w-[30%] w-[70%]' 
      src="https://media.licdn.com/dms/image/D5603AQHR4JAjJUbPNQ/profile-displayphoto-shrink_800_800/0/1665516589812?e=1678320000&v=beta&t=u9V6Mih0LjOQUX05gViPrIcMkJL8RA5RzAFloPah_iE" alt="eric"></img>
     </Link>
     
     
    </div>
  )
}
