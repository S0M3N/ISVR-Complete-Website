import React from 'react'

import asset1 from '../img/asset1.webp'
import asset2 from '../img/asset2.webp'
import asset3 from '../img/asset3.webp'

export default function WhoWeAre() {
    return (
        <div className='container mx-auto lg:mt-0 mt-8 min-h-[150vh] flex flex-col items-center justify-center'>
            <div className='flex flex-col text-center items-center justify-center'>
                <h1 className='lg:text-5xl text-4xl font-bold'>Who <span className='text-green-500'>we</span> are?</h1>
                <div className='flex lg:flex-row w-full flex-col text-start lg:my-2 lg:space-x-5 py-4 mb-4'>
                    <div className='lg:w-2/3 w-full lg:my-0 my-4'>
                        <h3 className='text-3xl font-bold'>Learning <span className='text-green-400'>Platform</span></h3>
                        <div className='border w-2/5 my-2'></div>
                        <p>ISVR offer applied technology and project-based learning, where students inquire, collaborate, create, learn, tackle new problems and calibrate their solutions. To become an Open Learning Platform that is designed to provide Space Awareness Activities, Educational Programs, and Research & Development of Space Exploration Technologies. </p>
                    </div>
                    <div className='lg:w-1/3 w-full'>
                        <img className='h-full aspect-video object-cover rounded-lg hover:scale-110 transition-all' src={asset1} alt='' />
                    </div>
                </div>

                <div className='flex lg:flex-row w-full flex-col-reverse text-start lg:my-2 lg:space-x-5 py-4 my-4 '>
                    <div className='lg:w-1/3 w-full'>
                        <img className='h-full aspect-video object-cover rounded-lg hover:scale-110 transition-all' src={asset2} alt='' />
                    </div>
                    <div className='lg:w-2/3 w-full lg:my-0 my-4'>
                        <h3 className='text-3xl font-bold'>Promote and <span className='text-green-400'>disseminate knowledge</span></h3>
                        <div className='border w-2/5 my-2'></div>
                        <p>ISVR promote and disseminate knowledge, create awareness and provide a common forum of interaction amongst academicians, professionals and government agencies, establish effective co-ordination, to organize training courses and special programs to impart training, education in all disciplines, online, distinct, correspondence courses, coaching classes for any stream, any level, any profession, courses for science, defense, computer programs, technology, research, and engineering to the students.</p>
                    </div>
                </div>

                <div className='flex lg:flex-row w-full flex-col text-start lg:my-2 lg:space-x-5 py-4 my-4'>
                    <div className='lg:w-2/3 w-full lg:my-0 my-4'>
                        <h3 className='text-3xl font-bold'>Development in <span className='text-green-400'>space launch</span></h3>
                        <div className='border w-2/5 my-2'></div>
                        <p> To carry on the business of design and development of space launch vehicles and related technologies for providing access to space and promote the Research and Development in space science and interplanetary space exploration. </p>
                    </div>
                    <div className='lg:w-1/3 w-full'>
                        <img className='w-full aspect-video object-cover rounded-lg hover:scale-110 transition-all' src={asset3} alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}
