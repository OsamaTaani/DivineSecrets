import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

import heroImgOne from '../assets/heroImgOne.jpg'
import { Link } from 'react-router-dom'


export const ShopNow = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, 
          easing: 'ease', 
          once: false, 
        });
      }, []);
  return (
    <>
    
    <section  className='flex md:flex-row items-center justify-center bg-contain bg-[#C4C197] h-[40rem] md:gap-[20rem] sm:flex-col-reverse sm:gap-4 sm:pt-12 sm:pb-12'>
            
            <div data-aos="zoom-in" className='flex flex-col justify-center gap-4 md:justify-start sm:justify-center sm:justify-items-center sm:content-center	'>
                <p className='text-[3rem] font-medium text-[#5C5C42]'>Top Seller</p>
                <p className='text-4 font-medium text-[#5C5C42]'>Top Seller</p>
                <Link to='/shopall' class="text-white w-[8rem] bg-[#5C5C42] hover:bg-[#FEFAF0] hover:text-[#5C5C42] font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Shop Now</Link>
            </div>
            <img data-aos="zoom-in-up" className="rounded-[2rem] object-cover max-w-[35rem] h-[30rem] hover:opacity-75" src={heroImgOne} alt="product-image" />
        </section>
    </>
  )
}
