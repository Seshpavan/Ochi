import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import abc from '/abc.png';

const LandingPage = () => {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.4" className='w-full h-screen bg-[#F1F1F1] border-t-2'>
            <div className="heroText px-4 md:px-16 mt-20 md:mt-40">
                {['we create', 'eye-opening', 'presentations'].map((text, index) => {
                    return (
                        <div key={index} className="masker">
                            <div className="w-fit flex items-center overflow-hidden">
                                {index === 1 && (
                                    <motion.div initial={{ width: 0 }} animate={{ width: "9vw" }} transition={{ ease: [0.83, 0, 0.17, 1], duration: 1 }} className="w-[9vw] h-[5.7vw] mr-2 mt-[1vw] rounded-lg">
                                        <img src={abc} alt="" className="-mt-[1.2vw] ml-0.5 md:ml-0 md:mt-0 scale-120 md:scale-100 h-[7vw] w-full md:h-full object-cover rounded-lg" />
                                    </motion.div>
                                )}
                                <h1 className="uppercase text-[10vw] md:text-[7.5vw] font-[700] tracking-tight leading-[8vw] md:leading-[6.5vw]">{text}</h1>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="border-t-[1px]  border-zinc-400 mt-[40vh] md:mt-28 flex flex-col md:flex-row justify-between py-3 px-4 md:px-20">
                {['For public and private companies', 'From first pitch to IPO'].map((item, index) => {
                    return (
                        <div key={index} className="  text-[4vw] md:text-[1.2vw] pb-7 md:p-0 font-[400] leading-[6vw] md:leading-[2.5vw] text-zinc-900  md:text-left">{item}</div>
                    )
                })}
                <div className="start flex items-center gap-2 md:gap-[10px] md:mt-0">
                    <div className="uppercase border-[1px] rounded-full border-zinc-800 font-[400] px-2 py-1 md:px-3 md:pt-1 md:pb-1.5 flex items-center text-[4vw] md:text-[1.2vw]">start the project</div>
                    <div className="arrow border-[1px] rounded-full border-zinc-800 p-1 md:p-2.5 -rotate-45"><FaArrowRight /></div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;
