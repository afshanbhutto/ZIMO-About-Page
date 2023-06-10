import React, { useEffect, useState } from 'react';
import Card from './Card';
import Slider from 'react-slick';
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';

const images = [
  { img: "/pic-1.jpg", imgDesc: "JETS" },
  { img: "/pic-2.png", imgDesc: "PRIVATE ISLANDS" },
  { img: "/pic-3.jpg", imgDesc: "REAL ESTATE" },
  { img: "/pic-4.png", imgDesc: "CARS" },
  { img: "/pic-5.png", imgDesc: "YACHTS" },
  { img: "/pic-6.png", imgDesc: "WATCHES" },
  { img: "/pic-7.png", imgDesc: "TRAVEL THE WORLD" },
  { img: "/pic-8.jpg", imgDesc: "DIAMONDS" },
];

const MySlider = () => {

    // for responsiveness
    const [slidesToShow, setSlidesToShow] =useState(4);

    const setSlides = () =>{
        if(window.innerWidth <= 1200 && window.innerWidth > 1000){
            setSlidesToShow(3)
        }else if(window.innerWidth <= 1000 && window.innerWidth > 650){
            setSlidesToShow(2)
        }else if(window.innerWidth <= 650){
            setSlidesToShow(1)
        }
    } 

    useEffect(()=>{
        setSlides();
        window.addEventListener("resize", ()=>{setSlides()})
    },[])
    const settings = {
        arrows:true,
        infinite:true,
        speed:500,
        slidesToShow:4,
        slidesToScroll:1,
        nextArrow: <NextArrow />,
        prevArrow:<PrevArrow/>,
        responsive:[
            {
                breakpoint:1280,
                settings:{
                    slidesToShow:3,
                }

            },
            {
                breakpoint:1000,
                settings:{
                    slidesToShow:2,
                }
            },
            {
                breakpoint:650,
                settings:{
                    slidesToShow:1,
                }
            },
        ],


    }
  return (
    <div className='container  w-[500px] h-screen lg:w-full mx-auto md:w-full mt-[30px] md:mt-[-0px] lg:mt-[120px] md:left-4 lg:left-6  xl:mt-[130px]'>
        <div className=''>
            <h1 className=' uppercase pl-4 text-2xl md:text-2xl lg:text-4xl text-left mt-[20px] mb-[50px] leading-4 tracking-[4px]'>Our Categories</h1>
            <div className='relative mb-10 container mx-auto md:pl-2'>
            
                <Slider {...settings}>    
                    {images.map((imgData, index) => <Card key={index} img={imgData.img} imgDesc={imgData.imgDesc}/>)}
                </Slider>
            </div>
            <div className='text-center md:mb-10 mb-5'>
                <h1 className='text-xm md:text-xl uppercase  tracking-[4px] mb-[1rem] md:mb-[2rem]'>One platform for all premium listings</h1>
                <h2 className='text-xm md:text-lg uppercase mb-5 tracking-[4px] leading-4'>Unlimited potential</h2>
            </div>
        </div>
    </div>
    
  )
}

export default MySlider 