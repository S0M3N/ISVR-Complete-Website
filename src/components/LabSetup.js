import React from "react";

export default function LabSetup() {
  return (
    <div className="container lg:h-[80vh] h-[50vh] mx-auto items-center justify-center flex flex-col">
      <div className="text-center flex flex-col items-center">
        <div className="text-center lg:text-[180px] text-[100px] lg:mb-[-120px] mb-[-50px]">
          “
        </div>
        <h1 className="lg:text-3xl text-xl font-bold my-2">
          Wanna <span className="text-green-500">collaborate</span> with us!
        </h1>
        <div className="lg:text-lg lg:font-semibold">
          Partner with Us and Establish a Space Exploration Lab at Your
          Institute. Let's Collaborate to Unlock New Frontiers Together!
        </div>
        <a target="_blank" href="/contactus">
          <button className="btn bg-green-500 my-5 hover:bg-white hover:text-green-500 transition-all">
            Lab Setup!
          </button>
        </a>
      </div>
    </div>
  );
}
