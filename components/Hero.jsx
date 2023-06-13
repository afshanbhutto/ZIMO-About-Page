import React from 'react'
import {SlArrowDown} from 'react-icons/sl';
import {AiOutlineArrowLeft} from 'react-icons/ai'
import Navbar from './Navbar';
import Link from 'next/link';
const Hero = () => {
  return (
    <div className="container-fluid   m-0 p-0 ">
<div className='bg-[url("/ad08e64c018e38e3d381ca3f8f1ce858.jpg")] h-screen  min-h-screen w-[500px] md:w-full lg:w-full m-0 p-0  bg-cover  bg-no-repeat bg-center flex gap-[30%]   flex-col lg:gap-[30%] md:gap-[20%] relative'>
        <div className="absolute insert-0 bg-black/50"></div>
        <Navbar/>
        <div className="container mx-auto px-4 z-10">
            <div className="flex flex-col text-left text-white gap-[10px] lg:gap-[10px]">
                <div className='leading-2' >
                    <p className='text-xl  lg:text-2xl  tracking-[2px] uppercase'>Discover</p>
                </div>
                <div className='tracking[4px] leading-8' >
                    <h1 className='text-xl  lg:text-4xl uppercase '>A new world</h1>
                </div>
                <div className='tracking-[2px] uppercase leading-7 text-left'>
                    <p className='text-gray-500 text-sm lg:text-base '>FOR THOSE WHO WISH FOR MORE... </p>
                </div>
            </div>
            <div className='text-gray-500 flex flex-col absolute leading-2 inset-x-0 bottom-0 items-center text-center'>
                <div className='uppercase mb-2 '>
                    <p className='tracking-[2px] text-xs lg:text-sm'>Bringing the world closer together</p>
                </div>
                <Link href={"#about-info-section"}>
                    <div className='w-[80px] h-[40px] text-white'><SlArrowDown size={40}/></div>
                </Link>
                
            </div>
        </div>
    </div>
    </div>
    
  )
}

export default Hero
