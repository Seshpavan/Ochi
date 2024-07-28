import React from 'react';
import human from '/human.jpg';

const AboutUs = () => {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.09" className='-mt-4 md:mt-0 w-full pt-14 md:py-24 rounded-t-2xl md:rounded-none leading-none -tracking-[1px] bg-[#CDEA68] text-black'>
            <h1 className='font-[] pl-6 md:px-16 text-[6.7vw] md:text-[3.5vw] w-[90%]'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
            <div className="w-full px-4 md:px-16 pt-8 md:pt-8 mt-14 md:mt-32 border-t-2 border-zinc-400 flex flex-col md:flex-row">
                <div className='w-1/2'>
                    <h1 className='text-[7vw] md:text-[3.5vw]'>Our approach</h1>
                    <button className="button text-[4w] md:text-[1vw] flex gap-10 items-center uppercase mt-4 md:mt-7 px-4 md:px-10 py-5 text-white bg-zinc-800 rounded-full font-[600]">
                        Read More
                        <div className='dot w-3 h-3 bg-white rounded-full '></div>
                    </button>
                </div>
                <div className="md:w-1/2 md:mt-0 mt-10 mb-5 md:mb-0 md:h-[70vh] bg-[#9daf5a] rounded-3xl">
                    <img src={human} alt="" className='w-full h-80 md:h-full object-cover rounded-3xl' />
                </div>
            </div>
        </div>
    )
}

export default AboutUs