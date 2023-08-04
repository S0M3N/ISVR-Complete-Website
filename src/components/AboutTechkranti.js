import React from 'react'

import robot from '../img/asset4.jpg'
import arImg from '../img/asset5.jpg'

export default function AboutTechkranti() {
    return (
        <>
            <div className='container mx-auto flex flex-col text-justify items-center justify-center'>
                <h1 className='text-3xl font-semibold underline my-2'>About <span className='text-green-500 underline'>Tech</span> Kranti!</h1>
                <p>Embark on a transformative journey into the realm of emerging technologies with Tech Kranti. As pioneers in the tech industry, we bring you a rich array of services and courses designed to inspire, educate, and empower. Our mission is to fuel the tech revolution by empowering individuals and businesses with the expertise to thrive in this digital era. Whether you are an aspiring entrepreneur, a tech enthusiast, or an organization seeking innovative solutions, Tech Kranti has something extraordinary to offer.</p>
            </div>
            <h1 className='text-center mb-2 mt-5 text-3xl font-semibold underline'>Why choose <span className='text-green-500 underline'>TechKranti</span>?</h1>
            <div className='container mx-auto mb-5 flex lg:flex-row lg:space-x-5 flex-col-reverse'>
                <div className='lg:w-3/5 w-full lg:mt-0 mt-4 flex flex-col items-center justify-center'>
                    <div className='text-justify'><b className='text-lg'>Expert Instructors:</b> Our courses are taught by industry professionals and subject matter experts with years of experience in their respective fields.</div>
                    <div className='text-justify'><b className='text-lg'>Hands-On Learning:</b> We believe in practical learning, and our courses include hands-on projects and real-world applications to reinforce your knowledge.</div>
                    <div className='text-justify'><b className='text-lg'>Industry-Relevant Curriculum:</b> Our curriculum is designed to align with current industry needs, ensuring you gain skills that are in demand.</div>
                    <div className='text-justify'><b className='text-lg'>Networking Opportunities:</b> Connect with like-minded individuals and industry leaders through our events and networking sessions.</div>
                </div>
                <div className='lg:w-2/5 w-full'>
                    <img className='rounded-lg lg:w-full aspect-square object-cover w-2/3 mx-auto hover:scale-105 transition-all' src={robot} alt="" />
                </div>
            </div>
            <div className='container mx-auto mb-5 flex lg:flex-row lg:space-x-5 flex-col'>
                <div className='lg:w-2/5 w-full'>
                    <img className='rounded-lg lg:w-full aspect-square object-cover w-2/3 mx-auto hover:scale-105 transition-all' src={arImg} alt='' />
                </div>
                <div className='lg:w-3/5 w-full lg:mt-0 mt-4 flex flex-col justify-center'>
                    <p className='text-justify'>
                        <b className='text-lg'>Robotics Solutions:</b> Explore the world of robotics and automation with our cutting-edge solutions for businesses and enthusiasts alike. From industrial automation to educational robotics kits, we have the tools you need to bring your robotic ideas to life.
                    </p>
                    <p className='text-justify'>
                        <b className='text-lg'>Virtual Reality (VR) Experiences:</b> Immerse yourself in the captivating world of virtual reality. Our VR experiences range from entertainment and gaming to training and simulations for various industries.
                    </p>
                    <p className='text-justify'>
                        <b className='text-lg'>Augmented Reality (AR) Applications:</b> Discover how augmented reality is reshaping the way we interact with the world around us. Our AR applications cater to industries like education, healthcare, architecture, and more.
                    </p>
                    <b className='uppercase text-start my-2'>And Many More...</b>
                </div>
            </div>
        </>
    )
}
