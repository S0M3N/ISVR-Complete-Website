import React from 'react'

export default function InternsCall() {
    return (
        <div className='container mx-auto flex flex-col lg:h-screen md:h-[50vh] h-[80vh] items-center justify-center lg:mt-0 mt-[-40px]'>
            <div className='text-center lg:text-[180px] text-[100px] lg:mb-[-120px] mb-[-50px] lg:mt-[-180px]'>“</div>
            <div className='text-center'>
                <div className='self-center lg:text-4xl font-extrabold text-xl'>
                    <span className='text-green-500'>Discover the Universe Within: Step into ISVR</span> Where Limitless Curiosity Takes Flight!
                </div>
                <div className='self-center lg:mt-10 mt-5'>
                    Are you excited to be a part of our cosmic endeavors? Don't miss this chance to be an intern at ISVR! Fill the form, and let us know why you're passionate about space exploration. Together, we'll explore the uncharted horizons of the universe. Write to us now, and let's ignite the spark of curiosity together!
                </div>
            </div>
            <div className='self-center my-8'>
                <button className='btn bg-green-500 rounded-lg hover:text-green-500 hover:bg-white transition-all'><a href = "https://forms.office.com/r/AfQVZqJy10">Fill the form Now.</a></button>
            </div>
        </div>
    )
}
