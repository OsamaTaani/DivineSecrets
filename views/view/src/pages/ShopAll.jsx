////////////////////////////////////////////////////////////

import React from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import heroImgOne from '../assets/heroImgOne.jpg';
// import { Dropdown } from 'flowbite-react';
import ShopCart from '../assets/ShopCart.png';




export const ShopAll = () => {
  const [isHovered, setIsHovered] = useState(false);

  const { userId } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // End Point
        const response = await axios.get('http://localhost:3001/home'); 
        setData(response.data);

      } catch (error) {
        console.error('Error', error);
      }
    };

    fetchData();
  }, []);

  // console.log("I am ........",data)

  const [filteredData, setFilteredData] = useState(data); 
  const [selectedTitle, setSelectedTitle] = useState('');
  const [selectedId, setSelectedId] = useState('');
  const [searchText, setSearchText] = useState('');

  
      /// Pagination 
      const [currentPage, setCurrentPage] = useState(1);
      const itemsPerPage = 8;
    
      const handleHover = () => {
        setIsHovered(true);
      }
      const currentItems = Array.isArray(filteredData)
      ? filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
      : [];

      const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
      };

      const shopALL = Array.isArray(filteredData)
        ? filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
        : [];

      const paginateShopALL = (pageNumber) => {
        setCurrentPage(pageNumber);
      };

  // Filters
  useEffect(() => {
    let updatedData = data;
    

    // Filter - category
    if (selectedTitle) {
      updatedData = updatedData.filter((item) =>
        item.category.toLowerCase().includes(selectedTitle.toLowerCase())
      );
    }
    // Filter - price
    if (selectedId) {
      updatedData = updatedData.filter((item) => item.price.toString() === selectedId);
    }
    // Filter - search
    if (searchText) {
      updatedData = updatedData.filter((item) =>
        item.product_name.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    // Set the filtered data in state
        setFilteredData(updatedData);
      }, [data, selectedTitle, selectedId, searchText]);

      // Handle change - category
      const handleTitleClick = (e) => {
        setSelectedTitle(e.target.value);
      };
      // Handle change - price
      const handleIdClick = (e) => {
        setSelectedId(e.target.value);
      };
      // Handle change - search
      const handleSearchChange = (e) => {
        setSearchText(e.target.value);
      };

    // Add to cart
      const handleAddToCart = () => {
        const productToAdd = {
          productId: 'product_id', 
          quantity: '1', 
        };
        // card endpoint
        axios.post('/api/cart/add', productToAdd)
          .then((response) => {
            if (response.status === 200) {
              // added to cart successfully 
            } else {
              console.log('server error')
            }
          })
          .catch((error) => {
            console.error('request error', error);
          });
      };


  return (
    <div className='bg-[#FEFAF0]'>
      
      <h3 className='text-center pt-24 pb-12 text-[3rem]'>SHOP ALL</h3>

      <div className="flex flex-wrap justify-center align-center gap-4">
        {/* Search input */}
        <input
          type="text"
          placeholder="Product Name .."
          onChange={handleSearchChange}
          value={searchText}
          className="px-4 text-[#403F2B] bg-[#FEFAF0] max-w-[15rem] md:border-2 md:border-[#403F2B]  hover:text-[#FEFAF0] hover:border-[#403F2B] font-medium rounded-lg text-sm text-center inline-flex items-center"
        />
        {/* Categories */}
        <select
          onChange={handleTitleClick}
          className="px-4 text-[#FEFAF0] bg-[#403F2B] max-w-[10rem] md:border-2 md:border-[#403F2B] hover:bg-[#403F2B] hover:text-[#FEFAF0] hover:border-[#403F2B] font-medium rounded-lg text-sm text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <option value="">All Categories</option>
          {data.map((item) => (
            <option
              key={item.product_id}
              value={item.category}
              className="block px-4 py-4 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              {item.category}
            </option>
          ))}
        </select>
        {/* Price */}
        <select
          onChange={handleIdClick}
          className="px-4 text-[#FEFAF0] bg-[#403F2B] max-w-[6rem] md:border-2 md:border-[#403F2B] hover:bg-[#403F2B] hover:text-[#FEFAF0] hover:border-[#403F2B] font-medium rounded-lg text-sm text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <option value="">Price</option>
          {data.map((item) => (
            <option
              key={item.product_id}
              value={item.price.toString()}
              className="block px-4 py-4 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              {item.price}
            </option>
          ))}
        </select>

        
      </div>

      

      {/* Cards Display */}
      <div className='flex justify-center justify-around flex-wrap gap-x-24 mt-24  mx-24'>
      {shopALL.map((card) => (
          <div className="flex flex-col justify-center">
            <div  key={card.product_id} className="mb-4 max-w-[16rem] rounded-[3rem] dark:bg-gray-800 dark:border-gray-700">
              <Link to={`/product/${card.product_id}`}>
                <img
                  className="rounded-[2rem] object-cover max-w-[16rem] h-[25rem] hover:opacity-75"
                  src={heroImgOne}
                  alt="product-image"
                />
              </Link>
              <div className="p-5">
                <Link to={`/product/${card.product_id}`}>
                  <p
                    className={`${isHovered ? '' : 'truncate'} text-start hover:text-gray-900 text-[#5C5C42] mb-2 text-sm font-medium tracking-tight dark:text-white`}
                  >
                    {card.product_name}
                  </p>
                </Link>
                <p className="flex flex-row justify-between text-center hover:text-gray-900 text-[#5C5C42] dark:text-gray-400">
                  <span className="justify-self-start">$ {card.price}</span>
                  <button onClick={handleAddToCart}><img src={ShopCart} className="w-4 h-4 justify-self-end" /></button>
                </p>
              </div>
            </div>
          </div>
          ))}
      </div>
       {/* Pagination  */}
       <ul className="pagination" class='list-none flex justify-center pb-12 '>
            {Array.from({ length: Math.ceil(filteredData.length / itemsPerPage) }, (_, i) => (
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
    </div>
  );
}



