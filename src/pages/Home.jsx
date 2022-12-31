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
      <img className='rounded-full border-8 mb-4 border-slate-300 md:m-4 md:w-[30%] w-[70%]' 
      src="https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/309513797_10228947023368621_5565939701859507103_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Xfdik5DhLeUAX-s2kfK&_nc_ht=scontent-sea1-1.xx&oh=00_AfD3d-o41b_P267Nlc9YMbF-3i3FWT5XiKxWkX40GUrgvQ&oe=63B581CB" alt="eric"></img>
     </Link>
     
     
    </div>
  )
}
