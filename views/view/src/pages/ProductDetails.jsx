import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Cookies from 'js-cookie';

export const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      console.log("id", id);
      try {
        const response = await axios.get(`http://localhost:3001/products_details/${id}`);
        setProduct(response.data[0]);
        console.log("Data", response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, [id]);

  const user_id = Cookies.get("user_id");

  const addToCart = () => {
    // Create an object with the product data
    const productData = {
      "product_id": product.product_id,
      "product_name": product.product_name,
      "price": product.price,
      "description": product.description,
      "user_id": user_id,
      // Add other properties as needed
    };

    // Get the authentication token from cookies
    const token = Cookies.get("token");

    // Make a POST request to your shopping cart endpoint
    axios
      .post("http://localhost:3001/add-to-cart", productData, {
        headers: {
          Authorization: user_id ? `Bearer ${user_id}` : '',
        },
      })
      .then((response) => {
        console.log("Product added to cart:", response.data);
      })
      .catch((error) => {
        console.error("Error adding product to cart: ", error);
      });
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* ... Your product details JSX ... */}
      <div className="bg-gray-100 dark:bg-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                {/* <img
                  className="w-full h-full object-cover"
                  src={product.image}
                  alt="Product Image"
                /> */}
              </div>
              <div className="flex -mx-2 mb-4">
                <div className="w-1/2 px-2">
                  <button
                    className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover-bg-gray-700"
                    onClick={() => { addToCart() }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                {product.product_name}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {product.product_name}
              </p>
              <div className="flex mb-4">
                <div className="mr-4">
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    Price: {product.price}
                  </span>
                </div>
                <div>
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    Availability:
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">In Stock</span>
                </div>
              </div>
              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Product Description: {product.description}
                </span>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
