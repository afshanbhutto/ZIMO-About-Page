import React from 'react'

import {BsChevronLeft} from 'react-icons/bs';
const PrevArrow = ({onClick}) => {
  return (
    <div className='absolute right-[80px] -top-[80px]' onClick={onClick}>
        <div className="grid w-[50px] h-[50px] rounded-full place-items-center cursor-pointer">
            <BsChevronLeft className='w-[30px] h-[30px] md:w-[40px] md:h-[50px]' size={40}/>
        </div>
    </div>
  )
}

export default PrevArrow