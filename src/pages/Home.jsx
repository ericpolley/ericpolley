import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='w-full text-center flex flex-col items-center '>
      <h1 className='text-2xl font-medium mt-4'>Eric Polley</h1>
      <p className='text-lg font-semibold mt-2'>Software Engineer</p>
      <p className='mt-16'>Hello! <br /> <br /> My name is Eric Polley and this is my official website.
      <br /><br />
      </p>
      <Link to="/portfolio">
      <img className='rounded-full border-8 border-slate-400 m-4' 
      src="https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/309513797_10228947023368621_5565939701859507103_n.jpg?stp=dst-jpg_p206x206&_nc_cat=101&ccb=1-7&_nc_sid=da31f3&_nc_ohc=KN4IGS7z2_8AX_QJfVI&_nc_ht=scontent-sea1-1.xx&oh=00_AfAB76OuxzWtA1x1ehRNUDBjDjJ_LvN39nzuL2PE3EdPMg&oe=639FC10B" alt="eric"></img>
     </Link>
      <p><br /><br /><br /><br /><br /><br /><br /></p>
    </div>
  )
}
