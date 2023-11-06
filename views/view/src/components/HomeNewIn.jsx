import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import heroImgOne from '../assets/heroImgOne.jpg';
import { Cart } from '../assets/Cart';
import ShopCart from '../assets/ShopCart.png';




const HomeNewIn = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;
    
    // Text overflow hidden
    const [isHovered, setIsHovered] = useState(false);
    
    const handleHover = () => {
        setIsHovered(true);
    }
    // Fetching data
    useEffect(() => {
      const fetchData = async () => {
        try {
          // End Point
          
          const response = await axios.get('http://localhost:3001/Home'); 
          setData(response.data);
          
        }
         catch (error) {
          console.error('Error', error);
        }
      };
  
      fetchData();
    }, []);
  
    const currentItems = Array.isArray(data)
      ? data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
      : [];
  
    const paginate = (pageNumber) => {
      setCurrentPage(pageNumber);
    };

    return (
        <section className='bg-[#FEFAF0] bg-contain '>
          <p className='text-center text-4xl font-medium text-[#5C5C42] pt-8 mt-8 pb-4'>New In</p>
    
            <div className='flex flex-wrap justify-center gap-y-4 gap-x-8 pb-1 mt-8'>  
            {currentItems.map((card) => (
                <div className='flex flex-col justify-center'>
                    <div class="mb-4 max-w-[16rem] rounded-[3rem] dark:bg-gray-800 dark:border-gray-700">
                        <Link to={`/product/${card.product_id}`}>
                            <img data-aos="fade-up"
                data-aos-anchor-placement="center-bottom" key={card.product_id} className="rounded-[2rem] object-cover max-w-[16rem] h-[25rem] hover:opacity-75" src={heroImgOne} alt="product-image" />{/* blog.image */}
                        </Link>
                        <div  class="p-5">
                            <Link to={`/product/${card.product_id}`} > 
                                <p key={card.product_id} class={`${isHovered ? '' : 'truncate'} text-start hover:text-gray-900 text-[#5C5C42] mb-2 text-sm font-medium tracking-tight dark:text-white`}>{card.product_name}{/*blog.blog_title*/}</p>
                            </Link>
                                <p key={card.product_id} class="flex flex-row justify-between text-center hover:text-gray-900 text-[#5C5C42] dark:text-gray-400"><span className='justify-self-start'>$ {card.price}</span><img src={ShopCart} className='w-4 h-4 justify-self-end'/>{/*blog.blog_description*/}</p>
                        </div> 
                    </div>  
                </div>
            ))}
          </div>


        {/* Pagination  */}
        
          <ul className="pagination" class='list-none flex justify-center pb-12 '>
            {Array.from({ length: Math.ceil(data.length / itemsPerPage) }, (_, i) => (
            i + 1 >= currentPage - 1 && i + 1 <= currentPage + 1 ? (
                <li
                key={i}
                className={i + 1 === currentPage ? 'border rounded-full active bg-[#5C5C42] text-[#ffffff]' : ''}
                onClick={() => {
                    paginate(i + 1);
                }}
                class={`${
                    i + 1 === currentPage ? 'w-8 h-8 border rounded-full bg-[#5C5C42] text-[#ffffff] shadow text-center p-1 m-1' : 'w-8 h-8 border rounded-full bg-[#ffffff] hover:bg-[#5C5C42] hover:text-[#ffffff] shadow text-[#4C7581] text-center p-1 m-1'
                }`}
                >
                {i + 1}
                </li>
            ) : null
            ))}
          </ul>
          <Link to='/shopall'><p className='text-center pb-16 hover:underline'> Shop All Categories</p></Link>

        </section>

      );
      }
    
    export default HomeNewIn;