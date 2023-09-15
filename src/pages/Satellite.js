
import React, { useEffect } from 'react'

export default function Satellite() {
  useEffect(() => {
    document.title = "Satellite Communications | ISVRx";
  }, []);
  return (
    <>
      <section className="container lg:mx-auto mx-4 my-4 flex flex-row gap-2">
        <a href="/">Home</a>
        <p>●</p>
        <a href="/services">Services</a>
        <p>●</p>
        <p>Satellite Communications</p>
      </section>
      <section className="bg-green-700 text-[#e5e5e5] flex lg:flex-row flex-col">
        <div className="container lg:mx-auto mx-4 flex lg:flex-row flex-col">
          <div className="lg:left lg:min-w-[65%] w-full">
            <h2 className="lg:text-3xl text-2xl lg:w-full w-[80%] font-semibold my-3">Satellite Communications: Connecting Beyond Earth</h2>
            <div className="lg:w-[90%]text-justify">
              <p className="text-sm text-semibold mb-4 text-justify">
                Welcome to the dynamic realm of Satellite Solutions, where cutting-edge technology meets the boundless cosmos to enhance our connection and understanding of the universe. Explore the innovative breakthroughs and pioneering research that advance satellite technology, ensuring reliable communications and data transmission as we explore the great expanse of space.
              </p>
            </div>
            <p className="mb-4 lg:text-2xl text-lg lg:font-extrabold font-semibold">A department of <span className="text-[#fca311]">IndoplanetX</span>
            </p>
            <p className="italic text-lg w-[80%]">"Embark on the frontier of connectivity with Satellite Solutions: Innovations for a Connected World."</p>
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
        <div className="lg:w-[90%]text-justify">
          <p className="mt-2 text-justify">
            <b className="text-lg">Cutting-Edge Research:</b>
            <br />
            Join us in exploring the forefront of satellite technology research, from developing advanced communication protocols to optimizing satellite orbits for improved data transmission.
          </p>
          <p className="mt-2 text-justify">
            <b className="text-lg">Innovative Technologies: </b>
            <br />
            Discover state-of-the-art satellite communication equipment and technologies that ensure seamless and reliable connections in the vast expanse of space.
          </p>
          <p className="mt-2 text-justify">
            <b className="text-lg">Industry grade skill training and internship: </b>
            <br />
            <p>
            We are dedicated to nurturing the next generation of satellite communication experts, providing accessible skill training and internship programs to passionate individuals who aspire to excel in this field.
            </p>
            <p className='mt-2'>Expand your knowledge, receive comprehensive training, and apply a diverse range of skills in the dynamic realm of Satellite Communications and related technology as a student or intern.</p>
          </p>
        </div>
      </section>
      <section className='container lg:mx-auto mx-4 my-4'>
        <h2 className='text-xl font-semibold mb-2 underline'>What We Offer to Students:</h2>
        <div className="lg:w-[90%]text-justify flex flex-col space-y-2">
          <p>At Satellite Communications, we believe in providing accessible opportunities for students who aspire to make their mark in this field. Here's how we facilitate students' growth and development:</p>
          <p>1. <b className='text-lg'>Courses</b>: Enroll in our specialized courses designed to equip you with the knowledge and skills required for a career in Satellite Communications. Learn from experts who have hands-on experience in Satellite Communications.</p>
          <p>2. <b className='text-lg'>Workshops:</b> Participate in hands-on workshops where you can gain practical insights into Satellite Communications technologies and research methods.</p>
          <p>3. <b className='text-lg'>Seminars and Conferences:</b> Attend our seminars and conferences to hear from leading professionals in the field, network with like-minded individuals, and stay updated on the latest advancements in Satellite Communications.</p>
          <p>4. <b className='text-lg'>Internships:</b> Gain real-world experience through our internship programs. Work alongside our team on cutting-edge projects, contributing to the future of satellites beyond Earth.</p>
        </div>
      </section>
      <section className='certificate my-[5vh]'>
        <div className='container mx-auto rounded-xl border min-h-[20vh] lg:w-full w-[80%] flex bg-stone-800'>
          <div className='l lg:w-[65%] w-[100%] mx-3 my-2'>
            <h2 className='text-xl font-bold'>Earn an Industry Grade Certificate</h2>
            <p className='lg:w-[70%] my-4'>Get trained by us and earn a certificate to enhance your CV, Resume, and improve your presence.</p>
          </div>
          <div className='r bg-gray-700 mt-[-3vh] shadow-lg mb-[-3vh] w-[30%] rounded-xl p-2 lg:block hidden'>
            <p className='text-2xl ml-2'>★ Certificate ★</p>
            <div className='mr-16 p-2 rounded-xl bg-gray-800 h-[30px] font-bold'>━━━━━</div>
            <div className='mr-2 mt-2 p-2 rounded-xl bg-gray-800 h-[90px] font-extrabold'>
              <p className='text-gray-600'>━━━━━</p>
              <p>━━━━━━━━  ━━━━</p>
              <p>━━━ ━━━━━━━</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
