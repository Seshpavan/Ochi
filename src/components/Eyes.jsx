import React, { useEffect, useState } from 'react'

const Eyes = () => {
    const [rotate, setrotate] = useState(0)

    useEffect(() => {
        const eyes = document.querySelectorAll('.eyes');
        window.addEventListener('mousemove', (e) => {
            let x = e.clientX;
            let y = e.clientY;

            let deltaX = x-window.innerWidth/2;
            let deltaY = y-window.innerHeight/2;

            let angle = Math.atan2(deltaY, deltaX)*(180/Math.PI);
            setrotate(angle-180);
        })
    })

    return (
        <div  className=' eyes w-full h-screen overflow-hidden'>
            <div className="relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]">
                <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex gap-10">
                    <div className="flex justify-center items-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
                        <div className="w-2/3 h-2/3 relative rounded-full bg-zinc-900">
                            <div style={{transform:`translate(-50%, -50%) rotate(${rotate}deg)`}} className="line w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] ">
                                <div className="w-6 h-6 bg-zinc-100 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
                        <div className="w-2/3 h-2/3 relative rounded-full bg-zinc-900">
                            <div style={{transform:`translate(-50%, -50%) rotate(${rotate}deg)`}} className="line w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] ">
                                <div className="w-6 h-6 bg-zinc-100 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Eyes