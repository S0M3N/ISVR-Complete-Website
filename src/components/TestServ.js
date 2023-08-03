import React from 'react';
import { data } from '../data/services';
import { Link } from 'react-router-dom';

export default function TestServ() {
  return (
    <div className='container mx-auto my-3 min-h-screen flex flex-col items-center justify-center'>
      <h1 className='lg:text-2xl text-xl font-semibold underline mb-2'><span className='text-green-500'>Other</span> Great Services</h1>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-6 gap-3'>
        {data.map((item) => {
          console.log(item.img);
          return (
            <div key={item.id} className='card bg-zinc-600 rounded-xl flex flex-col space-y-5 hover:scale-105 hover:bg-zinc-800 transition-all items-start justify-between'>
              <img src={item.img} className='w-full aspect-video rounded-t-lg' alt="" />
              <div className='text-2xl px-2 text-start font-extrabold'>
                <div>
                  {item.id}. {item.service.slice(0, item.service.indexOf(' ') + 1)}
                  <span className='text-green-500'>
                    {item.service.slice(item.service.indexOf(' ') + 1)}
                  </span>
                </div>
                <div className='border w-[35%] mt-2'></div>
              </div>
              <p className='text-sm text-start font-semibold px-2 capitalize'>{item.desc.slice(0, 90)}...</p>
              <Link className='transition-all px-3 w-3/6 mx-2 rounded-lg text-center text-black hover:scale-105 hover:bg-white hover:text-green-400 py-2 bg-green-400 ' to={`/Service/${item.id}`}>Learn More!</Link>
              <div></div>
            </div>
          )
        })}
      </div>
    </div>
  );
}
