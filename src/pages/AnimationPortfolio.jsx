import React from 'react'

export default function AnimationPortfolio() {
  return (
    <div className='w-full text-center'>
      <h1 className='text-2xl font-medium'>Animation</h1>

      <div className='flex flex-col lg:flex-row w-full justify-center items-center'>

{/* CARD START */}
      <div className='flex flex-col w-full p-1  items-center text-black bg-slate-400 lg:mr-6 rounded-xl border-4 border-black mt-4 mb-4'>
        <p className='mt-4'></p>
        <iframe className="shadow-xl mb-4 w-[85vw] h-[280px] md:h-[350px] md:w-[82vw] lg:w-[70vw] lg:h-[550px] border-8 rounded-xl border-black" width="560" height="235" src="https://www.youtube.com/embed/videoseries?si=4NF8JiKNxJaGjv9Z&amp;list=PLce5_YZyrUw5ypUsGQNn-QHdTfmYGSiNn" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        
<iframe className='md:w-[320px] md:h-[560px] sm:w-[180px] sm:h-[360px] shadow-xl md:mb-4  border-8 rounded-xl border-black' width="315" height="560" src="https://www.youtube-nocookie.com/embed/videoseries?si=FRm9G0gG6cFa5pKd&amp;list=PLce5_YZyrUw7J8jSN5vAaqg5YOTrJ4z0v" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        <p className='text-md lg:mb-12 mt-4 pt-2 pr-5 pl-5 pb-5 h-[100px] p-1 mb-32'>
        </p>
      </div>
      {/* CARD END */}

     




      

      </div>
      

    </div>
  )
}
