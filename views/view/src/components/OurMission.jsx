import React,  { useEffect } from 'react'
import WellLight from '../assets/WellLight.png'
import 'aos/dist/aos.css';
import AOS from 'aos';
import { Link } from 'react-router-dom';

export const OurMission = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, 
          easing: 'ease', 
          once: false, 
        });
      }, []);
  return (
    <section data-aos="zoom-in" className='flex flex-col items-center justify-center justify-items-center bg-[#5C5C42] bg-contain pt-12 pb-12 '>
        <h3 className='text-[4rem] text-[#FEFAF0] '>Our Mission</h3>
        <p className='text-[#FEFAF0] py-10'>We believe in ethical and smart shopping. All of our products are carefully selected to ensure they align with our core values.</p>
        <div className='flex flex-row justify-between gap-24'>
            <div className='flex flex-col flex-wrap justify-center content-center items-center	'> 
                <img data-aos="zoom-in" src={WellLight} alt="" className=' w-24 align-self-center' />
                <p data-aos="zoom-in" className='text-center w-40 text-[#FEFAF0] py-10'>Aromatherapy and essential oil treatments</p>
            </div>
            <div className='flex flex-col justify-center'> 
                <img data-aos="zoom-in" src={WellLight} alt="" className='w-24' />
                <p data-aos="zoom-in" className='text-center w-40 text-[#FEFAF0] py-10'>Chemical peels for skin renewal</p>
            </div>
            <div className='flex flex-col justify-center'> 
                <img data-aos="zoom-in" src={WellLight} alt=""  className='w-24'/>
                <p data-aos="zoom-in" className='text-center w-40 text-[#FEFAF0] py-10'>Customized facials for different skin types</p>
            </div>

        </div>
        <Link to='/aboutus' class=" text-[#5C5C42] w-[12rem] bg-[#FEFAF0] hover:bg-[#FEFAF050] hover:text-[#FEFAF0] font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get to know us </Link>

    </section>
  )
}
