import React from 'react'
import AltVideo from '../components/AltVideo'
import ImageGallery from '../components/ImageGallery'

export default function Gallery() {
    return (
        <div className='flex flex-col'>
            <AltVideo />
            <ImageGallery />
        </div>
    )
}
