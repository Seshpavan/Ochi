import { motion, useAnimation } from 'framer-motion';
import React from 'react';
import unsplash1 from '/unsplash1.jpg';
import unsplash2 from '/unsplash2.jpg';

const Featured = () => {
  const cards = [useAnimation(), useAnimation()];

  const handleHover = (index) => {
    cards[index].start({
      y: "0%",
    });
  };

  const handleHoverExit = (index) => {
    cards[index].start({
      y: "100%",
    });
  };

  return (
    <div className='relative w-full py-10 md:py-20 '>
      <div className="w-full px-5 md:px-20 border-b-[1px] border-zinc-700 pb-10 md:pb-20">
        <h1 className="text-[7vw] md:text-7xl tracking-tight"> Featured Projects </h1>
      </div>
      <div className="px-5 md:px-20">
        <div className="cards w-full flex flex-col md:flex-row gap-5 md:gap-10 mt-5 md:mt-10">
          <motion.div 
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverExit(0)}
            className="cardcontainer relative w-full md:w-1/2 h-[50vh] md:h-[75vh]"
          >
            <h1 className="absolute hidden md:flex overflow-hidden text-[#CDEA68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-5xl md:text-8xl">
              {"FYDE".split("").map((letter, index) => (
                <motion.span 
                  key={index}
                  initial={{ y: '100%' }}
                  animate={cards[0]}
                  transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              ))}
            </h1>
            <img className='w-full h-full bg-cover' src={unsplash1} alt="Unsplash Image 1" />
          </motion.div>
          <motion.div 
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverExit(1)}
            className="cardcontainer relative w-full md:w-1/2 h-[50vh] md:h-[75vh]"
          >
            <h1 className="absolute hidden md:flex overflow-hidden text-[#CDEA68] left- -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-5xl md:text-8xl">
              {"VISE".split("").map((letter, index) => (
                <motion.span 
                  key={index}
                  initial={{ y: '100%' }}
                  animate={cards[1]}
                  transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              ))}
            </h1>
            <img className='w-full h-full bg-cover bg-zinc-700' src={unsplash2} alt="Unsplash Image 2" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
