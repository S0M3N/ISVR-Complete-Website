import React from 'react';
import { data } from '../data/services';
import { Link, useParams } from 'react-router-dom';

export default function Service() {
    const { id } = useParams();
    const filteredData = data.filter((item) => item.id === id);

    if (filteredData.length === 0) {
        return <div className='container mx-auto my-2 lg:min-h-[60vh] md:h-[70vh] h-[30vh]'>Seems like falled into abyss. <Link className='text-green-500 underline' to={'/Services'}>Lets go back</Link></div>;
    }
    const item = filteredData[0];
    return (
        <div className='container my-2 mx-auto lg:min-h-[60vh] md:min-h-[80vh] min-h-[40vh] flex flex-col items-start'>
            <div className='flex md:flex-row flex-col mb-3 items-center justify-center lg:gap-3'>
                <div className='md:w-2/5 w-full'><img src={item.img} className='w-full aspect-video rounded-lg' alt="" /></div>
                <div className='md:w-3/5 md:mt-0 mt-4 w-full text-2xl font-bold'>
                    {item.service.slice(0, item.service.indexOf(' ') + 1)}
                    <span className='text-green-500'>
                        {item.service.slice(item.service.indexOf(' ') + 1)}
                    </span>
                </div>
            </div>
            <p className='capitalized'>{item.desc}</p>
        </div>
    );
}
