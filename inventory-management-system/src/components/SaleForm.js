import React, { useState } from 'react';
import useFetch from '../hooks/useFetch';
import { getTotalPrice } from '../helpers/helpers';
import axios from 'axios';

const SaleForm = () => {
  const { data: products, loading, error } = useFetch('http://localhost:5000/api/products');
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleSelectProduct = (productId, quantity) => {
    const product = products.find(p => p._id === productId);
    setSelectedProducts([...selectedProducts, { ...product, quantity }]);
  };

  const handleSale = () => {
    selectedProducts.forEach(product => {
      axios.post('http://localhost:5000/api/products/sell', { id: product._id, quantity: product.quantity })
        .then(() => window.location.reload());
    });
  };

  const totalPrice = selectedProducts.reduce((total, product) => total + (product.price * product.quantity), 0);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Sales</h1>
      <select onChange={(e) => handleSelectProduct(e.target.value, 1)}>
        <option value="">Select Product</option>
        {products.map(product => (
          <option key={product._id} value={product._id}>
            {product.name} - ${product.price} - {product.stock} in stock
          </option>
        ))}
      </select>
      <button onClick={handleSale}>Process Sale</button>
      <h2>Total Price: ${totalPrice}</h2>
    </div>
  );
};

export default SaleForm;
