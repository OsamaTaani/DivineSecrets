const pool = require('../db');

const addToCart = async (user_id, product_id) => {
  console.log(user_id);

  try {
    const addToCartQuery = 
      'INSERT INTO carts (user_id, product_id) VALUES ($1, $2) RETURNING *';

    const values = [user_id, product_id];
    const { rows } = await pool.query(addToCartQuery, values);
    return rows[0];
    
  } catch (error) {
    throw error;
  }
};
const getUserCartWithImages = async (cart_id) => {
    try {
      const getCartQuery = 
        'SELECT p.product_name, p.description, p.price, c.quantity FROM carts c INNER JOIN products p ON c.product_id = p.product_id WHERE c.cart_id = $1';
  
      const { rows } = await pool.query(getCartQuery, [cart_id]);
      return rows;
    } catch (error) {
      throw error;
    }
  };
  
module.exports = {
  addToCart,
  getUserCartWithImages,
};
