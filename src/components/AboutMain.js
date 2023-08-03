import React from 'react'
import { Link } from 'react-router-dom'
import LabImg from '../img/lab.jpeg'

function AboutMain() {
    return (
        <div className='flex flex-col lg:h-screen lg:mt-[-100px] mt-3 items-center justify-center'>
            <h1 className='self-center lg:text-5xl lg:font-extrabold text-2xl font-bold lg:mt-4'>ISVR <span className='text-green-600'>Since</span> 2020</h1>
            <div className='border border-white lg:w-[20vw] w-[40vw] lg:my-2 my-1'></div>
            <div className='flex lg:flex-row flex-col lg:mx-16 mx-5 my-8'>
                <div className='lg:w-[60%] w-full'>
                    With expertise in the space domain, the focus of our endeavors has always been to foster students' awareness and drive, propelling them towards the limitless expanse of the sky.
                    <br /><br />
                    Since our establishment, we have relentlessly pursued ambitious objectives, surmounted challenges, and achieved unparalleled outcomes.
                    <br /><br />
                    Our record in rocket launches remains unparalleled, and the implementation of ISVR Learning Labs stands as a testament to our success.<br/><br/>
                    <button className='my-3 lg:px-7 px-5 font-bold py-2 transition-all hover:bg-white hover:text-green-400 bg-green-400 rounded-full'><Link to={'/About'}>Know us more!</Link></button>
                </div>
                <div className='lg:w-[40%] w-full lg:my-0 my-2'>
                    <img src={LabImg} className="w-full aspect-video object-cover rounded-lg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default AboutMain