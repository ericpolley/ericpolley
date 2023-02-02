import React from 'react'


export default function Portfolio() {
  return (
    <div>
       <div className='w-full text-center'>
      <h1 className='text-2xl font-medium'>Portfolio</h1>
      <div className='flex flex-row flex-wrap justify-center'>
        {/* CARD */}
      <div className='lg:w-[30%] w-full shadow-xl border-4 m-2 flex flex-col justify-center items-center text-black bg-slate-400 rounded-xl border-slate-500'>
          <p className=' font-semibold text-lg m-2'>Frank the Jelly</p>
          <a rel="noreferrer" className="flex justify-center "  target="_blank" href="https://drive.google.com/u/0/uc?id=1FFS0MwxkEapj2C80Z-pFspNWO8kmS_wL&amp;export=download&amp;confirm=t&amp;uuid=5817c4c6-384b-4edb-be90-def7727469e4&amp;at=ALgDtsy7ssr7dhUjoLrYdamaFod4:1675368119870">
         <img src="https://github.com/ericpolley/ericpolley/blob/main/src/images/frank.png?raw=true" className=" shadow-lg w-[95%] h-[340px] border-4 rounded-md border-slate-500 object-cover" alt="frank" />
         </a>
          <p className='mb-2 mt-2 text-sm'>
            Platform side scroller PC Game. <br /> Created with UPBGE and Python. 
            </p>
          <div className='mb-2 mt-2'>
          <a className='focus:text-blue-400 text-blue-700 hover:text-blue-300 m-8' rel="noreferrer"  target="_blank" href="https://drive.google.com/u/0/uc?id=1FFS0MwxkEapj2C80Z-pFspNWO8kmS_wL&amp;export=download&amp;confirm=t&amp;uuid=5817c4c6-384b-4edb-be90-def7727469e4&amp;at=ALgDtsy7ssr7dhUjoLrYdamaFod4:1675368119870">Download Now </a>
          
          </div></div> 
        {/*Card end*/}
                {/* CARD */}
      <div className='lg:w-[30%] w-full shadow-xl border-4 m-2 flex flex-col justify-center items-center text-black bg-slate-400 rounded-xl border-slate-500'>
          <p className=' font-semibold text-lg m-2'>Bionic Quandary</p>
          <a rel="noreferrer" className="flex justify-center "  target="_blank" href="https://github.com/ericpolley/game-demo1-bq/raw/main/demo1-bq.zip">
         <img src="https://github.com/ericpolley/ericpolley/blob/main/src/images/bionictest.png?raw=true" className='shadow-lg w-[95%] h-[340px] border-4 rounded-md border-slate-500 object-cover'  alt="frank" />
         </a>
          <p className='mb-2 mt-2 text-sm'>
            A simple First person game. <br /> Created with Ursina and Python. 
            </p>
          <div className='mb-2 mt-2'>
          <a className='focus:text-blue-400 text-blue-700 hover:text-blue-300 m-8' rel="noreferrer"  target="_blank" href="https://github.com/ericpolley/game-demo1-bq/raw/main/demo1-bq.zip">Download Now </a>
          
          </div></div> 
        {/*Card end*/}
      {/* CARD */}
      <div className='lg:w-[30%] w-full shadow-xl border-4 m-2 flex flex-col justify-center items-center text-black bg-slate-400 rounded-xl border-slate-500'>
          <p className=' font-semibold text-lg m-2'>Resume</p>
         
          <iframe scrolling="no" className=" shadow-lg w-[95%] h-[340px] border-4 rounded-md border-slate-500" src="https://resume.ericpolley.com/" title="website" height="200"></iframe>
          
          <p className='mb-2 mt-2 text-sm'>
            This is my current resume. <br /> Created with Bootstrap. 
            </p>
          <div className='mb-2 mt-2'>
          <a className='focus:text-blue-400 text-blue-700 hover:text-blue-300 m-8' rel="noreferrer"  target="_blank" href="http://resume.ericpolley.com">Project Link </a>
          <a className='focus:text-blue-400 text-blue-700 hover:text-blue-300 m-8' rel="noreferrer"  target="_blank" href="https://github.com/ericpolley/resume.ericpolley.com">Github</a>
          </div></div> 
        {/*Card end*/}

         {/* CARD */}
         <div className='lg:w-[30%] w-full shadow-xl border-4 m-2 flex flex-col justify-center items-center text-black bg-slate-400 rounded-xl border-slate-500'>
          <p className=' font-semibold text-lg m-2'>Bahagafish News</p>
          <iframe scrolling="no"  className="shadow-lg w-[95%] h-[340px] border-4 rounded-md border-slate-500" src="https://news.ericpolley.com/" title="website" height="200"></iframe>
          <p className='mb-2 mt-2 text-sm'>
          A responsive website for a fake news comedy blog. <br />
React.js, tailwind, and the react-router-dom.
            </p>
          <div className='mb-2 mt-2'>
          <a className='focus:text-blue-400 text-blue-700 hover:text-blue-300 m-8' rel="noreferrer"  target="_blank" href="https://news.ericpolley.com/">Project Link </a>
          <a className='focus:text-blue-400 text-blue-700 hover:text-blue-300 m-8' rel="noreferrer"  target="_blank" href="https://github.com/ericpolley/BahagaFish">Github</a>
          </div></div> 
        {/*Card end*/}
        

        {/* CARD */}
        <div className='lg:w-[30%] w-full shadow-xl border-4 m-2 flex flex-col justify-center items-center text-black bg-slate-400 rounded-xl border-slate-500'>
          <p className=' font-semibold text-lg m-2'>palagea.com</p>
          <iframe scrolling="no"  className="shadow-lg w-[95%] h-[340px] border-4 rounded-md border-slate-500" src="https://palagea.com/" title="website" height="200"></iframe>
          <p className='mb-2 mt-2 text-sm'>
          A responsive website for a Signing Agent/Notary Service. <br />
React.js, tailwind, and the react-router-dom.
            </p>
          <div className='mb-2 mt-2'>
          <a className='focus:text-blue-400 text-blue-700 hover:text-blue-300 m-8' rel="noreferrer"  target="_blank" href="https://palagea.com/">Project Link </a>
          <a className='focus:text-blue-400 text-blue-700 hover:text-blue-300 m-8' rel="noreferrer"  target="_blank" href="https://github.com/ericpolley/firebaseshop2">Github</a>
          </div></div> 
        {/*Card end*/}
        {/* CARD */}
        <div className='lg:w-[30%] w-full shadow-xl border-4 m-2 flex flex-col justify-center items-center text-black bg-slate-400 rounded-xl border-slate-500'>
          <p className=' font-semibold text-lg m-2'>Dungeons to Fungeons</p>
          <iframe scrolling="no"  className="shadow-lg w-[95%] h-[340px] border-4 rounded-md border-slate-500" src="https://dtf.ericpolley.com/" title="website" height="200"></iframe>
          <p className='mb-2 mt-2 text-sm'>
          A multi-page responsive Bootstrap website for a free board game I designed. <br />
            </p>
          <div className='mb-2 mt-2'>
          <a className='focus:text-blue-400 text-blue-700 hover:text-blue-300 m-8' rel="noreferrer"  target="_blank" href="https://dtf.ericpolley.com/">Project Link </a>
          <a className='focus:text-blue-400 text-blue-700 hover:text-blue-300 m-8' rel="noreferrer"  target="_blank" href="https://github.com/ericpolley/dungeonstofungeons">Github</a>
          </div></div> 
        {/*Card end*/}
                {/* CARD */}
                <div className='lg:w-[30%] w-full shadow-xl border-4 m-2 flex flex-col justify-center items-center text-black bg-slate-400 rounded-xl border-slate-500'>
          <p className=' font-semibold text-lg m-2'>Portfolio website September 2022</p>
          <iframe scrolling="no"  className="shadow-lg w-[95%] h-[340px] border-4 rounded-md border-slate-500" src="https://ericpolley.github.io/oldportfolio/" title="website" height="200"></iframe>
          <p className='mb-2 mt-2 text-sm'>
            This is an old portfolio website for Eric Polley. <br />
            Html, Css, and Javascript.
            </p>
          <div className='mb-2 mt-2'>
          <a className='focus:text-blue-400 text-blue-700 hover:text-blue-300 m-8' rel="noreferrer"  target="_blank" href="https://ericpolley.github.io/oldportfolio/">Project Link </a>
          <a className='focus:text-blue-400 text-blue-700 hover:text-blue-300 m-8' rel="noreferrer"  target="_blank" href="https://github.com/ericpolley/oldportfolio">Github</a>
          </div></div> 
        {/*Card end*/}
        {/* CARD */}
        <div className='lg:w-[30%] w-full shadow-xl border-4 m-2 flex flex-col justify-center items-center text-black bg-slate-400 rounded-xl border-slate-500'>
          <p className=' font-semibold text-lg m-2'>Kouvradio.com</p>
          <iframe scrolling="no"  className="shadow-lg w-[95%] h-[340px] border-4 rounded-md border-slate-500" src="https://kouvradio.com/" title="website" height="200"></iframe>
          <p className='mb-2 mt-2 text-sm'>
          A responsive Bootstrap website for an internet radio company.
The client and I designed the website together.
            </p>
          <div className='mb-2 mt-2'>
          <a className='focus:text-blue-400 text-blue-700 hover:text-blue-300 m-8' rel="noreferrer"  target="_blank" href="https://kouvradio.com/">Project Link </a>
          <a className='focus:text-blue-400 text-blue-700 hover:text-blue-300 m-8' rel="noreferrer"  target="_blank" href="https://github.com/ericpolley/kouvradio">Github</a>
          </div></div> 
        {/*Card end*/}
        {/* CARD */}
        <div className='lg:w-[30%] w-full shadow-xl border-4 m-2 flex flex-col justify-center items-center text-black bg-slate-400 rounded-xl border-slate-500'>
          <p className=' font-semibold text-lg m-2'>dearassassin.com</p>

          <iframe scrolling="no"  className="shadow-lg w-[95%] h-[340px] border-4 rounded-md border-slate-500" src="https://ericpolley.github.io/dearassassin/" title="website" height="200"></iframe>

          <p className='mb-2 mt-2 text-sm'>
          A responsive landing page for a rock band. <br />
Html, CSS, Javascript, and Bootstrap.
            </p>
          <div className='mb-2 mt-2'>
          <a className='focus:text-blue-400 text-blue-700 hover:text-blue-300 m-8' rel="noreferrer"  target="_blank" href="https://ericpolley.github.io/dearassassin/">Project Link </a>
          <a className='focus:text-blue-400 text-blue-700 hover:text-blue-300 m-8' rel="noreferrer"  target="_blank" href="https://github.com/ericpolley/dearassassin">Github</a>
          </div></div> 
        {/*Card end*/}
        {/* CARD */}
        <div className='lg:w-[30%] w-full shadow-xl border-4 m-2 flex flex-col justify-center items-center text-black bg-slate-400 rounded-xl border-slate-500'>
          <p className=' font-semibold text-lg m-2'>Samson Says</p>
          <iframe scrolling="no"  className="shadow-lg w-[90%] h-[340px] border-4 rounded-md border-slate-500" src="https://samson.ericpolley.com/" title="website" height="200"></iframe>
          <p className='mb-2 mt-2 text-sm'>
          A memory game built with HTML, CSS, and Javascript <br />
Responsive design for mobile, tablet, and desktop
            </p>
          <div className='mb-2 mt-2'>
          <a className='focus:text-blue-400 text-blue-700 hover:text-blue-300 m-8' rel="noreferrer"  target="_blank" href="https://samson.ericpolley.com/">Project Link </a>
          <a className='focus:text-blue-400 text-blue-700 hover:text-blue-300 m-8' rel="noreferrer"  target="_blank" href="https://github.com/ericpolley/samsonsays">Github</a>
          </div></div> 
        {/*Card end*/}
         
         {/* CARD */}
         <div className='lg:w-[30%] w-full shadow-xl border-4 m-2 flex flex-col justify-center items-center text-black bg-slate-400 rounded-xl border-slate-500'>
          <p className=' font-semibold text-lg m-2'>My portfolio website - October 2022</p>
          <iframe scrolling="no"  className="shadow-lg w-[90%] h-[340px] border-4 rounded-md border-slate-500" src="https://thunderous-cajeta-7b34b7.netlify.app" title="website" height="200"></iframe>
          <p className='mb-2 mt-2 text-sm'>
            Created with React
            </p>
          <div className='mb-2 mt-2'>
          <a className='focus:text-blue-400 text-blue-700 hover:text-blue-300 m-8' rel="noreferrer"  target="_blank" href="https://thunderous-cajeta-7b34b7.netlify.app">Project Link </a>
          <a className='focus:text-blue-400 text-blue-700 hover:text-blue-300 m-8' rel="noreferrer"  target="_blank" href="https://github.com/ericpolley/ericpolleyreact">Github</a>
          </div></div> 
        {/*Card end*/}
        
        
        
        

        </div>
      </div>
    </div>
  )
}
