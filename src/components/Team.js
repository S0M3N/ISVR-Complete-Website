import React from 'react'
import { team } from '../data/team'

export default function Team() {
    return (
        <div className='container mx-auto mb-4 flex flex-col items-center justify-center'>
            <div className='flex flex-col text-center'>
                <h1 className='lg:text-4xl text-2xl font-bold mb-5'>
                    Our <span className='text-green-500'>Awesome</span> Team!
                </h1>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>
                    {team.map((expert) => (
                        <div key={expert.id} className='bg-zinc-800 p-4 rounded'>
                            <img src={expert.image} alt={expert.name} className='w-32 h-32 mx-auto rounded-full' />
                            <h2 className='text-lg font-bold mt-2'>{expert.name}</h2>
                            <p className='text-sm text-stone-400'>{expert.field}</p>
                            <a href={expert.linkedin} target='_blank' rel='noopener noreferrer' className='text-white bg-blue-500 rounded px-3 py-2 mt-2 hover:bg-white hover:text-blue-500 transition-all inline-block'>
                                View LinkedIn
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
