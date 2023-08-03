import React from 'react'
import vid1 from '../img/gallery/vid1.mp4'

export default function AltVideo() {
    return (
        <div className='container my-5 mx-auto min-h-[50vh]'>
            <div className='text-5xl font-bold text-green-500 text-center mb-8 underline'>Watch <span className='text-white'>Us</span> Closely!</div>
            <div className='flex lg:flex-row flex-col items-center justify-center'>
                <div className='lg:w-1/3 w-full'>
                    <video
                        src={vid1}
                        autoPlay
                        loop
                        muted
                        controls={false}
                        className="w-full aspect-video bg-black"
                    />
                </div>
                <div className='lg:w-2/3 w-full flex flex-col lg:mx-5 mx-0 lg:my-0 mt-5 items-start justify-around'>
                    <h1 className='text-2xl font-semibold'>Record Launch in <span className='text-green-500'>North India</span></h1>
                    <div>ISVR, or IndoplanetX Space Vault and Research, is set to achieve a remarkable feat as it becomes the pioneer in northern India by launching a groundbreaking 3KM Sounding Rocket. This achievement marks a significant milestone in the field of space exploration, enabling further advancements in atmospheric research and space technology. The 3KM Sounding Rocket launch demonstrates India's commitment to space innovation and scientific progress, solidifying its position as a prominent player in the global space community.</div>
                </div>
            </div>
        </div>
    )
}
