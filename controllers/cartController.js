const cartModel = require('../models/cartModel');

const addToCart = async (req, res) => {
  const { user_id, product_id } = req.body;

  try {
    const data = await cartModel.addToCart(user_id, product_id);
    res.status(200).json({ message: 'Product added to cart successfully', data });
  } catch (error) {
    console.error('Error adding product to cart: ', error);
    res.status(500).json({ error: 'Error adding product to cart' });
  }
};

const getUserCartWithImages = async (req, res) => {
  const cart_id = req.params.cart_id;

  try {
    const data = await cartModel.getUserCartWithImages(cart_id);
    res.status(200).json( data );
  } catch (error) {
    console.error('Error fetching user cart with images: ', error);
    res.status(500).json({ error: 'Error fetching user cart with images' });
  }
};

module.exports = {
  addToCart,
  getUserCartWithImages,
};
