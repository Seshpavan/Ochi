import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowRight  } from "react-icons/fa6";

const LandingPage = () => {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.4" className='w-full h-screen bg-[#F1F1F1] border-t-2'>
            <div className="heroText px-16 mt-40 ">
                {['we create','eye-opening','presentations'].map((text, index) => {
                    return (
                    <div key={index} className="masker">
                        <div className="w-fit flex items-center overflow-hidden">
                        {index===1 && (<motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease:[0.83, 0, 0.17, 1],duration:1}} className="w-[9vw] h-[5.3vw] bg-red-500 mr-2 mt-[1vw] rounded-lg"></motion.div>)}
                            <h1 className="uppercase text-[7.5vw] font-[700] tracking-tight leading-[6.5vw]">{text}</h1>
                        </div>
                    </div>
                    )
                })}
            </div>
            <div className="border-t-[1px]  border-zinc-400 mt-28 flex justify-between items-center py-3 px-20">
                {['For public and private companies','From first pitch to IPO'].map((item,index)=>{
                    return(
                        <div key={index} className="text-[1.2vw]  font-[400] leading-[2.5vw] text-zinc-900">{item}</div>
                    )
                })}
                {/* hover:bg-zinc-900 hover:text-white add this in css */}
                <div className="start flex items-center gap-[10px] ">
                    <div className="uppercase border-[1px] rounded-full border-zinc-800 font-[400] px-3 pt-1 pb-1.5 flex items-center">start the project</div>
                    <div className="arrow border-[1px] rounded-full border-zinc-800 p-2.5 -rotate-45"><FaArrowRight /></div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage