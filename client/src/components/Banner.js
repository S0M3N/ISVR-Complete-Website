import React from 'react'
import { Link } from 'react-router-dom'

export default function Banner() {
    return (
        <div className='lg:min-h-[55vh]'>
            <div className="text h-full flex flex-col px-12 pt-24 justify-between pb-20 bg-gradient-to-r from-zinc-800 from-5% via-70% via-stone-600/80 to-stone-200/25">
                <div className="flex items-center lg:justify-start justify-center">
                    <div className="md:w-3/5 w-full flex flex-col space-y-4">
                        <p className="lg:self-start self-center md:text-xl text-sm font-bold text-green-500">#We build the future</p>
                        <p className="lg:text-start text-center text-white font-semibold md:text-5xl text-lg w-full">
                            IndoplanetX Space Vault Space and Research
                        </p>
                        <div className="lg:self-start self-center flex text-sm md:text-lg space-x-2 mt-2">
                            <Link to="/About">
                                <button
                                    className="flex items-center space-x-1 bg-green-400 text-black px-3 py-2 rounded-full">
                                    <p>Know us more!</p>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
