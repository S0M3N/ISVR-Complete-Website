import React from 'react'
import TestServ from '../components/TestServ'
import SpaceTour from '../components/SpaceTour'

export default function Services() {
    return (
        <div className='flex flex-col items-center justify-center text-center'>
            <p className='font-semibold lg:text-4xl text-2xl py-4'>Our Services!</p>
            <SpaceTour />
            <TestServ />
        </div>
    )
}
