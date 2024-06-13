import React from 'react'

const AboutUs = () => {
  return ( 
    <div data-scroll data-scroll-section data-scroll-speed="-.09" className='w-full py-24  leading-none -tracking-[1px] bg-[#CDEA68] text-black'>
        <h1 className='font-[] px-16 text-[3.5vw] w-[90%]'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
        <div className="w-full px-16 pt-8 mt-32 border-t-2 border-zinc-400 flex">
            <div className='w-1/2  '>
                <h1 className='text-[3.5vw]'>Our approach</h1>
                <button className="text-[1vw] flex gap-10 items-center uppercase mt-7 px-10 py-5 text-white bg-zinc-800 rounded-full font-[600]">
                    Read More
                    <div className='w-3 h-3 bg-white rounded-full '></div>
                </button>
            </div>
            <div className="w-1/2 h-[70vh] bg-[#9daf5a] rounded-3xl">
            </div>
        </div>
    </div>
  )
}

export default AboutUs