/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Card = ({img, imgDesc}) => {
  return (
    <div className='md:w-full w-[300px] container relative text-center mx-auto'>
            <img className='h-[300px] w-[300px] object-cover rounded-2xl'  src={img} alt="team-member" />
            <p class="absolute left-[50%] top-[90%] -translate-x-1/2 -translate-y-1/2 text-[20px] text-white ">{imgDesc}</p>
            
    </div>
  )
}

export default Card