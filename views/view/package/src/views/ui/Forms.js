import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    productName: '',
    description: '',
    price: '',
    category: '',
    imageFile: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append('productName', formData.productName);
    form.append('description', formData.description);
    form.append('price', formData.price);
    form.append('category', formData.category);
    form.append('quantity', formData.quantity);
    form.append('imageFile', formData.imageFile);

    axios.post('https://fakestoreapi.com/products', form)
      .then(response => {
        console.log('Form data sent successfully:', response.data);
        onSubmit(response.data);
      })
      .catch(error => {
        console.error('Error sending form data:', error);
      });

    setFormData({
      productName: '',
      description: '',
      price: '',
      category: '',
      quantity: '',
      imageFile: null,
    });
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    marginBottom: '10px',
    border: '1px solid ',
    fontSize: '14px',
  };

  const buttonStyle = {
    backgroundColor: '#403F2B',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  };

  return (
    <form style={{ maxWidth: '400px', margin: '60px auto 0', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#403F2B10' }} onSubmit={handleSubmit}>
      <label className='text-[#403F2B]'>
        Product Name:
        <input
          type="text"
          name="productName"
          value={formData.productName}
          onChange={handleChange}
          style={inputStyle}
          required
          class="bg-[#403F2B10] w-full mt-1 px-3 py-2 mb-1 border-[#403F2B] bg-transparent placeholder-[#403F2B80] border-[#403F2B70]  rounded-md  focus:outline-none focus:border-[#403F2B] "
          placeholder='Product Name'
        />
      </label>
      <label>
        Description:
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          style={{ ...inputStyle, height: '100px' }}
          required
          class="bg-[#403F2B10] w-full mt-1 px-3 py-2 mb-1 border-[#403F2B] bg-transparent placeholder-[#403F2B80] border-[#403F2B70]  rounded-md  focus:outline-none focus:border-[#403F2B] "
          placeholder='Description'
        />
      </label>
      <label>
        Price:
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          style={inputStyle}
          step="0.01"
          required
          class="bg-[#403F2B10] w-full mt-1 px-3 py-2 mb-1 border-[#403F2B] bg-transparent placeholder-[#403F2B80] border-[#403F2B70]  rounded-md  focus:outline-none focus:border-[#403F2B] "
          placeholder='Price'
        />
      </label>
      <label>
        Category:
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          style={inputStyle}
          required
          class="bg-[#403F2B10] w-full mt-1 px-3 py-2 mb-1 border-[#403F2B] bg-transparent placeholder-[#403F2B80] border-[#403F2B70]  rounded-md  focus:outline-none focus:border-[#403F2B] "
          placeholder='Category'
        />
      </label>
      {/* <label>
        Quantity:
        <input
          type="number"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          style={inputStyle}
          required
          class="bg-[#403F2B10] w-full mt-1 px-3 py-2 mb-1 border-[#403F2B] bg-transparent placeholder-[#403F2B80] border-[#403F2B70]  rounded-md  focus:outline-none focus:border-[#403F2B] "
          placeholder='Price'
        />
      </label> */}
      <label>
        Upload Image:
        <input
          type="file"
          name="imageFile"
          onChange={handleChange}
          style={inputStyle}
          accept="image/*"
          required
          class="bg-[#403F2B10] w-full mt-1 px-3 py-2 mb-1 border-[#403F2B] bg-transparent placeholder-[#403F2B80] border-[#403F2B70]  rounded-md  focus:outline-none focus:border-[#403F2B] "
        />
      </label>
      <button type="submit" style={buttonStyle}>Add Product</button>
    </form>
  );
};

export default ProductForm;
