import React from 'react'

import tklogo from '../img/logos/logo10.jpeg'

export default function
    () {
    return (
        <div>
            <div className='container mx-auto my-4 flex lg:flex-row lg:space-x-10 flex-col'>
                <div className='lg:w-1/3 w-2/3 flex flex-col mx-auto items-center justify-center'>
                    <img className='rounded-full lg:w-full w-1/2 border-8' src={tklogo} alt='' />
                </div>
                <div className='lg:w-2/3 w-full text-justify'>
                    <h2 className='text-2xl lg:text-start text-center my-3 font-bold uppercase underline'>Automaton<span className='text-green-500 underline'>X</span></h2>
                    <p>
                        Welcome to AutomatonX, a dynamic and innovative part of ISVR that leads the charge in revolutionizing the tech landscape. We are your one-stop destination for a diverse range of services and courses in cutting-edge technologies. From robotics to virtual reality, artificial intelligence to 3D modeling, and much more, we are passionate about equipping you with the skills and knowledge needed to embrace the future. AutomatonX is where your tech dreams take flight, and your potential finds its wings.
                    </p>
                </div>
            </div>
        </div>
    )
}
