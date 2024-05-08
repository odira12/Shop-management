import React, { useState } from 'react';
import axios from 'axios';
import { calculateTotalPrice } from './helpers';

const SaleForm = ({ products }) => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleAddProduct = (e) => {
    const productId = e.target.value;
    const product = products.find(p => p.id === productId);
    setSelectedProducts([...selectedProducts, product]);
  };

  const handleRemoveProduct = (productId) => {
    const updatedProducts = selectedProducts.filter(p => p.id !== productId);
    setSelectedProducts(updatedProducts);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const totalPrice = calculateTotalPrice(selectedProducts);
    alert(`Total Price: ${totalPrice}`);
    setSelectedProducts([]);

    // You can send the selected products to the backend for further processing if needed
    
    try {
      await axios.post('http://localhost:5000/sale', { products: selectedProducts });
    } catch (error) {
      console.error('Error processing sale:', error);
      alert('Failed to process sale');
    }
  };

  return (
    <div>
      <h2>Sale Form</h2>
      <form onSubmit={handleSubmit}>
        <select onChange={handleAddProduct}>
          <option value="">Select a Product</option>
          {products.map(product => (
            <option key={product.id} value={product.id}>{product.name}</option>
          ))}
        </select>
        <ul>
          {selectedProducts.map(product => (
            <li key={product.id}>
              {product.name} - {product.price}
              <button type="button" onClick={() => handleRemoveProduct(product.id)}>Remove</button>
            </li>
          ))}
        </ul>
        <button type="submit">Calculate Total</button>
      </form>
    </div>
  );
};

export default SaleForm;
