import { motion, useAnimation } from 'framer-motion'
import React, { useState } from 'react'

const Featured = () => {
  const cards = [useAnimation(), useAnimation()]

  const handleHover = (index) => {  
    cards[index].start({
      y: "0",
    })
  }

  const handleHoverExit = (index) => {
    cards[index].start({
      y: "100%",
    })
  }

  return (
    <div className='relative w-full py-20'>
      <div className="w-full px-20 border-b-[1px] border-zince-700 pb-20">
        <h1 className="text-7xl tracking-tight"> Featured Projects </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <motion.div 
          onHoverStart={() => handleHover(0)}
          onHoverEnd={() => handleHoverExit(0)}
          className="cardcontainer relative w-1/2 h-[75vh]">
            {/* <div className="card w-full h-full rounded-xl overflow-hidden"> */}
            <h1 className="absolute flex overflow-hidden text-[#CDEA68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl">
              {"FYDE".split("").map((letter, index) => (
                <motion.span 
                intial={{y: '100%'}}
                animate={cards[0]}
                transition={{duration: 0.5, delay: index * 0.05, ease: [0.22,1,0.36,1]}}
                className="incline-block">{letter}</motion.span>
              ))}
            </h1>
            <img className='w-full h-full bg-cover' src="" alt="" />
            {/* </div> */}
          </motion.div>
          <motion.div 
          onHoverStart={() => handleHover(1)}
          onHoverEnd={() => handleHoverExit(1)}
          className="cardcontainer relative w-1/2 h-[75vh]">
            {/* <div className="card w-full h-full rounded-xl overflow-hidden"> */}
            <h1 className="absolute flex overflow-hidden text-[#CDEA68]  -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl">
              {"VISE".split("").map((letter, index) => (
                <motion.span 
                intial={{y: '100%'}}
                animate={cards[1]}
                transition={{duration: 0.5, delay: index * 0.05, ease: [0.22,1,0.36,1]}}
                className="incline-block">{letter}</motion.span>
              ))}
            </h1>
            <img className='w-full h-full bg-cover bg-zinc-700' src="" alt="" />
            {/* </div> */}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Featured