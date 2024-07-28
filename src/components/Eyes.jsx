import React, { useEffect, useState } from 'react';

const Eyes = () => {
    const [rotate, setrotate] = useState(0);

    useEffect(() => {
        const handleMouseMove = (e) => {
            let x = e.clientX;
            let y = e.clientY;

            let centerX = window.innerWidth / 2;
            let centerY = window.innerHeight / 2;

            let deltaX = x - centerX;
            let deltaY = y - centerY;
            let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

            // Adjust angle to rotate eyes towards the mouse
            setrotate(angle - 180);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className='eyes w-full h-[85vw] md:h-screen overflow-hidden'>
            <div className="relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-4 md:gap-10">
                    <div className="flex justify-center items-center w-[30vw] md:w-[15vw] h-[30vw] md:h-[15vw] rounded-full bg-zinc-100">
                        <div className="w-2/3 h-2/3 relative rounded-full bg-zinc-900">
                            <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className="line w-full h-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <div className="w-6 h-6 bg-zinc-100 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center w-[30vw] md:w-[15vw] h-[30vw] md:h-[15vw] rounded-full bg-zinc-100">
                        <div className="w-2/3 h-2/3 relative rounded-full bg-zinc-900">
                            <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className="line w-full h-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <div className="w-6 h-6 bg-zinc-100 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Eyes;
