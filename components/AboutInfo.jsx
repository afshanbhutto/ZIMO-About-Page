/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image';
import { SlArrowDown} from 'react-icons/sl'
import Link from 'next/link';


const AboutInfo = () => {
  return (
    <div className="container  w-[500px] h-screen min-h-screen lg:w-full mx-auto md:w-full  ">
        <div className="flex items-center justify-center  uppercase mt-5 mb-2 md:mb-4 ">
                <div className='text-xs  lg:text-sm self-center lg:tracking-[2px] '>A real estate and property platform that is changing the world</div>
        </div>
        <div className=''>
        <div className="flex mx-auto md:flex-col pt-5 md:pt-10 relative justify-center">
            <div className='top-[8px] md:absolute lg:absolute md:top-[30px]  lg:top-[40px] md:left-4 lg:left-6 text-center lg:text-left md:items-center  uppercase'>
                <h3 className='tracking-[1.8px] text-sm md:text-base lg:text-2xl'>A revolutionary platform</h3>
                <h1 className='tracking-[4px] text-xl  md:text-2xl lg:text-4xl font-medium'>Entries - sellers</h1>
                <h1 className='tracking-[10.5px] text-2xl md:tracking-[10.5px] md:text-3xl lg:text-5xl font-semibold'>WorldWide</h1>
            </div>
            <div className='w-auto absolute flex flex-col top-[30px] lg-top[40px] md:top-[20px] bottom-0 md:right-4 lg:right-6 items-center md:items-center'>
                 <img src="/zimo-about.png" className='w-[100px] h-[40] md:w-[120px] md:h-[50px] lg:w-[200px] lg:h-[100px]  mt-28 lg:mt-36' alt=''/>
                 <div className=' leading-5 md:leading-6 lg:leading-8 mt-4 uppercase tracking-[2px] text-center text-xs md:text-[14px] lg:text-[18px]'>
                    <p className=''>Connecting users from accross the globe</p>
                    <p className=''>to faciliate lifes most important</p>
                    <p className=''>personal transactions</p>
                 </div>
            </div>
            <div className="w-auto flex flex-col absolute top-[280px] md:top-[250px] lg:top-[330px] text-center md:text-left  md:left-4 lg:left-6">
              <div className='w-auto mb-2'>
                <h1 className='text-xl md:text-2xl lg:text-3xl leading-5 tracking-[2px] md:text-left lg:text-left'>THE BEST OF THE BEST</h1>
              </div>
              <div className='w-auto leading-5 md:leading-6 lg:leading-8 tracking-[1px]'>
                <span className=' text-[11px] md:text-[13px] lg:text-[18px] text-center md:text-left  '>
                <p>COMBINATION OF AUTOMATION AND MANUAL CURATION OUR PRO AGENTS AND </p>
                <p>MODERATION TEAM SELECTS THE HIGHEST QUALITY LISTINGS ON THE MARKET </p>
                <p>FROM ACROSS THE WORLD.</p>
                
                </span>
              </div>


              <Link href={'#last-section'}>
              <div className='absolute mx-auto w-[100%] h-[40px] top-[120px] md:top-[130px] lg:top-[160px] md:left-[15%]  xl:left-[30%] flex items-center justify-center '>
                <SlArrowDown className='self-center' size={40}/>
              </div>
              </Link>
              
            </div>
            
        </div>
        
        </div>
        
    </div>
  )
}

export default AboutInfo