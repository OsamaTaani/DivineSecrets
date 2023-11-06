import React from 'react'
import logoDIVINE from '../assets/logoDIVINE.png'
import HeroImgThree from '../assets/HeroImgThree.jpg'
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react'

export const HeroSec = () => {
  useEffect(() => {
    AOS.init({
      duration: 500, 
      easing: 'ease', 
      once: false, 
    });
  }, []);
  return (
    <section className='object-cover md:flex md:flex-row items-center justify-center bg-[#EAE6DB] md:h-[39rem] sm:h-[35rem] sm:flex-col-reverse'>

        <img data-aos="fade-right" src={HeroImgThree} alt="LogoForHeroSection" style={{borderRight: '2px solid #403F2B' }} className='md:w-[60rem] md:h-[39rem] sm:w-[30rem] sm:h-[18rem]'/>
        <img data-aos="fade-left" src={logoDIVINE} alt="LogoForHeroSection" className='justify-end w-[25rem] h-[6rem] p-5'/>
    </section>


  )
}
