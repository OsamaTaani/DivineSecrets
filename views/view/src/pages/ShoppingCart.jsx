//react file
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Cookies from "js-cookie";
export const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]); // State to store the cart items
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [counters, setCounters] = useState({}); // State to maintain item counters
  const user_id = Cookies.get("user_id")
  // console.log("osama raed alnobani",id);

  // Function to increment the counter for a specific item by its ID
  const incrementCounter = (product_id) => {
    setCounters({
      ...counters,
      [product_id]: (counters[product_id] || 0) + 1,
    });
  };

  // Function to decrement the counter for a specific item by its ID
  const decrementCounter = (product_id) => {
    if (counters[product_id] > 1) {
      setCounters({
        ...counters,
        [product_id]: counters[product_id] - 1,
      });
    }
  };

  // Function to delete an item from the cart
  const deleteItem = (cart_id) => {
    console.log("Deleting item with ID:", cart_id);
  
    axios
      .delete(`http://localhost:3001/delete-cart/${cart_id}`)
      .then((response) => {
        // Remove the item from the cartItems state
        setCartItems(cartItems.filter((item) => item.cart_id !== cart_id));
        // Remove the counter for the deleted item
        setCounters((prevCounters) => {
          const { [cart_id]: deletedCounter, ...restCounters } = prevCounters;
          return restCounters;
        },[cart_id]);
      })
      .catch((error) => {
        console.error("Error deleting item:", error);
      });
  };

  useEffect(()=>{
  const fetchCartItems = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/user-cart/${user_id}`);
      setCartItems(response.data.data);
      console.log("Data", response.data);

      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      // setCartItems([]); // Set an empty array if there's an error
      setLoading(false);
    }
  };
  fetchCartItems()

},[user_id]);

  const calculateOrderTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * (counters[item.product_id] || 1);
    });
    return total.toFixed(2);
  };

  // Render the component
  return (
    <div>
      <section className="min-h-screen bg-gray-100 py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <h1 className="text-3xl font-semibold text-gray-900">Your Cart</h1>
          </div>
          <div className="mx-auto mt-8 max-w-2xl md:mt-12">
            <div className="bg-white shadow-lg rounded-lg relative">
              {loading ? (
                <p className="p-4 text-center">Loading...</p>
              ) : (
                <div className="p-4 sm:p-6">
                  {cartItems.map((item) => (
                    <div
                      key={item.cart_id}
                      className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0"
                    >
                      <div className="w-24 h-24 sm:w-32 sm:h-32">
                        <img
                          className="w-full h-full rounded-lg object-cover"
                          src={item.image}
                          // alt={item.product_name}
                        />
                      </div>
                      <div className="relative flex flex-1 flex-col justify-between">
                        <div className="sm:grid sm:grid-cols-2 sm:gap-5">
                          <div>
                            <p className="text-lg font-semibold text-gray-900">
                              {item.product_name}
                            </p>
                          </div>
                          <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                            <p className="text-lg font-semibold text-gray-900 sm:text-right">
                              $
                              {(item.price * (counters[item.product_id] || 1)).toFixed(
                                2
                              )}
                            </p>
                            <div>
                              <div className="mt-4 flex items-center">
                                <button
                                  className="border border-gray-300 rounded-full w-8 h-8 focus:outline-none"
                                  onClick={() => decrementCounter(item.product_id)}
                                >
                                  -
                                </button>
                                <span className="mx-3 text-xl font-semibold">
                                  {counters[item.product_id] || 1}
                                </span>
                                <button
                                  className="border border-gray-300 rounded-full w-8 h-8 focus:outline-none"
                                  onClick={() => incrementCounter(item.product_id)}
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute top-0 right-0 sm:top-auto sm:bottom-0">
                          <button
                            onClick={() => {
                              deleteItem(item.cart_id);
                            }}
                            type="button"
                            className="p-2 text-center text-gray-500 transition-all duration-200 ease-in-out hover:text-gray-900"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <>
          {/* Order summary */}
          <div className="mt-10 sm:ml-32 sm:pl-6">
            <div className="bg-gray-50 rounded-lg px-4 py-6 sm:p-6 lg:p-8">
              <h2 className="sr-only">Order summary</h2>
              <div className="flow-root">
                <dl className="-my-4 text-sm divide-y divide-gray-200">
                  <div className="py-4 flex items-center justify-between">
                    <dt className="text-base font-medium text-gray-900">
                      Order total
                    </dt>
                    {/* <dd className="text-base font-medium text-gray-900">$112.32</dd> */}
                    <dd className="text-base font-medium text-gray-900">
                      ${calculateOrderTotal()}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            <div className="mt-10">
  <Link
    to={{
      pathname: "/payment",
      state: {
        cartItems: cartItems,
        total: calculateOrderTotal(),
      },
    }}
  >
    <button
      type="button"
      className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
    >
      Pay
    </button>
  </Link>
</div>
        
          </div>
        </>
      </section>
   
    </div>
  );
};




