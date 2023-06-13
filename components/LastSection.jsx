/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';
import {AiOutlineArrowRight} from 'react-icons/ai'
const LastSection = () => {
  return (
    <div className="container-fluid mx-auto w-[500px] md:w-full ">
      <div className='bg-[url("/a127809b20d09f96783f575dbf41f49f.jpg")]  w-full h-[100vh] top-[700px] md:top-[500px] lg:top-[600px] xl:top-[600px]  bg-cover  bg-no-repeat bg-center flex items-center relative'>
        <div className="container  flex mx-auto lg:w-full px-4 w-[480px] h-[350px] z-10 md:bg-transparent bg-slate-400 opacity-75 md:opacity-1">
          <div className="flex flex-col md:justify-end  items-center text-center md:text-right text-white">
            <div className="w-auto absolute top-[20%] left-[7%] md:left-[60%] md:top-[10%] ">
              <h1 className="text-lg md:text-xl lg:text-3xl font-semibold tracking-wider uppercase mt-0">
                Personalized for you
              </h1>
              <div className="md:absolute text-center  md:text-right mt-5">
                <p className="text-white  text-lg md:text-base tracking-[2px] leading-7 text-center md:text-left ">
                  Delivering thousands of personalised alerts everyday,our
                  USERS can be first in line when that opportunity of a lifetime
                  is here.
                  
                </p>
              </div>
            </div>
          </div>
          <div className="flex md:w-[1200px] w-[530px]  justify-between items-center relative mt-36 ">
            <div className="flex-1">
              <img src="/white-logo.png" className='w-[100px] h-[30px] md:w-[130px] md:h-[40px] lg:w-[240px] lg:h-[70px]' alt="" />
            </div>
            <div className=" md:absolute flex flex-1 gap-[10px] right-2 justify-end text-right items-end  text-white">
              <button className='flex justify-center items-center'>
                <span className='text-lg lg:text-2xl'>Create User</span>
                <span className="">
                  <AiOutlineArrowRight size={40} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LastSection