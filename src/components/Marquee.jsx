import { motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".01" className='w-full py-20 bg-[#004D43] rounded-t-3xl overflow-hidden'>
      <div className="text flex border-t-2 border-b-2 border-zinc-400 whitespace-nowrap">
        <motion.h1 initial={{ x: '0' }} animate={{ x: '-100%' }} transition={{ ease: 'linear', duration: 5, repeat: Infinity }} className='uppercase leading-none text-white text-[22vw] pr-10 -mt-10 font-bold'>we are ochi</motion.h1>
        <motion.h1 initial={{ x: '0' }} animate={{ x: '-100%' }} transition={{ ease: 'linear', duration: 5, repeat: Infinity }} className='uppercase leading-none text-white text-[22vw] pr-10 -mt-10 font-bold'>we are ochi</motion.h1>
      </div>
    </div>
  )
}

export default Marquee