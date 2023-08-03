import React from 'react'

export default function Footer() {
    return (

        <footer className="bg-stone-900">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="/" className="flex flex-col md:items-start items-center">
                            <span className="mb-2 text-2xl whitespace-nowrap text-white font-extrabold">Indoplanet<span className='text-green-400'>X</span></span>
                        </a>
                        <div>Contact:</div>
                        <br/>
                        <div><b>Reg. Office: </b>23, Alka Puri, Near IMA Blood Bank Dehradun, Uttarakhand-247670</div>
                        <div><b>Lab: </b>ISVR Lab, RCE,5-KM Ganga Canal Road, Roorkee, Uttarakhand 247667</div>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-extrabold  uppercase text-white">Resources</h2>
                            <ul className="font-medium">
                                <li className="mb-4">
                                    <a href="/" className="hover:underline">Lab Setup</a>
                                </li>
                                <li className="mb-4">
                                    <a href="/" className="hover:underline">Internship</a>
                                </li>
                                <li className="mb-4">
                                    <a href="/" className="hover:underline">Workshops</a>
                                </li>
                                <li>
                                    <a href="/" className="hover:underline">Collaborations</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-extrabold  uppercase text-white">Follow us</h2>
                            <ul className=" font-medium">
                                <li className="mb-4">
                                    <a href="/" className="hover:underline ">Facebook</a>
                                </li>
                                <li className="mb-4">
                                    <a href="/" className="hover:underline ">Instagram</a>
                                </li>
                                <li>
                                    <a href="/" className="hover:underline">LinkedIn</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-extrabold  uppercase text-white">Legal</h2>
                            <ul className="font-medium">
                                <li className="mb-4">
                                    <a href="/" className="hover:underline">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="/" className="hover:underline">Terms &amp; Conditions</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm sm:text-center ">&copy; 2023 <a href="/" className="hover:underline text-gray-300">IndoplanetX Space Pvt. Ltd.</a> All Rights Reserved.
                    </span>
                </div>
            </div>
        </footer>

    )
}