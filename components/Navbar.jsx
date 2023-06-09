/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import CustomClock from './CustomClock'
import {FiMenu} from 'react-icons/fi'
import moment from 'moment'
import {AiOutlineClose} from 'react-icons/ai'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import Image from 'next/image'
import axios from 'axios'
import ReactCountryFlag from 'react-country-flag'




const Navbar = () => { 
  const [toggle, setToggle] = useState(false);
 
  // for location
  const [currLocation , setCurrLocation] = useState();
  useEffect(()=>{
      getLocation()
  },[])

  const getLocation = async () =>{
    const location = await axios.get('https://geolocation-db.com/json/')
    setCurrLocation(location.data)
  }

  return (
    <div className='container-fluid  items-center static bg-transparent w-full top-0  text-white'>
        <div className="container mx-auto  flex justify-between py-4 px-4 items-center">
            <div className='flex flex-1 gap-4 items-center justify-start text-white'>
              <div >
                <img src="/first-logo.png" className='w-[30px] h-[20px] lg:w-[50px] lg:h-[40px]'  alt=''/>
              </div>
              <div className='hidden lg:block '>
              <img className='text-white w-[150px] h-[40px]' src="/main-logo.png"  alt=''/>
              </div>
                <p className='text-white lg:text-xs leading-8 tracking-[2px] align-baseline uppercase ' >
                  About
              </p>
              
            </div>
            <div className='flex flex-1 items-center justify-center'>
               <img src="/white-logo.png" className='w-[90px] h-[20px] lg:w-[110px] lg:h-[25px]' alt=''/>
            </div>
            <div className='flex flex-1 justify-end gap-2 items-center'>

              <div  className=' hidden lg:flex items-center gap-1 uppercase  tracking-[2px] text-xs '>
                <div className='flex flex-col' >
                <div className='flex text-left justify-center items-center gap-1  tracking-[2px]'>
                  <div  className='text-xs '><CustomClock /></div>
                  <div className='text-xs '>London</div>
                  <div  className='text-xs '>United Kingdom</div>
                  {/* <div>{currLocation.country_name}</div> */}
                </div>
                
                <div className='leading-8 text-right'>
                  <p className='text-[#BE9F56] text-xs tracking-[4px]'>{moment().format('dddd , D MMMM YYYY')}</p>
                </div>
                </div>
                
              </div >
              <div className='flex items-center gap-2 '>
              <div>
              <ReactCountryFlag
                countryCode="CN"
                svg
                cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                cdnSuffix="svg"
                title="CN"

                style={{
                  width: '2.25rem',
                  height: '1.6rem',
              }}
            />
              </div>
              
              <div>
              <img src="/lock.png" width={21} height={25} alt='' />
              </div>
             <div>
              <img src="/login-user.png" width={21} height={25} alt=''/>
              </div>
              </div>
              
            </div>
            <div className='absolute top-[12%] lg:top-[80px] flex flex-col gap-2 text-xm lg:text-xl leading-8 tracking-[2px] uppercase items-center text-white'>
                    <button className='flex '>
                    <span className=''><AiOutlineArrowLeft size={30} />
                    </span>
                    <span>Back</span>
                    </button>
                    
                </div>
            {/* {toggle ? (
                <AiOutlineClose size={38} onClick={()=>setToggle(!toggle)} className='md:hidden block'/>
            ):(
                <FiMenu size={38} onClick={()=>setToggle(!toggle)} className='md:hidden block'/>
            )} */}
        </div>
              {/* Responsiveness for menu */}
        {/* <div className={`duration-300 md:hidden flex flex-col
                         w-[80%] h-screen fixed bg-black text-white top-[0px] 
                         ${toggle?`left-[0]`:`left-[-100%]`}`}>
              <Link href='/' className="hover:text-gren-700 py-5">About us</Link>
               <Link href='/' className="hover:text-gren-700 py-5">About us</Link>
               <Link href='/' className="hover:text-gren-700 py-5">About us</Link>
        </div> */}
    </div>
  )
}

export default Navbar