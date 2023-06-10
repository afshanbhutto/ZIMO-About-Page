/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';

const EntryTickets = () => {
  return (
    <div className="container mx-auto ">
      <div className=" absolute top-[1500px] md:top-[1600px] lg:mt-[40px] xl:mt-[500px]  flex items-center justify-center lg:justify-normal lg:gap-x-54 flex-col md:flex-row">
        <div className="text-left lg:flex-1 lg:justify-left justify-center items-center ">
          <img src="/zimo-logo.png" className='w-[200px] h-[50px] md:w-[200px] md:h-[60px] lg:w-[230px] lg:h-[90px]'  alt="" />
          <div className=" leading-2 mt-5 uppercase tracking-[4px] text-left mb-3">
            <p className="text-2xl  lg:text-[40px] lg:mb-8">one source</p>
            <p className="text-3xl lg:text-[50px] lg:mb-10">entry tickets</p>
            <p className="text-lg md:text-sm lg:text-[20px] lg:mb-5">FOR ALL PREMIUM LISTINGS</p>
          </div>
        </div>
        <div className="lg:items-left justify-center items-center lg:justify-right lg:flex-2 float-right">
          <div
            className="flex flex-col flex-2 items-center  w-[490px] h-[400px] lg:w-[600px] lg:h-[500px] xl:w-[800px] xl:h-[600px]"
          >
            <img
              src="/65c8a1f0ee7329a44d1812b2f35ced5c.jpg"
              className="rounded-md
            bg-contain bg-no-repeat bg-center
            backdrop-opacity-70 bg-black/40 insert-0 object-cover w-full h-full lg:w-full lg:h-full xl:w-full xl:h-full"
              
              alt="/"
            />

            <span className="text-xm md:text-xl uppercase text-center pt-5 tracking-wider">
              let your dreams come true
            </span>
          </div>
        </div>

        {/* <div className='hidden md:mb-0 md:mt-56 w-auto text-right'><span className='md:top-[30px] tracking-wider text-right'>LET YOUR DREAMS FIND YOU</span></div> */}
      </div>
    </div>
  );
}

export default EntryTickets