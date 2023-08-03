import React from 'react'
import LabImg from '../img/lab.jpeg'

export default function Aboutpg() {
    return (
        <div className='h-[55vh] flex flex-col items-center justify-center'>
            <h3 className='text-center lg:text-5xl text-2xl font-bold my-5 lg:pb-5 lg:pt-0 pt-5'>About Us!</h3>
            <div className='container mx-auto flex lg:flex-row flex-col'>
                <div className='flex flex-col lg:w-[60vw] w-full items-start justify-center'>
                    <h1 className='lg:text-5xl text-3xl font-extrabold my-4'>Working <span className='text-green-500'>Since</span> 20<span className='text-green-500'>20</span>...!</h1>
                    <div className='lg:text-2xl text-xl mb-2 font-bold'>
                        We Work for your better Tommorow
                    </div>
                    <div className='font-base'>
                        Workers and Learners in the domains of science, computer programmes, technology, research, and engineering get to experience a complete technique of delivering substantial academic and vocational information at ISVR.
                    </div>
                </div>
                <div className='lg:w-[40vw] w-full lg:my-0 my-3 lg:px-4'>
                    <img src={LabImg} className="w-full aspect-video object-cover rounded-lg"  alt=''/>
                </div>
            </div>
        </div>
    )
}
