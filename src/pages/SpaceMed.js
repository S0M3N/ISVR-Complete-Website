import React, { useEffect } from 'react'

export default function SpaceMed() {
  useEffect(() => {
    document.title = "Space Medicine | ISVRx";
  }, []);
  return (
    <>
      <section className="container lg:mx-auto mx-4 my-4 flex flex-row gap-2">
        <a href="/">Home</a>
        <p>●</p>
        <a href="/services">Services</a>
        <p>●</p>
        <p>Space Medicine</p>
      </section>
      <section className="bg-green-700 text-[#e5e5e5] flex lg:flex-row flex-col">
        <div className="container lg:mx-auto mx-4 flex lg:flex-row flex-col">
          <div className="lg:left lg:min-w-[65%] w-full">
            <h2 className="lg:text-3xl text-2xl lg:w-full w-[80%] font-semibold my-3">Space Medicine: Pioneering Health Beyond Earth</h2>
            <div className="w-[80%]">
              <p className="text-sm text-semibold mb-4 text-justify">Welcome to the captivating realm of Space Medicine, where science
                meets the cosmos to ensure the
                health and well-being of astronauts as they journey beyond our planet's bounds. Discover the
                pioneering innovations and cutting-edge research that safeguard the physical and mental health of
                those who venture into the great unknown.
              </p>
            </div>
            <p className="mb-4 lg:text-2xl text-lg lg:font-extrabold font-semibold">A department of <span className="text-[#fca311]">IndoplanetX</span>
            </p>
            <p className="italic text-lg w-[80%]">"Explore the final frontier of healthcare with Space Medicine:<br /> Innovations
              for Astronauts' Well-being."</p>
            <div className='flex gap-2 items-center justify-between w-[45%] cursor-pointer'>
            <button className="px-4 py-2 mt-3 text-black bg-green-300 rounded-lg mb-2"><a href="#info">Know
              more!</a></button>
              <a className='underline'>Apply in this division!</a>
            </div>
          </div>
          <div
            className="lg:right lg:min-w-[35%] bg-white text-black lg:mx-2 lg:mt-[-10px] lg:mb-[-10px] p-4 lg:rounded-xl rounded-tl-xl lg:block lg:shadow-lg">
            <h3 className="text-xl font-semibold">Hey! are you a student?</h3>
            <p className="text-sm">Then this section is for you</p>
            <div className="w-[30%] my-2 border border-gray-300 "></div>
            <div className="flex flex-col gap-3">
              <p className="text-xl font-semibold">You might be fasinated by the training we provide.</p>
              <ul className="flex flex-col gap-1">
                <li className="text-base">What we do?</li>
                <div className="w-[20%] border border-gray-200 mb-3"></div>
                <li className="text-sm font-bold">Courses</li>
                <li className="text-sm font-bold">Workshops</li>
                <li className="text-sm font-bold">Seminar</li>
                <li className="text-sm font-bold">Conferences</li>
                <li className="text-sm font-bold">Webinars</li>
                <li className="text-sm font-bold">Internships</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="info" className="container lg:mx-auto mx-4 mt-4">
        <div>
          <h2 className="text-2xl underline italic font-semibold">What we offers?</h2>
        </div>
        <div className="lg:w-[70%] w-[80%]">
          <p className="mt-2 text-justify">
            <b className="text-lg">Cutting-Edge Research:</b>
            <br />
            Explore with us and research initiatives, from combating muscle and bone
            loss in microgravity to understanding the effects of long-term space travel on the human body.
          </p>
          <p className="mt-2 text-justify">
            <b className="text-lg">Innovative Technologies: </b>
            <br />
            Discover the cutting-edge medical technologies and equipment and treat health issues in space.
          </p>
          <p className="mt-2 text-justify">
            <b className="text-lg">Industry grade skill training and internship: </b>
            <br />
            <p>
              We're committed to fostering the next generation of Space Medicine professionals without the burden of steep costs. Our skill training and internship programs are designed to be accessible to all passionate individuals who aspire to make a mark in this field.
            </p>
            <p className='mt-2'>Cultivate your knowledge, receive training, and apply a multitude of skills in the realm of Space Medicine and other pharmaceutical applications as a student or intern.</p>
          </p>
        </div>
      </section>
    </>
  )
}
