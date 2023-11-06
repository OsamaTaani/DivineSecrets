import React from 'react'
import heroImgOne from '../assets/heroImgOne.jpg'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react'


export const ShopCollections = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, 
          easing: 'ease', 
          once: false, 
        });
      }, []);
  return (
    <>
    <section className='flex flex-col items-center justify-center bg-[#FEFAF0] bg-contain'>
        <p className='text-center text-4xl font-medium text-[#5C5C42] pt-8 mt-8 pb-4'>Shop Collections</p>
        <div className='flex flex-wrap justify-around gap-y-4 gap-x-8 pb-6 mt-8'>  
        {/* {currentItems.map((card, userId) => ( */}
                <div data-aos="fade-up" className='flex flex-col'>
                    <div class="relative mb-4 max-w-[25rem] rounded-[3rem] dark:bg-gray-800 dark:border-gray-700">
                        <Link to={`/shopall`}>
                            <img key={''} className="rounded-[2rem] object-cover max-w-[25rem] h-[25rem] hover:opacity-75" src={heroImgOne} alt="product-image" />
                        </Link>
                        <Link to={`/shopall`}>
                            <div key={''} className="absolute inset-0 bg-[#403F2B] opacity-50 flex flex-col justify-center text-center rounded-[2rem] max-w-[25rem] h-[25rem]">{/* blog.image */}</div> 
                            <div key={''} className="absolute inset-0 flex flex-col justify-center text-center rounded-[2rem] max-w-[25rem] h-[25rem]">
                                <p className='text-[#FFFDC3] text-[2rem]'>Mask</p>
                                <p className='text-[#FEFAF0] text-lg'>Shop Collection</p>
                            </div> 
                        </Link>  
                    </div>  
                </div>
        {/* ))} */}
                <div data-aos="fade-down" className='flex flex-col'>
                    <div class="relative mb-4 max-w-[25rem] rounded-[3rem] dark:bg-gray-800 dark:border-gray-700">
                        <Link to={`/shopall`}>
                            <img key={''} className="rounded-[2rem] object-cover max-w-[25rem] h-[25rem] hover:opacity-75" src={heroImgOne} alt="product-image" />
                        </Link>
                        <Link to={`/shopall`}>
                            <div key={''} className="absolute inset-0 bg-[#403F2B] opacity-50 flex flex-col justify-center text-center rounded-[2rem] max-w-[25rem] h-[25rem]">{/* blog.image */}</div> 
                            <div key={''} className="absolute inset-0 flex flex-col justify-center text-center rounded-[2rem] max-w-[25rem] h-[25rem]">
                                <p className='text-[#FFFDC3] text-[2rem]'>Toners</p>
                                <p className='text-[#FEFAF0] text-lg'>Shop Collection</p>
                            </div> 
                        </Link>  
                    </div>  
                </div>
                <div data-aos="fade-up" className='flex flex-col'>
                    <div class="relative mb-4 max-w-[25rem] rounded-[3rem] dark:bg-gray-800 dark:border-gray-700">
                        <Link to={`/shopall`}>
                            <img key={''} className="rounded-[2rem] object-cover max-w-[25rem] h-[25rem] hover:opacity-75" src={heroImgOne} alt="product-image" />
                        </Link>
                        <Link to={`/shopall`}>
                            <div key={''} className="absolute inset-0 bg-[#403F2B] opacity-50 flex flex-col justify-center text-center rounded-[2rem] max-w-[25rem] h-[25rem]">{/* blog.image */}</div> 
                            <div key={''} className="absolute inset-0 flex flex-col justify-center text-center rounded-[2rem] max-w-[25rem] h-[25rem]">
                                <p className='text-[#FFFDC3] text-[2rem]'>Scrubs</p>
                                <p className='text-[#FEFAF0] text-lg'>Shop Collection</p>
                            </div> 
                        </Link>  
                    </div>  
                </div>
                
        </div>
        <Link to='/shopall'><p className='text-center pb-16 hover:underline'> Shop All Categories</p></Link>
    </section>
    </>
  )
}
