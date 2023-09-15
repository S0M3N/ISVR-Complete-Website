import React from "react";

export default function TestServ() {
  return (
    <div className="container mx-auto flex lg:flex-row flex-col min-h-[60vh] lg:py-5 py-2">
      <div className="lg:w-[50%] w-full flex flex-col justify-center items-start lg:text-5xl text-3xl font-bold">
        A Better Way to <span className="text-green-700">Explore</span> Universe
      </div>
      <div className="lg:w-[50%] w-full grid lg:grid-cols-3 grid-cols-2 gap-4 lg:mt-0 mt-8">
        <div className="min-h-[30vh] border p-4 flex flex-col items-center justify-center rounded-lg hover:bg-stone-800 transition-all">
          <h2 className="text-xl font-bold">Rocket Services</h2>
          <a href="/division/rocket" className="mt-2">
            <button className="bg-slate-500 py-1 px-2 rounded-lg">
              Learn More
            </button>
          </a>
        </div>
        <div className="min-h-[30vh] border p-4 flex flex-col items-center justify-center rounded-lg hover:bg-stone-800 transition-all">
          <h2 className="text-xl font-bold">Cube Satellite</h2>
          <a href="/division/satellite" className="mt-2">
            <button className="bg-slate-500 py-1 px-2 rounded-lg">
              Learn More
            </button>
          </a>
        </div>
        <div className="min-h-[30vh] border p-4 flex flex-col items-center justify-center rounded-lg hover:bg-stone-800 transition-all">
          <h2 className="text-xl font-bold">Drone Technology</h2>
          <a href="/division/drone" className="mt-2">
            <button className="bg-slate-500 py-1 px-2 rounded-lg">
              Learn More
            </button>
          </a>
        </div>
        <div className="min-h-[30vh] border p-4 flex flex-col items-center justify-center rounded-lg hover:bg-stone-800 transition-all">
          <h2 className="text-xl font-bold">Space Medicine</h2>
          <a href="/division/space_medicine" className="mt-2">
            <button className="bg-slate-500 py-1 px-2 rounded-lg">
              Learn More
            </button>
          </a>
        </div>
        <div className="min-h-[30vh] border p-4 flex flex-col items-center justify-center rounded-lg hover:bg-stone-800 transition-all">
          <h2 className="text-xl font-bold">Space Research</h2>
          <a href="/division/" className="mt-2">
            <button className="bg-slate-500 py-1 px-2 rounded-lg">
              Learn More
            </button>
          </a>
        </div>
        <div className="min-h-[30vh] border p-4 flex flex-col items-center justify-center rounded-lg hover:bg-stone-800 transition-all">
          <h2 className="text-xl font-bold">Robotics and AI</h2>
          <a href="/AutomatonX/" className="mt-2">
            <button className="bg-slate-500 py-1 px-2 rounded-lg">
              Learn More
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
